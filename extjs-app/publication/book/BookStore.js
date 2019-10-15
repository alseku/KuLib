Ext.define('KuLib.publication.book.BookStore', {
    extend: 'KuLib.publication.BasePublicationStore',

    requires: [
        'KuLib.publication.book.BookModel'
    ],

    model: 'KuLib.publication.book.BookModel',

    proxyUrl: '/Book/List'
})