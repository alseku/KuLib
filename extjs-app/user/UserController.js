Ext.define('KuLib.user.UserController', {
    extend: 'KuLib.base.BaseController',

    requires: [
        'KuLib.user.UserWindow'
    ],

    gridXType: 'usergrid',
    windowXType: 'userwindow',

    controllerName: 'User',

});