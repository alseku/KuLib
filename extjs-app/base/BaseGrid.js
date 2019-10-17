Ext.define('KuLib.base.BaseGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'Ext.grid.Panel',
    title: '',

    storeClassName: null,

    initComponent: function () {
        this.store = Ext.create(this.storeClassName);
        this.columns = this.getColumns();
        this.callParent(arguments);
        this.store.load();
    },

    getColumns: function () {
        var columns = [];

        columns.push(...this.getAdditionalColumns());

        return columns;
    },

    getAdditionalColumns: function () {
        return [];
    }
})