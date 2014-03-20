var loginVType = {
	login: function(val, field){
		var passNumberRegex = /^\w{2,15}$/;
		return passNumberRegex.test(val);
	},
	
	loginText: 'Логин должен состоять из латинских букв и быть длиной от 2 до 15 символов!',
	loginMask: /[\w]/
	
};

Ext.apply(Ext.form.field.VTypes, loginVType);

var auth_window = Ext.create('Ext.window.Window', {
	
	title: 'Авторизация',
	
	height: 140,
	width: 300,
	
	modal: true,
	resizable: false,
	closable:false,
	
	id: 'authWindow',
	
	items: [{
		xtype: 'form',
		url: 'test-data/auth.json',
		id: 'loginForm',
		
		minHeight: 200,
		bodyPadding: 15,
		
		items: [{
			xtype: 'textfield',
			fieldLabel: "Логин",
			name: 'auth_login',
			
			allowBlank: false,
			vtype: 'login',
		},{
			xtype: 'textfield',
			inputType: 'password',
			fieldLabel: "Пароль",
			name: 'auth_pass',
			
			allowBlank: false,
		}]
	}],
	
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		
		items: [{
			xtype: 'tbfill'
		},{
			xtype: 'button',
			formBind: true,
			text: "Войти",
			handler: function(){
				var form = Ext.getCmp('loginForm').getForm();
				
				form.submit({
					waitMsg: 'Авторизация...',
					
					success: function(f,a){
						Ext.Msg.alert('Success', 'It worked');
					},
					
					failure: function(f,a){
						if (a.failureType === Ext.form.Action.CONNECT_FAILURE){
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