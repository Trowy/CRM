 function create_evt_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/events',
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
 
 function fnShowProps(obj, s, n){
			var result = "";
			for (var i in obj) // РѕР±СЂР°С‰РµРЅРёРµ Рє СЃРІРѕР№СЃС‚РІР°Рј РѕР±СЉРµРєС‚Р° РїРѕ РёРЅРґРµРєСЃСѓ
				if(typeof(obj[i]) == "object" && n<5){result +=fnShowProps(obj[i], s+'.'+i, ++n);}else{result += i + " = " + obj[i] + "<br />\n";}
		
			return result;
}
 function create_evt_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
    title: 'Добавить клиента', 
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [evt_form = create_evt_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Добавить',
	handler: function(){

				
				evt_form.submit({
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
	},{text:'Отмена',handler:function(){evt_window.close();}}] 
          
 
 });
 }