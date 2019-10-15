Ext.define('KuLib.publication.BasePublicationGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'Ext.grid.Panel',
    title: 'Все книги',

    storeClassName: null,

    initComponent: function () {
        this.store = Ext.create(this.storeClassName);
        this.columns = this.getColumns();
        this.callParent(arguments);
        this.store.load();
    },

    getColumns: function () {
        var columns = [{
            header: 'Имя',
            dataIndex: 'Name'
        }];

        columns.push(...this.getAdditionalColumns());

        return columns;
    },

    getAdditionalColumns: function () {
        return [];
    }
})