Ext.define('KuLib.publication.journalIssue.JournalIssueWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.journalissuewindow',

    title: 'Журналы',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'JournalTitle',
            fieldLabel: 'Наименование журнала',
            allowBlank: false,
            index: 2
        });
        items.push({
            xtype: 'numberfield',
            name: 'Volume',
            fieldLabel: 'Номер тома',
            allowBlank: false,
            index: 3
        });
        items.push({
            xtype: 'numberfield',
            name: 'No',
            fieldLabel: 'Номер выпуска',
            allowBlank: false
        });

        return items;
    }
});