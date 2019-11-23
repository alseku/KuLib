Ext.define('KuLib.publicationInstance.PublicationInstanceModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'UserShortName',
            type: 'string'
        },
        {
            name: 'ReturnDate',
            type: 'date'
        },
        {
            name: 'IsFree',
            type: 'bool'
        }
    ]
});