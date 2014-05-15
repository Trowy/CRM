function create_sgt_form() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/segments',
		border: false,
		defaults: {
			xtype: 'textfield'
		},
		items: [
			{
				fieldLabel: "Название",
				name: 'name'
			}, {
				fieldLabel: "Описание",
				name: 'info'
			}, {
				xtype: 'hidden',
				name: 'action'
			}, {
				xtype: 'hidden',
				name: 'id'
			}
		]
	});
}

function create_sgt_window() {
	return sgt_win = Ext.create('Ext.window.Window', {
		resizable: false,
		title: '...',
		width: 300,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [
			sgt_form = create_sgt_form()
		],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Сохранить',
				handler: function() {
					sgt_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							sgt_window.close();
							refresh_sgt();
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
			},
			{
				text: 'Отмена',
				handler: function() {
					sgt_window.close();
				}
			}
		]
	});
}