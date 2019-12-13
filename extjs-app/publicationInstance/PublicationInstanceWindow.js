Ext.define('KuLib.publicationInstance.PublicationInstanceWindow', {
    extend: 'KuLib.base.BaseWindow',
    alias: 'widget.publicationinstancewindow',

    requires: [
        'KuLib.user.UserStore',
        'KuLib.publication.publication.PublicationStore',
        'KuLib.publicationInstance.PublicationInstanceStore'
    ],

    title: 'Выдача',

    getAdditionalItems: function () {
        var items = this.callParent(arguments);
        var window = this;

        if (window.forUserWin) {           
            var publicationStore = Ext.create('KuLib.publication.publication.PublicationStore', {
                pageSize: 10
            });
            var publicationInstanceStore = Ext.create('Ext.data.Store', {
                pageSize: 10,
                fields: [
                    {
                        name: 'Id',
                        type: 'int'
                    }
                ],
                proxy: {
                    type: 'ajax',
                    url: '/PublicationInstance/ListFree',
                    reader: {
                        type: 'json',
                        root: 'data',
                        totalProperty: 'total'
                    }
                },
            });

            items.push({
                xtype: 'combobox',
                index: 1,
                name: 'PublicationId',
                fieldLabel: 'Публикация (поиск по инфостроке)',
                //labelWidth: 300,
                allowBlank: false,
                displayField: 'InfoStr',
                valueField: 'Id',
                queryMode: 'remote',
                queryParam: 'InfoStrFilter',
                store: publicationStore,
                pageSize: publicationStore.pageSize,
                forceSelection: true,
                typeAhead: true,
                emptyText: 'введите текст для поиска',
                triggerAction: 'query',
                listConfig: {
                    loadingText: 'Идёт поиск...',
                    emptyText: 'Публикация не найдена',
                },
                listeners: {
                    select: {
                        fn: function (combo, records, eOpts) {
                            instanceCombo = window.down('combobox[name=PublicationInstanceId]');
                            instanceCombo.getStore().proxy.extraParams.PublicationId = combo.getValue();
                            instanceCombo.setReadOnly(false);
                        },
                    }
                },
            });

            items.push({
                xtype: 'combobox',
                index: 2,
                name: 'PublicationInstanceId',
                fieldLabel: 'Код экземпляра',
                //labelWidth: 300,
                editable: false,
                allowBlank: false,
                displayField: 'Id',
                valueField: 'Id',
                queryMode: 'remote',
                store: publicationInstanceStore,
                pageSize: publicationInstanceStore.pageSize,
                forceSelection: true,
                //typeAhead: true,
                emptyText: 'сначала выберите публикацию',
                readOnly: true,
                triggerAction: 'all',
                listConfig: {
                    loadingText: 'Идёт поиск...',
                    emptyText: 'Нет свободных экземпляров',
                },

            });

        } else {
            var store = Ext.create('KuLib.user.UserStore', { pageSize: 10 });
            items.push({
                xtype: 'combobox',
                index: 1,
                name: 'UserId',
                fieldLabel: 'Читатель (поиск по ФИО)',
                //labelWidth: 300,
                allowBlank: false,
                displayField: 'FullName',
                valueField: 'Id',
                queryMode: 'remote',
                store: store,
                pageSize: store.pageSize,
                forceSelection: true,
                typeAhead: true,
                emptyText: 'введите текст для поиска',
                triggerAction: 'query',
                listConfig: {
                    loadingText: 'Идёт поиск...',
                    emptyText: 'Читатель не найден',
                },
            });
        }

        items.push({
            xtype: 'datefield',
            index: 3,
            name: 'ReturnDate',
            fieldLabel: 'Дата возврата',
            emptyText: 'дд.мм.гггг',
            //labelWidth: 300,
            allowBlank: false,
            format: 'd.m.Y',
            altFormats: 'c',
        });

        if (window.forUserWin) {
            items.forEach(function (item) { item.labelWidth = 215, item.labelAlign = 'right' });
            window.width = 600;
        }
        else
            items.forEach(function (item) { item.labelWidth = 155, item.labelAlign = 'right' });


        return items;
    },

    getAdditionalTopBarItems: function () {
        var additionalItems = this.callParent(arguments);
        var win = this;
        additionalItems.push(
        {
            text: 'Выдать',
            action: 'saveRecord'
        },
        //{
        //    text: 'Удалить',
        //    action: 'deleteRecord',
        //    disabled: true
        //},
        {
            text: 'Отмена',
            handler: function () { win.close(); }
        },
        )

        return additionalItems;
    },

    afterSetValues: function () {

    }
});