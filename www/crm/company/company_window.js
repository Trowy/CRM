 function create_cmp_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: 'some.json',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[
	 {
      fieldLabel: "Логин",
      name: 'id',      
    },
	{
      fieldLabel: "Фамилия",
      name: 'name',      
    },
	{
      fieldLabel: "Имя",
      name: 'info',      
    },
	{
      fieldLabel: "Отчество",
      name: 'site',      
    },
	{
      fieldLabel: "Роль",
      name: 'phones',      
    },
	{
      fieldLabel: "Эл. почта",
      name: 'emails',      
    }, {
      fieldLabel: "Логин",
      name: 'skypes',      
    },
	{
      fieldLabel: "Фамилия",
      name: 'City',      
    },
	{
      fieldLabel: "Имя",
      name: 'BusinessScale',      
    },
	{
      fieldLabel: "Отчество",
      name: 'CompanyStatus',      
    },
	{
      fieldLabel: "Роль",
      name: 'Employee',      
    },
	{
      fieldLabel: "Эл. почта",
      name: 'Tags',      
    }
	] });
 
 
 }
 

 function create_cmp_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
    title: 'Добавить клиента', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [cmp_form = create_cmp_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Добавить',
	handler: function(){

				
				cmp_form.submit({
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
	},{text:'Отмена',handler:function(){cmp_window.close();}}] 
          
 
 });
 }