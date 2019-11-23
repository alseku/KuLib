Ext.define('KuLib.publication.BasePublicationGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Все книги',

    storeClassName: null,

    initComponent: function () {
        this.callParent(arguments);

        var grid = this;

        this.down('textfield[name=InfoStrFilter]').on('keydown', function (field, e) {
            if (e.keyCode === 13) {
                grid.getStore().load();
            }
        });
    },

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Информационная строка',
            dataIndex: 'InfoStr',
            width: 200
        });
        columns.push({
            header: 'Кол-во',
            dataIndex: 'PublicationInstancesCount',
            width: 100
        });
        columns.push({
            header: 'В наличии',
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
            enableKeyEvents: true,
            index: 10
        });
        return items;
    },

    beforeLoad: function (store) {
        var infoStrFilterValue = this.down('textfield[name=InfoStrFilter]').getValue();
        var params = store.proxy.extraParams;

        params.InfoStrFilter = infoStrFilterValue;
    }
})