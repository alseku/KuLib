Ext.define('KuLib.publication.BasePublicationGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Все публикации',

    storeClassName: null,

    initComponent: function () {
        this.listeners = {
            select: { fn: this.onSelectRecord, scope: this },
        };

        this.callParent(arguments);

        var grid = this;

        grid.down('textfield[name=InfoStrFilter]').on('keydown', function (field, e) {
            if (e.keyCode === 13) {
                grid.getStore().load();
            }
        });
    },

    onSelectRecord: function (rowModel, record) {
        var grid = this;
        grid.down('button[action=delete]').setDisabled(false);
        grid.down('button[action=edit]').setDisabled(false);
    },

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Информационная строка',
            dataIndex: 'InfoStr',
            width: 200
        },
        {  
            header: 'Кол-во (шт)',
            dataIndex: 'PublicationInstancesCount',
            width: 80
        },
        {
            header: 'Выдано (шт)',
            dataIndex: 'RentedPublicationInstancesCount',
            width: 80
        },
        {  
            header: 'Не выдано (шт)',
            dataIndex: 'FreePublicationInstancesCount',
            width: 100
        });
        return columns;
    },

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'tbfill',
            index: 9
        });
        items.push({
            xtype: 'textfield',
            name: 'InfoStrFilter',
            labelAlign: 'left',
            fieldLabel: 'Фильтрация по информационной строке',
            labelWidth: 220,
            width: 550,
            enableKeyEvents: true,
            index: 10
        });
        return items;
    },

    beforeLoad: function (store) {
        var grid = this;
        var infoStrFilterValue = grid.down('textfield[name=InfoStrFilter]').getValue();
        store.proxy.extraParams.InfoStrFilter = infoStrFilterValue;

        grid.down('button[action=edit]').setDisabled(true);
        grid.down('button[action=delete]').setDisabled(true);
    }
})