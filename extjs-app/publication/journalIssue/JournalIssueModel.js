Ext.define('KuLib.publication.journalIssue.JournalIssueModel', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'Id',
        type: 'int'
    }, {
        name: 'InfoStr',
        type: 'string'
    }, {
        name: 'JournalTitle',
        type: 'string'
    }, {
        name: 'Volume',
        type: 'int'
    }, {
        name: 'No',
        type: 'int'
    }]
});