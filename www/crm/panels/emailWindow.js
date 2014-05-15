function create_email_form(email) {
	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/email',
		border: false,
		defaults: {
			xtype: 'textfield',
			width: 450
		},
		items: [
			{
				fieldLabel: "Почта:",
				name: 'toSend',
				value: email
			},
			{
				fieldLabel: "Тема:",
				name: 'subject'
			},
			{
				fieldLabel: "Письмо:",
				name: 'text',
				xtype: 'textareafield',
				height: 150
			}
		]
	});
}

function create_email_form_pass() {

	return Ext.create('Ext.form.Panel', {
		url: domen + 'crm/email',
		defaults: {
			xtype: 'textfield',
			margin: 10
		},
		items: [
			{
				fieldLabel: "Пароль:",
				name: 'password',
				inputType: 'password'
			}, {
				fieldLabel: "tosend",
				name: 'toSend',
				xtype: 'hidden'
			},
			{
				fieldLabel: "title",
				name: 'subject',
				xtype: 'hidden'
			},
			{
				fieldLabel: "text",
				name: 'text',
				xtype: 'hidden'
			}
		]
	});
}

function create_email_window(email) {
	email_win = Ext.create('Ext.window.Window', {
		iconCls: 'mail',
		title: 'Отправка почты',
		width: 500,
		bodyStyle: 'background-color:#fff;padding: 10px',
		items: [
			email_form = create_email_form(email)
		],
		buttonAlign: 'right',
		buttons: [
			{
				text: 'Отправить',
				handler: function() {
					email_win1 = Ext.create('Ext.window.Window', {
						modal:true,
						title: 'Пароль от почты',
						width: 350,
						items: [
							email_form1 = create_email_form_pass()
						],
						buttonAlign: 'right',
						buttons: [
							{
								text: 'Отправить',
								handler: function() {
									email_form1.getForm().setValues({
										toSend: email_form.getForm().findField("toSend").getValue(),
										subject: email_form.getForm().findField("subject").getValue(),
										text: email_form.getForm().findField("text").getValue()
									});

									email_form1.submit({
										waitMsg: 'Отправка...',
										success: function(f, a) {
											email_win1.close();
											email_win.close();
											Ext.MessageBox.show({
												title: 'Успех',
												msg: 'Письмо отправлено',
												buttons: Ext.MessageBox.OK

											});
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
									email_win1.close();
								}
							}
						]
					}).show();
				}
			}, {
				text: 'Отмена',
				handler: function() {
					email_win.close();
				}
			}
		]
	});
	email_win.show();
}