Ext.define('KuLib.publication.book.BookGrid', {
    extend: 'KuLib.publication.BasePublicationGrid',

    title: 'Книги',

    requires: 'KuLib.publication.book.BookStore',

    storeClassName: 'KuLib.publication.book.BookStore',

    alias: 'widget.bookgrid',

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Название',
            dataIndex: 'BookTitle',
            width: 100
        },
        {
            header: 'Автор(ы)',
            dataIndex: 'Author',
            width: 100
        },
        {
            header: 'Год',
            dataIndex: 'Year',
            width: 80
        },
        );

        return columns;
    },

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        items.push(...[
            {
                text: 'Добавить',
                action: 'new',
                index: 1
            },
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
});