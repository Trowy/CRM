 function create_cmp_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: 'some.json',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[{
      fieldLabel: "Логин",
      name: 'login',      
    },{
      fieldLabel: "Пароль",
      name: 'password',      
    },
	{
      fieldLabel: "Фамилия",
      name: 'last_name',      
    },
	{
      fieldLabel: "Имя",
      name: 'first_name',      
    },
	{
      fieldLabel: "Отчество",
      name: 'middle_name',      
    },
	{
      fieldLabel: "Роль",
      name: 'role',      
    },
	{
      fieldLabel: "Эл. почта",
      name: 'email',      
    },{
      fieldLabel: "Пароль эл. почта",
      name: 'email_password',      
    }
	] });
 
 
 }
 

 function create_cmp_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
    title: 'Добавить клиента', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [mng_form = create_mng_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Добавить',
	handler: function(){

				
				mng_form.submit({
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
	},{text:'Отмена',handler:function(){mng_window.close();}}] 
          
 
 });
 }