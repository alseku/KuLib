Ext.define('KuLib.publication.journalIssue.JournalIssueModel', {
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
            name: 'Year',
            type: 'int'
        },
        {
            name: 'JournalTitle',
            type: 'string'
        },
        {
            name: 'Volume',
            type: 'int'
        },
        {
            name: 'No',
            type: 'int'
        },
        {
            name: 'PublicationInstancesCount',
            type: 'int'
        },
        {
            name: 'FreePublicationInstancesCount',
            type: 'int'
        },
        {
            name: 'RentedPublicationInstancesCount',
            type: 'int',
            convert: function (value, record) {
                return record.get('PublicationInstancesCount') - record.get('FreePublicationInstancesCount');
            }
        }
    ]
});