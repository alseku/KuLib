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

        this.columns.forEach(function (item, index, array) {
            item.menuDisabled = true;
            item.sortable = false;
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                docked: 'top',
                layout: { pack: 'center' },
                items: this.getDockedItemsTop().sort(function (item1, item2) { return item1.index - item2.index; } )
            },
            {
                xtype: 'pagingtoolbar',
                store: this.store,
                dock: 'bottom',
                displayInfo: true,
                listeners: {
                    change: function (pagingToolbar, pageData) {
                        //Этот костыль решает следующую проблему:
                        //Если в таблице на последней странице имеется всего одна строка и она удаляется,
                        //то таблица оказывается пустой и pagingToolbar не позволяет переключится на предыдущую страницу.
                        //console.log(pageData);
                        if (!pageData)
                            pagingToolbar.movePrevious();
                    }
                }
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