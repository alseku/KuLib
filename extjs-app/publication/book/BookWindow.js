Ext.define('KuLib.publication.book.BookWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.bookwindow',

    title: 'Книга',
    layout: 'fit',
    autoShow: true,

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'BookTitle',
            fieldLabel: 'Наименование',
            allowBlank: false
        });
        items.push({
            xtype: 'textfield',
            name: 'Author',
            fieldLabel: 'Автор(ы)',
            allowBlank: false
        });

        return items;
    }
});