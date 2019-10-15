Ext.define('KuLib.publication.book.BookGrid', {
    extend: 'KuLib.publication.BasePublicationGrid',

    title: 'Книги',

    requires: 'KuLib.publication.book.BookStore',

    storeClassName: 'KuLib.publication.book.BookStore',

    getAdditionalColumns: function () {
        return [{
            header: 'Название',
            dataIndex: 'Title'
        }];
    }
});