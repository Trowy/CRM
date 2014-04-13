var loginVType = {
	login: function(val, field) {
		var loginNumberRegex = /^\w{2,15}$/;
		return loginNumberRegex.test(val);
	},
	loginText: 'Логин должен состоять из латинских букв и быть длиной от 2 до 15 символов!',
	loginMask: /[\w]/

};

Ext.apply(Ext.form.field.VTypes, loginVType);

var auth_window = Ext.create('Ext.window.Window', {
	title: 'Авторизация',
	iconCls: 'key',
	height: 140,
	width: 300,
	modal: true,
	resizable: false,
	closable: false,
	id: 'authWindow',
	items: [{
			xtype: 'form',
			url: domen + 'crm/auth',
			id: 'loginForm',
			minHeight: 200,
			bodyPadding: 15,
			items: [{
					xtype: 'textfield',
					fieldLabel: "Логин",
					id: 'auth_login',
					name: 'auth_login',
					emptyText: 'Ваш логин',
					allowBlank: false,
					enforceMaxLength: true,
					maxLength: 15,
					vtype: 'login',
				}, {
					xtype: 'textfield',
					inputType: 'password',
					fieldLabel: "Пароль",
					name: 'auth_pass',
					emptyText: 'Ваш пароль',
					allowBlank: false,
				}],
			defaults: {
				enableKeyEvents: true,
				listeners: {
					specialKey: function(field, el) {
						if (el.getKey() == Ext.EventObject.ENTER) {
							Ext.getCmp('loginBtn').handler.call(Ext.getCmp('loginBtn').scope);
						}
					}
				}
			},
		}],
	dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [{
					xtype: 'tbfill'
				}, {
					xtype: 'button',
					formBind: true,
					iconCls: 'submit_login',
					text: "Войти",
					id: 'loginBtn',
					handler: function() {
						var form = Ext.getCmp('loginForm').getForm();

						form.submit({
							waitMsg: 'Авторизация...',
							success: function(form, action) {

								employee_id = action.result.employee_id;
								employee_admin = action.result.employee_role === 'S';

								document.cookie = "employee_id=" + action.result.employee_id;

								auth_window.close();
								init_crm();

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
				}]
		}]
});