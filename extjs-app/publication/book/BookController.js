Ext.define('KuLib.publication.book.BookController', {
    extend: 'KuLib.publication.BasePublicationController',

    requires: [
        'KuLib.publication.book.BookWindow'
    ],

    gridXType: 'bookgrid',
    windowXType: 'bookwindow',

    controllerName: 'Book'
});