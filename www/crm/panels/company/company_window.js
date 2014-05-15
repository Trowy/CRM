function create_cmp_form() {

	var form = Ext.create('Ext.form.Panel',
					{
						p: 1,
						e: 1,
						s: 1,
						t: 1,
						url: domen + 'crm/companies',
						border: false,						
						defaults: {xtype: 'textfield'},
						
						items: [
							{
								fieldLabel: "Название",
								name: 'name'
							},
							{
								fieldLabel: "Инфорамция",
								name: 'info',
								xtype: 'textarea'
							},
							{
								fieldLabel: "Сайт",
								name: 'site'
							},
							phones_container = Ext.create('Ext.form.FieldContainer',
											{
												defaults: {
													xtype: 'textfield'
												},
												items: [
													{
														fieldLabel: "Телефон",
														name: 'phone_0'
													}
												]
											}),
							Ext.create('Ext.Button',
											{
												align: 'right',
												text: '+',
												handler: function() {
													var tf = Ext.create('Ext.form.field.Text',
																	{
																		name: 'phone_' + (form.p++),
																		fieldLabel: 'Доп. телефон'
																	});
													phones_container.add(tf);
												}
											}),
							skypes_container = Ext.create('Ext.form.FieldContainer',
											{
												defaults: {xtype: 'textfield'},
												items: [
													{
														fieldLabel: "Skype",
														name: 'skype_0'
													}
												]
											}),
							Ext.create('Ext.Button',
											{
												align: 'right',
												text: '+',
												handler: function() {
													var tf = Ext.create('Ext.form.field.Text',
																	{
																		name: 'skype_' + (form.s++),
																		fieldLabel: 'Доп. skype'
																	});
													skypes_container.add(tf);
												}
											}),
							emails_container = Ext.create('Ext.form.FieldContainer',
											{
												defaults: {xtype: 'textfield'},
												items: [
													{
														fieldLabel: "Эл. почта",
														name: 'email_0'
													}
												]
											}),
							Ext.create('Ext.Button',
											{
												align: 'right',
												text: '+',
												handler: function() {
													var tf = Ext.create('Ext.form.field.Text',
																	{
																		name: 'email_' + (form.e++),
																		fieldLabel: 'Доп. эл. почта'
																	});
													emails_container.add(tf);
												}
											}),
							{
								xtype: 'combobox',
								fieldLabel: "Город",
								name: 'City',
								id: 'city_id',
								store: city_store,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'id',
								value: city_store.getAt('0').get('id')
							},
							{
								xtype: 'combobox',
								fieldLabel: "Размер бизнеса",
								name: 'BusinessScale',
								value: business_scale_store.getAt('0').get('id'),
								store: business_scale_store,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'id'
							},
							{
								xtype: 'combobox',
								fieldLabel: "Статус",
								name: 'CompanyStatus',
								value: company_status_store.getAt('0').get('id'),
								store: company_status_store,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'id'
							},
							{
								xtype: 'combobox',
								fieldLabel: "Сегмент",
								name: 'Segment',
								value: segment_store.getAt('0').get('id'),
								store: segment_store,
								queryMode: 'local',
								displayField: 'name',
								valueField: 'id'
							},
							{
								xtype: 'combobox',
								fieldLabel: "Сотрудник",
								name: 'Employee',
								hidden: !employee_admin,
								value: employee_store.getAt('0').get('id'),
								store: employee_store,
								queryMode: 'local',
								displayField: 'login',
								valueField: 'id'
							},
							tags_container = Ext.create('Ext.form.FieldContainer',
											{
												defaults: {xtype: 'combobox'},
												items: [
													{
														fieldLabel: "Теги",
														name: 'tag_0',
														value: tags_store.getAt('0').get('id'),
														store: tags_store,
														queryMode: 'local',
														displayField: 'name',
														valueField: 'id'
													}
												]
											}),
							Ext.create('Ext.Button',
											{
												align: 'right',
												text: '+',
												handler: function() {
													var tf = Ext.create('Ext.form.field.ComboBox',
																	{
																		fieldLabel: "Теги",
																		name: 'tag_' + (form.t++),
																		value: tags_store.getAt('0').get('id'),
																		store: tags_store,
																		queryMode: 'local',
																		displayField: 'name',
																		valueField: 'id'
																	});
													tags_container.add(tf);
												}
											}),
							{
								xtype: 'hidden',
								name: 'action'
							},
							{
								xtype: 'hidden',
								name: 'id'
							}

						],
						add_email: function(email) {
							var tf = Ext.create('Ext.form.field.Text',
											{
												name: 'email_' + (form.e++),
												fieldLabel: 'Доп. эл. почта',
												value: email
											});
							emails_container.add(tf);
						},
						add_phone: function(phone) {
							var tf = Ext.create('Ext.form.field.Text',
											{
												name: 'phone_' + (form.p++),
												fieldLabel: 'Доп. телефон',
												value: phone
											});
							phones_container.add(tf);
						},
						add_skype: function(skype) {
							var tf = Ext.create('Ext.form.field.Text',
											{
												name: 'skype_' + (form.s++),
												fieldLabel: 'Доп. skype',
												value: skype
											});
							skypes_container.add(tf);
						},
						add_tag: function(tag) {
							var tf = Ext.create('Ext.form.field.ComboBox',
											{
												fieldLabel: "Теги",
												name: 'tag_' + (form.t++),
												value: tag,
												store: tags_store,
												queryMode: 'local',
												displayField: 'name',
												valueField: 'id'
											});
							tags_container.add(tf);

						}
					});

	return form;

}

function create_cmp_window() {
	return cmp_win = Ext.create('Ext.window.Window',
					{
						resizable: false,
						title: '...',
						width: 300,
						bodyStyle: 'background-color:#fff;padding: 10px',
						items: [
							cmp_form = create_cmp_form()
						],						
						buttonAlign: 'right',						
						buttons: [{text: 'Сохранить',
								handler: function() {
									cmp_form.submit({
										waitMsg: 'Сохранение...',
										success: function(f, a) {
											cmp_window.close();
											refresh_cmp();
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
									cmp_window.close();
								}
							}
						]
					});
}