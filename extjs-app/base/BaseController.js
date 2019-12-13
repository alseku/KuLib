Ext.define('KuLib.base.BaseController', {
    extend: 'Ext.app.Controller',

    // xtype грида, который обслуживается данным контроллером
    gridXType: null,
    // xtype окна редактирования, с котором работает контроллер
    windowXType: null,
    // список гридов, данные в которых зависят от работы данного контроллера
    relatedGridXTypes: [],

    controllerName: null,
    createAction: 'Create',
    updateAction: 'Update',
    getAction: 'Get',
    deleteAction: 'Delete',

    init: function () {
        var actions = {};

        actions[this.gridXType] = {
            itemdblclick: { fn: this.onDbClick, scope: this }
        };

        actions[this.gridXType + ' button[action=new]'] = {
            click: { fn: this.onNew, scope: this }
        };

        actions[this.gridXType + ' button[action=edit]'] = {
            click: { fn: this.onEdit, scope: this }
        };

        actions[this.gridXType + ' button[action=delete]'] = {
            click: { fn: this.onDelete, scope: this }
        };

        actions[this.windowXType + ' button[action=saveRecord]'] = {
            click: { fn: this.onSave, scope: this }
        };

        actions[this.windowXType + ' button[action=deleteRecord]'] = {
            click: { fn: this.onDeleteFromWindow, scope: this }
        };

        Ext.apply(actions, this.getAdditionalActions());

        this.control(actions);
    },

    getAdditionalActions: function () {
        return {};
    },

    onNew: function () {
        var window = Ext.widget(this.windowXType, { isNew: true });
    },

    onSave: function (button) {
        var win     = button.up('window'),
            form    = win.down('form'),
            values = form.getValues();

        if (!form.isValid()) {
            Ext.Msg.alert("Внимание", "Форма заполнена с ошибками");
            return;
        }

        this.save(values, function () { win.close(); });
    },

    save: function (values, successCallback) {
        var saveAction = values.Id ? this.updateAction : this.createAction;
        var controller = this;
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

                    controller.relatedGridXTypes.forEach(function (gridXType) {
                        Ext.ComponentQuery.query(gridXType).forEach(function (item) {
                            item.getStore().load();
                        });
                    });

                    if (successCallback) {
                        successCallback();
                    }
                }
                else {
                    Ext.Msg.alert('Ошибка!', data.message);
                }
            }
        });
    },

    onDeleteFromWindow: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();

        if (!values.Id) {
            Ext.Msg.alert('Внимание', 'Невозможно удалить запись, которая не была сохранена');
        }

        this.deleteRecord(values.Id, function () { win.close(); });
    },

    onDbClick: function (view, record) {
        this.editRecord(record.get('Id'), view.panel);
    },

    onEdit: function (button) {
        var grid = button.up('grid');
        var record = grid.getSelectionModel().getSelection()[0];
        if (record) {
            this.editRecord(record.get('Id'), grid);
        }
    },

    onDelete: function (button) {
        var grid = button.up('grid');
        var record = grid.getSelectionModel().getSelection()[0];

        if (record) {
            this.deleteRecord(record.get('Id'));
        }
    },

    deleteRecord: function (id, successCallback) {
        var controller = this;
        Ext.Ajax.request({
            url: '/' + this.controllerName + '/' + this.deleteAction,
            params: { id: id },
            success: function (response) {
                var res = Ext.decode(response.responseText);
                if (res.success) {
                    Ext.ComponentQuery.query(controller.gridXType).forEach(function (item) {
                        item.getStore().load();
                    });

                    controller.relatedGridXTypes.forEach(function (gridXType) {
                        Ext.ComponentQuery.query(gridXType).forEach(function (item) {
                            item.getStore().load();
                        });
                    });

                    if (successCallback) {
                        successCallback();
                    }
                } else {
                    Ext.Msg.alert('Ошибка!', res.message);
                }
            }
        });
    },

    editRecord: function (id, grid) {
        var controller = this;
        Ext.Ajax.request({
            url: '/' + this.controllerName + '/' + this.getAction,
            params: { id: id },
            success: function (response) {
                var res = Ext.decode(response.responseText);
                if (res.success) {
                    var windowXType = controller.getWindowType(res.data);
                    var window = Ext.widget(windowXType, controller.getEditWindowConfig(res.data, grid));
                    window.down('form').getForm().setValues(res.data);
                    window.afterSetValues();
                } else {
                    Ext.Msg.alert('Ошибка!', res.message);
                }
            }
        });
    },

    getEditWindowConfig: function (data, grid) {
        return {};
    },

    getWindowType: function (record) {
        return this.windowXType;
    }
});