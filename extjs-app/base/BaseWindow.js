Ext.define('KuLib.base.BaseWindow', {
    extend: 'Ext.window.Window',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    width: 470,
    autoShow: true,
    isNew: false,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                bodyPadding: '10 5 50 5',
                border: false,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        hidden: true,
                        name: 'Id'
                    }
                ],
            }
        ];

        this.items[0].items.push(...this.getAdditionalItems().sort(function (item1, item2) { return item1.index - item2.index; }));
        this.items[0].items.forEach(function (item) { if (!item.labelWidth) item.labelWidth=120});

        if (!this.isNew) {
            this.items.push(...this.getNotFormItems());
        }

        //var topBarItems = [
        //    {
        //        text: 'Сохранить',
        //        action: 'saveRecord'
        //    },
        //    {
        //        text: 'Удалить',
        //        action: 'deleteRecord',
        //        disabled: true
        //    }
        //];
        var topBarItems = [];
        topBarItems.push(...this.getAdditionalTopBarItems());

        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: topBarItems,
            layout: { pack: 'center'},
        }];

        this.callParent(arguments);
    },

    getAdditionalItems: function () {
        return [];
    },

    getAdditionalTopBarItems: function () {
        return [];
    },

    getNotFormItems: function () {
        return [];
    },

    afterSetValues: function () {
        this.down('button[action=deleteRecord]').setDisabled(this.isNew);
    }
});