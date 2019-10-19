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
            width: 100
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

    dockedItems: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [
                {
                    text: 'Добавить',
                    action: 'new'
                },
                {
                    text: 'Редактировать',
                    action: 'edit'
                },
                {
                    text: 'Удалить',
                    action: 'delete'
                }
            ]
        }
    ]
});