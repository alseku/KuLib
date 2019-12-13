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
        'KuLib.publication.journalIssue.JournalIssueController',
        'KuLib.publication.publication.PublicationController',
        'KuLib.publicationInstance.PublicationInstanceController'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'tabpanel',
                    tabPosition: 'left',
                    cls: 'verticaltab',
                    minTabWidth: 150,
                    tabBar: {
                        width: 150,
                        //minTabWidth: 200,
                        //maxTabWidth: 200,
                        //height: 20,
                        //orientation: 'vertical'
                    },
                    plain: true,
                    items: [
                        {
                            xtype: 'tabpanel',
                            title: 'Публикации',
                            items: [
                                { xtype: 'publicationgrid' },
                                { xtype: 'bookgrid' },
                                { xtype: 'journalissuegrid'}
                            ]
                        },
                        {
                            xtype: 'usergrid',
                            title: 'Читатели',
                        }
                    ]
                }
            ]
        });
    }
});