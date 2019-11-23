Ext.define('KuLib.publication.publication.PublicationModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'InfoStr',
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