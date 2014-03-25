var store = Ext.create('Ext.data.JsonStore', {
    fields: ['login', 'first_name', 'middle_name', 'last_name', 'role', 'email'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:'test-data/test-data-managers.php',
    reader:{
         root:'data'
        }
    }
	
});

Ext.onReady(function(){

	//auth_window.show();

	Ext.create('Ext.Viewport', {

		layout: {
			type: 'fit'			
		},

		defaults: {
			split: true
		},

		items: [{

			region: 'west',
			title: 'Манагеры',
			split: true,		

		tbar: [
		{
		text: 'Добавить',
		handler:function(){
                 Ext.create('widget.window',{ 
				
    title: 'Добавить клиента', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	items: [{xtype: 'form',
				 id: 'clientform',
				 url: 'some.json',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[{ 
			fieldLabel:'Фамилия', 
			name:'last_name'		
			
		},
		{ 
			fieldLabel:'Имя', 
			name:'first_name'			 
		},
		{ 
			fieldLabel:'Отчество', 
			name:'middle_name'
		},
		{ 
			fieldLabel:'Манагер', 
			name:'manager'
		},
		{ 
			fieldLabel:'Телефон', 
			name:'phone', 
			
		},
		{ 
			fieldLabel:'Email', 
			name:'email' 
		},
		{ 
			fieldLabel:'Skype', 
			name:'skype' 
		},
		{ 
			fieldLabel:'Icq', 
			name:'icq'
		},
		{ 
			fieldLabel:'Примечание', 
			name:'note'
		}
	] }], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Добавить',
	handler: function(){
var form = Ext.getCmp('clientform').getForm();
				
				form.submit({
					waitMsg: 'Добавление...',
					
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
	},{text:'Отмена'}] //buttons of the form
                          
}).show(); 
                        }},{
						text: 'Изменить',
						handler:function(){
							alert(Ext.getCmp('mnggrid').getSelectionModel().getSelection()[0].get('last_name'));
						}
						}],
			
			items: [{
				xtype: 'grid',
				store: store				,
				id: 'mnggrid',
				columns: [
    
    {
      text: "Логин",
      dataIndex: 'login',      
    },
	{
      text: "Фамилия",
      dataIndex: 'last_name',      
    },
	{
      text: "Имя",
      dataIndex: 'first_name',      
    },
	{
      text: "Отчество",
      dataIndex: 'middle_name',      
    },
	{
      text: "Роль",
      dataIndex: 'role',      
    },
	{
      text: "Эл. почта",
      dataIndex: 'email',      
    }]
			}]

			
			}
			]	
		
		});
		
	});
