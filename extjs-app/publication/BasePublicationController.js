Ext.define('KuLib.publication.BasePublicationController', {
    extend: 'Ext.app.Controller',

    gridXType: null,
    windowXType: null,

    controllerName: null,
    createAction: 'Create',
    updateAction: 'Update',

    init: function () {
        var actions = {};

        actions[this.gridXType + ' button[action=new]'] = {
            click: { fn: this.onNew, scope: this }
        };

        actions[this.windowXType + ' button[action=save]'] = {
            click: { fn: this.onSave, scope: this }
        };

        Ext.apply(actions, this.getAdditionalActions());

        this.control(actions);
    },

    getAdditionalActions: function () {
        return {};
    },

    onNew: function () {
        var window = Ext.widget(this.windowXType);
    },

    onSave: function (button) {
        var controller = this;
        var win     = button.up('window'),
            form    = win.down('form'),
            values = form.getValues();

        var saveAction = values.Id ? this.updateAction : this.createAction;

        Ext.Ajax.request({
            url: '/' + this.controllerName + '/' + saveAction,
            params: values,
            success: function (response, options) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Сообщение', data.message);

                    Ext.ComponentQuery.query(controller.gridXType).forEach(function (item) {
                        item.getStore().load();
                    });
                }
                else {
                    Ext.Msg.alert('Ошибка!', 'Не удалось сохранить');
                }
            }
        });
    }
});