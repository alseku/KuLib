Ext.define('KuLib.publication.book.BookModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'Id',
        type: 'int'
    }, {
        name: 'InfoStr',
        type: 'string'
    }, {
        name: 'Title',
        type: 'string'
    }]
});