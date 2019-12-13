Ext.define('KuLib.user.UserGrid', {
    requires: [
        'KuLib.user.UserStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    alias: 'widget.usergrid',

    storeClassName: 'KuLib.user.UserStore',

    initComponent: function () {
        this.listeners = {
            select: { fn: this.onSelectRecord, scope: this },
        };
        
        this.callParent(arguments);

        var grid = this;

        grid.down('checkbox[name=HasExpired]').on('change', function () {
            grid.getStore().load();
        });
        grid.down('textfield[name=query]').on('keydown', function (field, e) {
            if (e.keyCode === 13) {
                grid.getStore().load();
            }
        });
    },

    onSelectRecord: function (rowModel, record) {
        var grid = this;
        grid.down('button[action=delete]').setDisabled(record.get('RentedCount'));
        grid.down('button[action=edit]').setDisabled(false);
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
            header: 'Выдано',
            dataIndex: 'RentedCount',
            width: 60
        });
        columns.push({
            header: 'Просрочено',
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
                xtype: 'textfield',
                name: 'query',
                labelAlign: 'left',
                fieldLabel: 'Фильтрация по ФИО',
                labelWidth: 110,
                width: 500,
                padding: '0 20 0 0',
                enableKeyEvents: true,
                index: 10
            },
            {
                xtype: 'checkbox',
                name: 'HasExpired',
                labelAlign: 'left',
                fieldLabel: 'Есть задолженность',
                labelWidth: 110,
                padding: '0 5 0 0',
                index: 11
            },
        ]);

        return items;
    },

    beforeLoad: function (store) {
        var grid = this;
        store.proxy.extraParams.HasExpired = grid.down('checkbox[name=HasExpired]').getValue();
        store.proxy.extraParams.query = grid.down('textfield[name=query]').getValue();

        grid.down('button[action=edit]').setDisabled(true);
        grid.down('button[action=delete]').setDisabled(true);

    }
});