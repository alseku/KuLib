Ext.define('KuLib.base.BaseStore', {
    extend: 'Ext.data.Store',

    autoLoad: false,

    constructor: function () {
        this.proxy = {
            type: 'ajax',
            url: this.proxyUrl,
            reader: {
                type: 'json',
                root: 'data',
                totalProperty: 'total'
            }
        };
        this.callParent(arguments);        
    }

});