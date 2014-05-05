 function create_tgs_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/tags',
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
 function create_tgs_window(){
 return tgs_win = Ext.create('Ext.window.Window',{
 
	
		resizable: false,		
   title: '...',  
	width:300, 
	
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [tgs_form = create_tgs_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				tgs_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						
						refresh_tgs();
						tgs_win.close();
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
	},{text:'Отмена',handler:function(){tgs_window.close();}}] 
          
 
 });
 }