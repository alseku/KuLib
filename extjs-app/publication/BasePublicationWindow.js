Ext.define('KuLib.publication.BasePublicationWindow', {
    extend: 'KuLib.base.BaseWindow',

    requires: [
        'KuLib.publicationInstance.PublicationInstanceGrid'
    ],

    getAdditionalItems: function () {
        var items = this.callParent(arguments);

        return items;
    },

    getNotFormItems: function () {
        var items = this.callParent(arguments);
        items.push({ xtype: 'publicationinstancegrid', index: 10, height: 300 });
        return items;
    },

    afterSetValues: function () {
        this.callParent(arguments);
        var publicationInstanceGrid = this.down('publicationinstancegrid')
        publicationInstanceGrid.PublicationId = this.down('form').getForm().getValues().Id;
        publicationInstanceGrid.store.load();
    }
});