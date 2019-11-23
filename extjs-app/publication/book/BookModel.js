Ext.define('KuLib.publication.book.BookModel', {
    extend: 'Ext.data.Model',

    fields: [{
            name: 'Id',
            type: 'int'
        },
        {
            name: 'InfoStr',
            type: 'string'
        },
        {
            name: 'BookTitle',
            type: 'string'
        },
        {
            name: 'Author',
            type: 'string'
        },
        {
            name: 'PublicationInstancesCount',
            type: 'int'
        },
        {
            name: 'FreePublicationInstancesCount',
            type: 'int'
        }
    ]
});