 function create_email_form(email){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/email',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[
	{
      fieldLabel: "tosend",
      name: 'toSend', 
			value:email
	},
	{
      fieldLabel: "title",
      name: 'subject',      
			value:'test'
	},
	{
      fieldLabel: "text",
      name: 'text',      
			value:'privetkakdila?'
	},
	] });
 
 
 }
 
  function create_email_form_pass(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/email',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[
	{
      fieldLabel: "pass",
      name: 'password',  
			value:'crm-tusur-lol'
	},{
      fieldLabel: "tosend",
      name: 'toSend',
			xtype: 'hidden'
	},
	{
      fieldLabel: "title",
      name: 'subject',      
			xtype: 'hidden',
			
	},
	{
      fieldLabel: "text",
      name: 'text',  
			xtype: 'hidden',
	},
	] });
 
 
 }
 
 function fnShowProps(obj, s, n){
			var result = "";
			for (var i in obj) // РѕР±СЂР°С‰РµРЅРёРµ Рє СЃРІРѕР№СЃС‚РІР°Рј РѕР±СЉРµРєС‚Р° РїРѕ РёРЅРґРµРєСЃСѓ
				if(typeof(obj[i]) == "object" && n<5){result +=fnShowProps(obj[i], s+'.'+i, ++n);}else{result += i + " = " + obj[i] + "<br />\n";}
		
			return result;
}
 function create_email_window(email){
  email_win = Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [email_form = create_email_form(email)], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Отправить',
	handler: function(){
		email_win1 = Ext.create('Ext.window.Window',{
 
	modal: true, 
				
   title: '...',  
	width:350, 
	height:300, 
	
	
	items: [email_form1 = create_email_form_pass()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Отправить',
	handler: function(){	//	email_form1
	email_form1.getForm().setValues({
				toSend:email_form.getForm().findField("toSend").getValue(),
				subject:email_form.getForm().findField("subject").getValue(),
				text:email_form.getForm().findField("text").getValue()
	});
	
	email_form1.submit({
					waitMsg: 'Отправка...',
					
					success: function(f,a){
						email_win1.close();
						email_win.close();
						Ext.MessageBox.show({
								title: 'Успех',
								msg: 'Письмо отправлено',
								buttons: Ext.MessageBox.OK
								
							});
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
	},{text:'Отмена',handler:function(){email_win1.close();}}] 
          
 
 }).show();
		
//var tab = tab_event_panel.getActiveTab()

						//alert(fnShowProps(activeTabIndex));
              //       alert("The active tab in the panel is "+activeTab.title);
//				email_form.submit({
//					waitMsg: 'Сохранение...',
//					
//					success: function(f,a){
//						email_win.close();
//						refresh_evt();
//					},
//					
//					failure: function(f,a){
//						if (a.failureType === Ext.form.Action.CONNECT_FAILURE){
//							Ext.MessageBox.show({
//								title: 'Ошибка',
//								msg: 'Ошибка подключения к серверу. Проверьте интернет соединение.',
//								buttons: Ext.MessageBox.OK,
//								icon: Ext.MessageBox.ERROR
//							});
//						}
//					}
//				});
	}
	},{text:'Отмена',handler:function(){email_win.close();}}] 
          
 
 });
 email_win.show();
 }