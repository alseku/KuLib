Ext.define('KuLib.publication.BasePublicationWindow', {
    extend: 'Ext.window.Window',

    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'InfoStr',
                        fieldLabel: 'Информационная строка'
                    }
                ]
            }
        ];

        this.items.push(...this.getAdditionalItems());

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