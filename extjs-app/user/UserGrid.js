Ext.define('KuLib.user.UserGrid', {
    requires: [
        'KuLib.user.UserStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Пользователи',
    alias: 'widget.usergrid',

    storeClassName: 'KuLib.user.UserStore',

    initComponent: function () {
        this.callParent(arguments);

        var grid = this;

        this.down('checkbox[name=HasExpired]').on('change', function () {
            grid.getStore().load();
        });
    },

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
        columns.push({
            header: 'В аренде',
            dataIndex: 'RentedCount',
            width: 80
        });
        columns.push({
            header: 'В задолженности',
            dataIndex: 'ExpiredCount',
            width: 80
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
            },
            {
                xtype: 'tbfill',
                index: 9
            },
            {
                xtype: 'checkbox',
                name: 'HasExpired',
                labelAlign: 'left',
                fieldLabel: 'Есть задолженность',
                labelWidth: 110,
                padding: '0 5 0 0',
                index: 10
            }
        ]);

        return items;
    },

    beforeLoad: function (store) {
        var hasExpired = this.down('checkbox[name=HasExpired]').getValue();
        var params = store.proxy.extraParams;

        params.HasExpired = hasExpired;
    }
});