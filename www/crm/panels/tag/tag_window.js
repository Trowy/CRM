function create_tgs_form() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/tags',
		border: false,
		defaults: {
			xtype: 'textfield'
		},
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

function create_tgs_window() {
	return tgs_win = Ext.create('Ext.window.Window', {
		resizable: false,
		title: '...',
		width: 300,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [
			tgs_form = create_tgs_form()
		],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Сохранить',
				handler: function() {
					tgs_form.submit({
						waitMsg: 'Сохранение...',
						success: function(f, a) {
							refresh_tgs();
							tgs_win.close();
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
					tgs_window.close();
				}
			}
		]
	});
}