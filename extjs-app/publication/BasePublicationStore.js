Ext.define('KuLib.publication.BasePublicationStore', {
    extend: 'Ext.data.Store',

    proxyUrl: null,
    model: null,

    autoLoad: false,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data'
        }
    },

    constructor: function () {
        this.proxy.model = this.model;
        this.proxy.url = this.proxyUrl;
        this.callParent(arguments);
    }
});