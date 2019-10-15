Ext.define('KuLib.publication.book.BookWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.bookwindow',

    title: 'Книга',
    layout: 'fit',
    autoShow: true,

    getAdditionalItems: function () {
        return [];
    }
});