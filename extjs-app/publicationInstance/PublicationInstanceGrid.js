Ext.define('KuLib.publicationInstance.PublicationInstanceGrid', {
    requires: [
        'KuLib.publicationInstance.PublicationInstanceStore'
    ],

    extend: 'KuLib.base.BaseGrid',
    title: 'Экземпляры',
    alias: 'widget.publicationinstancegrid',

    autoLoadData: false,

    storeClassName: 'KuLib.publicationInstance.PublicationInstanceStore',

    forUserWin: false,

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        if (this.forUserWin) {
            columns.push(
            {
                header: 'Код экземпляра',
                dataIndex: 'Id',
                width: 110,
            },
            {
                header: 'Дата возврата',
                dataIndex: 'ReturnDate',
                xtype: 'datecolumn',
                format: 'd.m.Y',
                width: 100
            },
            {
                header: 'Публикация',
                dataIndex: 'PublicationInfoStr',
                flex: 1,
            });
        } else {
            columns.push(
            {
                header: 'Код экземпляра',
                dataIndex: 'Id',
                //width: 100,
                flex: 0.8,
            },
            {
                header: 'Можно выдать',
                dataIndex: 'IsFree',
                //width: 100,
                flex: 0.8,
                xtype: 'booleancolumn',
                trueText: 'Да',
                falseText: 'Нет'
            },
            {
                header: 'Читатель',
                dataIndex: 'UserShortName',
                //width: 150
                flex: 1,
            });
            columns.push({
                header: 'Дата возврата',
                dataIndex: 'ReturnDate',
                xtype: 'datecolumn',
                format: 'd.m.Y',
                //width: 100
                flex: 1,
            });
        }
        return columns;
    },

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        items.push(
            {
                text: 'Возврат',
                action: 'Return',
                index: 1
            },
            {
                text: 'Продление',
                action: 'SetReturnDate',
                index: 2
            },
            {
                text: 'Выдать',
                action: 'edit',
                index: 3
            },
            {
                xtype: 'tbfill',
                index: 4
            },
            {
                text: 'Списать экземпляр',
                action: 'delete',
                index: 6
            },
        );
        if (!this.forUserWin) {
            items.push(
                {
                    text: 'Добавить экземпляр',
                    action: 'new',
                    index: 5
                },
            );
        }

        return items;
    },

    beforeLoad: function (store) {
        var grid = this;
        store.proxy.extraParams.PublicationId = grid.PublicationId;
        store.proxy.extraParams.UserId = grid.UserId;

        grid.down('button[action=Return]').setDisabled(true);
        grid.down('button[action=SetReturnDate]').setDisabled(true);
        grid.down('button[action=delete]').setDisabled(true);
        if (!grid.forUserWin) grid.down('button[action=edit]').setDisabled(true);
    },

    initComponent: function () {
        this.listeners = {
           select: { fn: this.onSelectRecord, scope: this },         
        };
        this.callParent();
    },

    onSelectRecord: function (rowModel, record) {
        var grid = this;
        var UserId = record.get('UserId');
        grid.down('button[action=Return]').setDisabled(!UserId);
        grid.down('button[action=SetReturnDate]').setDisabled(!UserId);
        grid.down('button[action=delete]').setDisabled(false)
        if (!grid.forUserWin) grid.down('button[action=edit]').setDisabled(UserId);
    },
});