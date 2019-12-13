Ext.define('KuLib.user.UserModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'FullName',
            type: 'string'
        },
        {
            name: 'BirthDate',
            type: 'date'
        },
        {
            name: 'RentedCount',
            type: 'int'
        },
        {
            name: 'ExpiredCount',
            type: 'int'
        }
    ]
});