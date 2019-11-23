Ext.define('KuLib.publication.publication.PublicationController', {
    extend: 'KuLib.publication.BasePublicationController',

    gridXType: 'publicationgrid',
    relatedGridXTypes: ['bookgrid', 'journalissuegrid'],

    controllerName: 'Publication',

    getWindowType: function (record) {
        return record.WindowXType;
    }
});