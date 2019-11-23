Ext.define('KuLib.publication.book.BookWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.bookwindow',

    title: 'Книга',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'BookTitle',
            fieldLabel: 'Наименование',
            allowBlank: false,
            index: 2,
            padding: '5 0 0 0'
        });
        items.push({
            xtype: 'textfield',
            name: 'Author',
            fieldLabel: 'Автор(ы)',
            allowBlank: false,
            index: 3
        });

        return items;
    }
});