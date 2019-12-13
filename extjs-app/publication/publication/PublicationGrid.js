Ext.define('KuLib.publication.publication.PublicationGrid', {
    requires: [
        'KuLib.publication.publication.PublicationStore'
    ],

    extend: 'KuLib.publication.BasePublicationGrid',

    storeClassName: 'KuLib.publication.publication.PublicationStore',

    alias: 'widget.publicationgrid',

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        items.push(...[
            {
                text: 'Редактировать',
                action: 'edit',
                index: 2
            },
            {
                text: 'Удалить',
                action: 'delete',
                index: 3
            }
        ]);

        return items;
    }
})