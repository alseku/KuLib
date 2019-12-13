Ext.define('KuLib.publication.publication.PublicationModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'InfoStr',
            type: 'string'
        },
        //{
        //    name: 'Year',
        //    type: 'int'
        //},
        {
            name: 'PublicationInstancesCount',
            type: 'int'
        },
        {
            name: 'FreePublicationInstancesCount',
            type: 'int'
        },
        {
            name: 'RentedPublicationInstancesCount',
            type: 'int',
            convert: function (value, record) {
                return record.get('PublicationInstancesCount') - record.get('FreePublicationInstancesCount');
            }
        }
    ]
});