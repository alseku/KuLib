Ext.define('KuLib.base.BaseStore', {
    extend: 'Ext.data.Store',

    proxyUrl: null,
    model: null,

    autoLoad: false,
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    },

    constructor: function () {
        this.proxy.model = this.model;
        this.proxy.url = this.proxyUrl;
        this.callParent(arguments);
    }
});