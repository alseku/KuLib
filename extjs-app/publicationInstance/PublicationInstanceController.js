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
    },

    getAdditionalActions: function () {
        var actions = {};
        actions[this.gridXType + ' button[action=Return]'] = {
            click: { fn: this.onReturn, scope: this }
        };
        actions[this.gridXType + ' button[action=SetReturnDate]'] = {
            click: { fn: this.onSetReturnDate, scope: this }
        };        
        return actions;
    },

    onReturn: function (button) {
        var record = button.up('grid').getSelectionModel().getSelection()[0];
        if (!record) return;
        var UserId = record.get('UserId');
        if (!UserId) return;

        var params = {
            Id: record.get('Id'),
            UserId: null
        }
        this.save(params);
    },

    onSetReturnDate: function (button) {
        var record = button.up('grid').getSelectionModel().getSelection()[0];
        if (!record) return;
        var UserId = record.get('UserId');
        if (!UserId) return;

        var params = {
            Id: record.get('Id'),
            UserId: UserId,
            ReturnDate: record.get('ReturnDate'),
        }
        
        var controller = this;
        var win = Ext.create('Ext.window.Window', {
            modal: true,
            width: 200,
            title: 'Дата возврата',
            layout: 'form',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'datefield',
                    allowBlank: false,
                    format: 'd.m.Y',
                    altFormats: 'c',
                    value: params.ReturnDate,
                },
            ],
            buttons: {
                layout: { pack: 'center' },
                items: [
                    {
                        text: 'OK',
                        handler: function () {
                            var datefield=win.down('datefield');
                            if (datefield.isValid()) {
                                params.ReturnDate = datefield.value;
                                win.close();
                                controller.save(params);
                            };
                        }
                    },
                    { text: 'Cancel', handler: function () { win.close() } }
                ],
            },
        }).show();
    },

    onDbClick: function (view, record) {
        if (!record.get('UserId')) this.callParent(arguments);
    },

    onEdit: function (button) {
        var grid = button.up('grid');
        if (grid.forUserWin) {
            this.editRecord(null, grid);
            return;
        }
        var record = grid.getSelectionModel().getSelection()[0];
        if (record) {
            this.editRecord(record.get('Id'), grid);
        }
    },

    editRecord: function (PublicationInstanceId, grid) {
        var controller = this;
        var windowXType = controller.getWindowType();
        var window = Ext.widget(windowXType, { forUserWin: grid.forUserWin, UserId: grid.UserId});
        window.down('form').getForm().setValues({ Id: PublicationInstanceId });
        //window.afterSetValues();

    },

    onSave: function (button) {
        var window = button.up('window'),
            form = window.down('form'),
            values = form.getValues();

        if (!form.isValid()) {
            Ext.Msg.alert("Внимание", "Форма заполнена с ошибками");
            return;
        }

        if (window.forUserWin) {
            values.Id = values.PublicationInstanceId;
            values.UserId = window.UserId;
        }

        this.save(values, function () { window.close(); });
    },

});