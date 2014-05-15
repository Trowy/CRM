function create_ct_form() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/cities',
		border: false,
		defaults: {
			xtype: 'textfield'
		},
		items: [
			{
				fieldLabel: "Название",
				name: 'name'
			}, {
				fieldLabel: "Код города",
				name: 'code'
			},
			{
				fieldLabel: "Зона времени",
				name: 'time_zone'
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

function create_ct_window() {
	return ct_win = Ext.create('Ext.window.Window', {
		resizable: false,
		title: '...',
		width: 300,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [
			ct_form = create_ct_form()
		],
		buttonAlign: 'right',
		buttons: [{
				text: 'Сохранить',
				handler: function() {


					ct_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							ct_window.close();
							refresh_ct();
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
					ct_window.close();
				}
			}
		]
	});
}