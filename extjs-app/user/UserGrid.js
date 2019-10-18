Ext.define('KuLib.user.UserGrid', {
    requires: [
        'KuLib.user.UserStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Пользователи',
    alias: 'widget.usergrid',

    storeClassName: 'KuLib.user.UserStore',

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Ф.И.О.',
            dataIndex: 'FullName',
            width: 250
        });
        columns.push({
            header: 'Дата рождения',
            dataIndex: 'BirthDate',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            width: 100
        });
        return columns;
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Добавить',
                    action: 'new'
                },
                {
                    text: 'Редактировать',
                    action: 'edit'
                },
                {
                    text: 'Удалить',
                    action: 'delete'
                }
            ]
        }
    ]
});