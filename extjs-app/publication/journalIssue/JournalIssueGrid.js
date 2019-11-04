Ext.define('KuLib.publication.journalIssue.JournalIssueGrid', {
    extend: 'KuLib.publication.BasePublicationGrid',

    title: 'Журналы',

    requires: 'KuLib.publication.journalIssue.JournalIssueStore',

    storeClassName: 'KuLib.publication.journalIssue.JournalIssueStore',

    alias: 'widget.journalissuegrid',

    getAdditionalColumns: function () {
        var columns = this.callParent(arguments);
        columns.push({
            header: 'Наименование журнала',
            dataIndex: 'JournalTitle',
            width: 150
        });
        columns.push({
            header: 'Номер тома',
            dataIndex: 'Volume',
            width: 100
        });
        columns.push({
            header: 'Номер выпуска',
            dataIndex: 'No',
            width: 100
        });

        return columns;
    },

    getDockedItemsTop: function () {
        var items = this.callParent(arguments);
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

        return items;
    }
});