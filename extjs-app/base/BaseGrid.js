Ext.define('KuLib.base.BaseGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'Ext.grid.Panel',
    title: '',
    autoLoadData: true,

    storeClassName: null,

    initComponent: function () {
        this.store = Ext.create(this.storeClassName);
        this.columns = this.getColumns();

        this.dockedItems = [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: this.getDockedItemsTop().sort(function (item1, item2) { return item1.index - item2.index; } )
            },
            {
                xtype: 'pagingtoolbar',
                store: this.store,
                dock: 'bottom',
                displayInfo: true
            }
        ];

        this.store.on('beforeload', this.beforeLoad, this);

        this.callParent(arguments);
        if (this.autoLoadData) {
            this.store.load();
        }
    },

    getColumns: function () {
        var columns = [];

        columns.push(...this.getAdditionalColumns());

        return columns;
    },

    getAdditionalColumns: function () {
        return [];
    },

    getDockedItemsTop: function () {
        return [];
    },

    beforeLoad: function (store, op) {

    }
})