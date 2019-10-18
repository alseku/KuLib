Ext.define('KuLib.publication.BasePublicationGrid', {
    requires: [
        'KuLib.publication.BasePublicationStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Все книги',

    storeClassName: null,

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Информационная строка',
            dataIndex: 'InfoStr',
            width: 200
        });
        return columns;
    }
})