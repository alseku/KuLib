Ext.define('KuLib.user.UserWindow', {
    extend: 'KuLib.base.BaseWindow',
    alias: 'widget.userwindow',

    requires: [
        'KuLib.publicationInstance.PublicationInstanceGrid'
    ],

    title: 'Читатель',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        items.push(
        {
            xtype: 'textfield',
            name: 'Surname',
            fieldLabel: 'Фамилия',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'Name',
            fieldLabel: 'Имя',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'Patronymic',
            fieldLabel: 'Отчество',
            allowBlank: false
        },
        {
            xtype: 'datefield',
            name: 'BirthDate',
            fieldLabel: 'Дата рождения',
            allowBlank: false,
            format: 'd.m.Y',
            altFormats: 'c'
        });

        return items;
    },

    getNotFormItems: function () {
        var items = this.callParent(arguments);
        items.push({
            xtype: 'publicationinstancegrid',
            index: 10,
            height: 300,
            flex: 1,
            forUserWin: true,
            title: 'Экземпляры публикаций, выданные читателю'
        });
        return items;
    },

    getAdditionalTopBarItems: function () {
        var topBarItems = this.callParent();
        topBarItems.push(
            {
                text: 'Сохранить',
                action: 'saveRecord'
            },
            {
                text: 'Удалить',
                action: 'deleteRecord',
                disabled: true
            }
        );
        return topBarItems;
    },

    afterSetValues: function () {
        this.callParent(arguments);
        var publicationInstanceGrid = this.down('publicationinstancegrid')
        publicationInstanceGrid.UserId = this.down('form').getForm().getValues().Id;
        publicationInstanceGrid.store.on('load', function () {
            this.down('button[action=deleteRecord]').setDisabled(publicationInstanceGrid.store.getTotalCount() > 0);
        }, this);
        publicationInstanceGrid.store.load();
    }
});