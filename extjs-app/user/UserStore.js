Ext.define('KuLib.user.UserStore', {
    extend: 'KuLib.base.BaseStore',

    requires: ['KuLib.user.UserModel'],

    proxyUrl: '/User/List',
    model: 'KuLib.user.UserModel'
});