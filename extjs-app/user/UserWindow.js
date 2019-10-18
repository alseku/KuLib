Ext.define('KuLib.user.UserWindow', {
    extend: 'KuLib.base.BaseWindow',
    alias: 'widget.userwindow',

    title: 'Пользователь',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Имя',
            allowBlank: false
        });
        items.push({
            xtype: 'textfield',
            name: 'Surname',
            fieldLabel: 'Фамилия',
            allowBlank: false
        });
        items.push({
            xtype: 'textfield',
            name: 'Patronymic',
            fieldLabel: 'Отчество',
            allowBlank: false
        });
        items.push({
            xtype: 'datefield',
            name: 'BirthDate',
            fieldLabel: 'Дата рождения',
            allowBlank: false,
            format: 'd/m/Y',
            altFormats: 'c'
        });

        return items;
    }
});