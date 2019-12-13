﻿Ext.define('KuLib.publicationInstance.PublicationInstanceModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Id',
            type: 'int'
        },
        {
            name: 'UserId',
            type: 'int'
        },
        {
            name: 'UserShortName',
            type: 'string'
        },
        {
            name: 'ReturnDate',
            type: 'date'
        },
        {
            name: 'IsFree',
            type: 'bool',
            convert: function (value, record) {
                return !record.get('UserId');
            }
        },
        {
            name: 'PublicationInfoStr',
            type: 'string'
        },
    ]
});