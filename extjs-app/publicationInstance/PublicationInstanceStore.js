Ext.define('KuLib.publicationInstance.PublicationInstanceStore', {
    extend: 'KuLib.base.BaseStore',

    requires: ['KuLib.publicationInstance.PublicationInstanceModel'],

    proxyUrl: '/PublicationInstance/List',
    model: 'KuLib.publicationInstance.PublicationInstanceModel'
});