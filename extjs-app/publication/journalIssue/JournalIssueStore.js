Ext.define('KuLib.publication.journalIssue.JournalIssueStore', {
    extend: 'KuLib.publication.BasePublicationStore',

    requires: [
        'KuLib.publication.journalIssue.JournalIssueModel'
    ],

    model: 'KuLib.publication.journalIssue.JournalIssueModel',

    proxyUrl: '/JournalIssue/List'
})