var loginVType = {
        login: function(val, field){ return true;
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
	
	items: [{
	
		xtype: 'form',
		
		minHeight: 200,
		bodyPadding: 15,
		
		items: [{
		
			xtype: 'textfield',	
			fieldLabel: "Логин",		
			
			allowBlank: false,	
			vtype: 'login',
			
		},{
		
			xtype: 'textfield',			
			inputType: 'password',			
			fieldLabel: "Пароль",
			
			allowBlank: false,
			
		}]
		
	}],
	
	dockedItems: [{
	
        xtype: 'toolbar',
        dock: 'bottom',
        items: [
            {
                xtype: 'tbfill'
            },
            {
                xtype: 'button',                
                formBind: true,                 
                text: "Войти"
            }
        ]
	}]
	
});