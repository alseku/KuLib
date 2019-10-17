Ext.define('KuLib.base.BaseWindow', {
    extend: 'Ext.window.Window',

    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'numberfield',
                        hidden: true,
                        name: 'Id'
                    }
                ]
            }
        ];

        this.items[0].items.push(...this.getAdditionalItems());

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
    }
});