Ext.define('KuLib.publication.journalIssue.JournalIssueController', {
    extend: 'KuLib.publication.BasePublicationController',

    requires: [
        'KuLib.publication.journalIssue.JournalIssueWindow'
    ],

    gridXType: 'journalissuegrid',
    windowXType: 'journalissuewindow',
    relatedGridXTypes: ['publicationgrid'],

    controllerName: 'JournalIssue'
});