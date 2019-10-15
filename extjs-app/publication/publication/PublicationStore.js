Ext.define('KuLib.publication.publication.PublicationStore',{
    requires: [
        'KuLib.publication.publication.PublicationModel'
    ],

    extend: 'KuLib.publication.BasePublicationStore',

    model: 'KuLib.publication.publication.PublicationModel',

    proxyUrl: '/Publication/List'
})