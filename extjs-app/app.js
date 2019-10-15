Ext.application({
    name: 'KuLib',
    appFolder: '/extjs-app',
    requires: [
        'KuLib.publication.publication.PublicationGrid',
        'KuLib.publication.book.BookGrid'
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
                                Ext.create('KuLib.publication.publication.PublicationGrid'),
                                Ext.create('KuLib.publication.book.BookGrid')
                            ]
                        },
                        {
                            title: 'Лалала',
                            html: '<h3>Добро пожаловать!</h3>'
                        }
                    ]
                }
            ]
        });
    }
});