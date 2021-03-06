function create_et_form() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/event_types',
		border: false,
		defaults: {xtype: 'textfield'},
		items: [
			{
				fieldLabel: "Название",
				name: 'name'
			},
			{
				fieldLabel: "Описание",
				name: 'info'
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

function create_et_window() {
	return et_win = Ext.create('Ext.window.Window', {
		resizable: false,
		title: '...',
		width: 300,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [et_form = create_et_form()],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Сохранить',
				handler: function() {
					et_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							et_window.close();
							refresh_et();
						},
						failure: function(f, a) {
							if (a.failureType === Ext.form.Action.CONNECT_FAILURE) {
								Ext.MessageBox.show({
									title: 'Ошибка',
									msg: 'Ошибка подключения к серверу. Проверьте интернет соединение.',
									buttons: Ext.MessageBox.OK,
									icon: Ext.MessageBox.ERROR
								});
							}
						}
					});
				}
			}, {
				text: 'Отмена',
				handler: function() {
					et_window.close();
				}
			}
		]
	});
}