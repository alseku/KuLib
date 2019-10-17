Ext.define('KuLib.publication.book.BookGrid', {
    extend: 'KuLib.publication.BasePublicationGrid',

    title: 'Книги',

    requires: 'KuLib.publication.book.BookStore',

    storeClassName: 'KuLib.publication.book.BookStore',

    alias: 'widget.bookgrid',

    getAdditionalColumns: function () {
        return [{
            header: 'Название',
            dataIndex: 'BookTitle',
            width: 100
        }, {
            header: 'Автор(ы)',
            dataIndex: 'Author',
            width: 100
        }];
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Добавить',
                    action: 'new'
                },
                {
                    text: 'Редактировать',
                    action: 'edit'
                },
                {
                    text: 'Удалить',
                    action: 'delete'
                }
            ]
        }
    ]
});