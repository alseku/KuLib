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
        if (!this.forUserWin) {
            columns.push({
                header: 'Есть в наличии',
                dataIndex: 'IsFree',
                width: '100',
                xtype: 'booleancolumn',
                trueText: 'Да',
                falseText: 'Нет'
            });
            columns.push({
                header: 'Арендовавший пользователь',
                dataIndex: 'UserShortName',
                width: 250
            });
        }
        columns.push({
            header: 'Дата возврата',
            dataIndex: 'ReturnDate',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            width: 100
        });
        return columns;
    },

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
        if (!this.forUserWin) {
            items.push(...[
                {
                    text: 'Добавить',
                    action: 'new',
                    index: 1
                },
                {
                    text: 'Редактировать',
                    action: 'edit',
                    index: 2
                },
                {
                    text: 'Удалить',
                    action: 'delete',
                    index: 3
                }
            ]);
        }

        return items;
    },

    beforeLoad: function (store) {
        var params = store.proxy.extraParams;

        params.PublicationId = this.PublicationId;
        params.UserId = this.UserId;
    }
});