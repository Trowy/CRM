function create_bs_form() {
	
	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/business_scales',
		border: false,
		defaults: {
			xtype: 'textfield'
		},
		items: [{
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


function create_bs_window() {
	return bs_win = Ext.create('Ext.window.Window', {
		title: '...',
		width: 300,
		resizable: false,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [bs_form = create_bs_form()],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Сохранить',
				handler: function() {
					bs_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							bs_window.close();
							refresh_bs();
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
				text: 'Отмена', handler: function() {
					bs_window.close();
				}
			}
		]
	});
}