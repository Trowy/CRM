 function create_et_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/event_types',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[{
      fieldLabel: "Название",
      name: 'name',      
    },{
      fieldLabel: "Описание",
      name: 'info',      
    },{
  xtype:'hidden',
   name:'action'
},{
  xtype:'hidden',
   name:'id'
}
	] });
 
 
 }
 
 function fnShowProps(obj, s, n){
			var result = "";
			for (var i in obj) // РѕР±СЂР°С‰РµРЅРёРµ Рє СЃРІРѕР№СЃС‚РІР°Рј РѕР±СЉРµРєС‚Р° РїРѕ РёРЅРґРµРєСЃСѓ
				if(typeof(obj[i]) == "object" && n<5){result +=fnShowProps(obj[i], s+'.'+i, ++n);}else{result += i + " = " + obj[i] + "<br />\n";}
		
			return result;
}
 function create_et_window(){
 return Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [et_form = create_et_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				et_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						Ext.Msg.alert('Success', 'It worked');
						refresh_et();
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
	},{text:'Отмена',handler:function(){et_window.close();}}] 
          
 
 });
 }