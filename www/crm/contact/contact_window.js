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
      fieldLabel: "инфа",
      name: 'info',      
    },
	{
      fieldLabel: "тел",
      name: 'phones',      
    },
	{
      fieldLabel: "почта",
      name: 'emails',      
    },{
      fieldLabel: "скайп",
      name: 'skypes',      
    }
	] });
 
 
 }
 

 function create_cnt_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
    title: 'Добавить контрктр', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [mng_form = create_cnt_form()], //assigning the form
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