 function create_cnt_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				url: domen+'crm/contractors',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[
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
      fieldLabel: "Описание",
      name: 'info',      
    },
	{
      fieldLabel: "Телефоны",
      name: 'phones',      
    },
	{
      fieldLabel: "Эл. почты",
      name: 'emails',      
    },{
      fieldLabel: "Skype",
      name: 'skypes',      
    },{
  xtype:'hidden',
   name:'action'
},{
  xtype:'hidden',
   name:'id'
}
	] });
 
 
 }
 

 function create_cnt_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
    title: '...', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [cnt_form = create_cnt_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				cnt_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						cnt_window.close();
						refresh_cnt();
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
	},{text:'Отмена',handler:function(){cnt_window.close();}}] 
          
 
 });
 }