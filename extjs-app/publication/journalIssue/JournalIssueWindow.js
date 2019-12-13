Ext.define('KuLib.publication.journalIssue.JournalIssueWindow', {
    extend: 'KuLib.publication.BasePublicationWindow',
    alias: 'widget.journalissuewindow',

    title: 'Публикация (Журнал)',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'textfield',
            name: 'JournalTitle',
            fieldLabel: 'Название журнала',
            allowBlank: false,
            index: 2
        },
        {
            xtype: 'numberfield',
            name: 'Volume',
            fieldLabel: 'Номер тома',
            allowBlank: false,
            allowDecimals: false,
            minValue:1,
            index: 3
        },
        {
            xtype: 'numberfield',
            name: 'No',
            fieldLabel: 'Номер выпуска',
            allowBlank: false,
            allowDecimals: false,
            minValue: 1,
            index: 4
        },
        {
            xtype: 'numberfield',
            name: 'Year',
            fieldLabel: 'Год',
            allowBlank: false,
            allowDecimals: false,
            //minValue: 1,
            index: 5
        },
        );

        return items;
    }
});