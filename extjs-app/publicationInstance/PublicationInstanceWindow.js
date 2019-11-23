Ext.define('KuLib.publicationInstance.PublicationInstanceWindow', {
    extend: 'KuLib.base.BaseWindow',
    alias: 'widget.publicationinstancewindow',

    requires: [
        'KuLib.user.UserStore'
    ],

    title: 'Экземпляр',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        var window = this;

        var store = Ext.create('KuLib.user.UserStore');
        store.on('load', function () {
            store.insert(0, [{
                IdentString: 'Пусто',
                Id: null
            }]);
        });
        store.load();

        items.push({
            xtype: 'combobox',
            name: 'UserId',
            fieldLabel: 'Пользователь',
            allowBlank: false,
            displayField: 'IdentString',
            valueField: 'Id',
            queryMode: 'remote',
            store: store
        });
        items.push({
            xtype: 'datefield',
            name: 'ReturnDate',
            fieldLabel: 'Дата возврата',
            allowBlank: true,
            format: 'd.m.Y',
            altFormats: 'c',
            getErrors: function (value) {
                var errors = [];
                if (!value) {
                    if (window.down('combobox[name=UserId]').getValue()) {
                        errors.push('При передаче книги пользователю необходимо заполнить дату');
                    }
                }
                return errors;
            }
        });

        return items;
    }
});