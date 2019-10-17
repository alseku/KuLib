Ext.define('KuLib.publication.BasePublicationWindow', {
    extend: 'KuLib.base.BaseWindow',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);

        items.push({
            xtype: 'textfield',
            name: 'InfoStr',
            fieldLabel: 'Информационная строка',
            allowBlank: false
        });

        return items;
    }
});