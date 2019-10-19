Ext.application({
    name: 'KuLib',
    appFolder: '/extjs-app',
    requires: [
        'KuLib.publication.publication.PublicationGrid',
        'KuLib.publication.book.BookGrid',
        'KuLib.publication.journalIssue.JournalIssueGrid',
        'KuLib.user.UserGrid'
    ],

    controllers: [
        'KuLib.publication.book.BookController',
        'KuLib.user.UserController',
        'KuLib.publication.journalIssue.JournalIssueController'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'tabpanel',
                    tabPosition: 'left',
                    cls: 'verticaltab',
                    tabBar: {
                        width: 200,
                        minTabWidth: 200,
                        maxTabWidth: 200,
                        height: 20,
                        orientation: 'vertical'
                    },
                    plain: true,
                    items: [
                        {
                            xtype: 'tabpanel',
                            title: 'Библиотека',
                            items: [
                                { xtype: 'publicationgrid' },
                                { xtype: 'bookgrid' },
                                { xtype: 'journalissuegrid'}
                            ]
                        },
                        {
                            xtype: 'usergrid'
                        }
                    ]
                }
            ]
        });
    }
});