Ext.define('KuLib.publication.book.BookWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.bookwindow',

    title: 'Публикация (Книга)',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'BookTitle',
            fieldLabel: 'Наименование',
            allowBlank: false,
            index: 2,
        },
        {
            xtype: 'textfield',
            name: 'Author',
            fieldLabel: 'Автор(ы)',
            allowBlank: false,
            index: 3
        },
        {
            xtype: 'numberfield',
            name: 'Year',
            fieldLabel: 'Год издания',
            allowBlank: false,
            allowDecimals: false,
            //minValue: 1,
            index: 4
        },
        );

        return items;
    }
});