Ext.define('KuLib.publicationInstance.PublicationInstanceController', {
    extend: 'KuLib.base.BaseController',

    requires: [
        'KuLib.publicationInstance.PublicationInstanceWindow'
    ],

    gridXType: 'publicationinstancegrid',
    windowXType: 'publicationinstancewindow',

    relatedGridXTypes: [
        'publicationgrid',
        'journalissuegrid',
        'bookgrid',
        'usergrid'
    ],

    controllerName: 'PublicationInstance',

    onNew: function (button) {
        var grid = button.up('grid');

        var controller = this;

        Ext.Ajax.request({
            url: '/' + this.controllerName + '/' + this.createAction,
            params: {
                PublicationId: grid.PublicationId
            },
            success: function (response, options) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Сообщение', data.message);

                    Ext.ComponentQuery.query(controller.gridXType).forEach(function (item) {
                        item.getStore().load();
                    });
                    
                    controller.relatedGridXTypes.forEach(function (gridXType) {
                        Ext.ComponentQuery.query(gridXType).forEach(function (item) {
                            item.getStore().load();
                        });
                    });
                }
                else {
                    Ext.Msg.alert('Ошибка!', res.message);
                }
            }
        });
    }
});