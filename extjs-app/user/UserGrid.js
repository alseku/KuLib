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

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        items.push(...[
            {
                text: 'Добавить',
                action: 'new',
                index: 1
            },
            {
                text: 'Редактировать',
                action: 'edit',
                index: 2
            },
            {
                text: 'Удалить',
                action: 'delete',
                index: 3
            }
        ]);

        return items;
    }
});