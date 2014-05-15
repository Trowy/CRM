function create_cs_form() {

	return Ext.create('Ext.form.Panel',
					{
						url: domen + 'crm/company_statuses',
						border: false,
						defaults: {
							xtype: 'textfield'
						},
						items: [
							{
								fieldLabel: "Название",
								name: 'name'
							},{
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
					}
	);
}

function create_cs_window() {

	return cs_win = Ext.create('Ext.window.Window',
					{
						resizable: false,
						title: '...',
						width: 300,
						bodyStyle: 'background-color:#fff;padding: 10px',
						items: [
							cs_form = create_cs_form()
						],
						buttonAlign: 'right',
						buttons: [
							{
								text: 'Сохранить',
								handler: function() {
									cs_form.submit({
										waitMsg: 'Сохранение...',
										success: function(f, a) {
											cs_window.close();
											refresh_cs();
										},
										failure: function(f,a) {
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
									cs_window.close();
								}
							}
						]
					}
	);
}