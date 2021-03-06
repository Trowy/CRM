function create_evt_form() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/events',
		border: false,
		defaults: {
			xtype: 'textfield'
		},
		items: [
			{
				fieldLabel: "Название",
				id: 'title',
				name: 'title'
			},
			{
				xtype: 'combobox',
				fieldLabel: "Контактное лицо",
				name: 'contractor',
				value: contractor_store.getAt('0').get('id'),
				store: contractor_store,
				queryMode: 'local',
				displayField: 'fio',
				valueField: 'id'
			},
			{
				xtype: 'combobox',
				fieldLabel: "Компания",
				name: 'company',
				value: company_store.getAt('0').get('id'),
				store: company_store,
				queryMode: 'local',
				displayField: 'name',
				valueField: 'id'
			},
			{
				xtype: 'combobox',
				fieldLabel: "Тип события",
				name: 'eventType',
				value: event_type_store.getAt('0').get('id'),
				store: event_type_store,
				queryMode: 'local',
				displayField: 'name',
				valueField: 'id'
			},
			{
				xtype: 'datefield',
				fieldLabel: "Дата поступления",
				name: 'date',
				value: new Date()
			},
			{
				xtype: 'numberfield',
				fieldLabel: "Продолжител.",
				name: 'duration'
			},
			{
				fieldLabel: "Описание",
				name: 'info',
				xtype: 'textarea'
			}, {
				xtype: 'combobox',
				fieldLabel: "Статус события",
				name: 'eventStatus',
				value: event_status_store.getAt('0').get('id'),
				store: event_status_store,
				queryMode: 'local',
				displayField: 'name',
				valueField: 'id'
			},
			{
				xtype: 'fileuploadfield',
				id: 'filedata',
				name: 'filedata',
				emptyText: 'Select a document to upload...',
				fieldLabel: 'File',
				buttonText: 'Browse'
			},
			{
				xtype: 'hidden',
				name: 'action'
			},
			{
				xtype: 'hidden',
				name: 'id'
			}
		]
	});


}

function create_evt_window() {
	return evt_win = Ext.create('Ext.window.Window', {
		resizable: false,
		title: '...',
		width: 300,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [evt_form = create_evt_form()],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Сохранить',
				handler: function() {
					evt_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							evt_win.close();
							refresh_evt();
						},
						failure: function(f, a) {
							if (a.failureType === Ext.form.Action.CONNECT_FAILURE) {
								Ext.MessageBox.show({
									title: 'Ошибка',
									msg: 'Ошибка подключения к серверу. Проверьте интернет соединение.1',
									buttons: Ext.MessageBox.OK,
									icon: Ext.MessageBox.ERROR
								});
							}
						}
					});
				}
			},
			{
				text: 'Отмена',
				handler: function() {
					evt_window.close();
				}
			}
		]
	});
}