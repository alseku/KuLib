Ext.define('KuLib.publication.book.BookModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'Id',
        type: 'int'
    }, {
        name: 'Name',
        type: 'string'
    }, {
        name: 'Title',
        type: 'string'
    }]
});