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
                flex: 1
            }
        ];

        this.items[0].items.push(...this.getAdditionalItems().sort(function (item1, item2) { return item1.index - item2.index; }));

        if (!this.isNew) {
            this.items.push(...this.getNotFormItems());
        }

        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Сохранить',
                    action: 'save'
                },
                {
                    text: 'Удалить',
                    action: 'delete'
                }
            ]
        }];

        this.callParent(arguments);
    },

    getAdditionalItems: function () {
        return [];
    },

    getNotFormItems: function () {
        return [];
    },

    afterSetValues: function () {

    }
});