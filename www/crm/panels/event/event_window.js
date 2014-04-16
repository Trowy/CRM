 function create_evt_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/events',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[{
      fieldLabel: "Название",
      name: 'title',      
    },{
	xtype: 'combobox',
      fieldLabel: "contractor",
      name: 'contractor',

    store: contractor_store,
    queryMode: 'local',
    displayField: 'middle_name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Компания",
      name: 'company',

    store: company_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "employee",
      name: 'employee',

    store: employee_store,
    queryMode: 'local',
    displayField: 'login',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "eventType",
      name: 'eventType',

    store: event_type_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
      fieldLabel: "Дата поступления",
      name: 'date',      
    },{
      fieldLabel: "prodolgitel",
      name: 'duration',      
    },
	{
      fieldLabel: "Описание",
      name: 'info',      
    },{
	xtype: 'combobox',
      fieldLabel: "eventStatus",
      name: 'eventStatus',

    store: event_status_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },{
                    xtype: 'fileuploadfield',
                    id: 'filedata',
                    emptyText: 'Select a document to upload...',
                    fieldLabel: 'File',
                    buttonText: 'Browse'
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
 function create_evt_window(){
 return evt_win = Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [evt_form = create_evt_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				evt_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						evt_window.close();
						refresh_evt();
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