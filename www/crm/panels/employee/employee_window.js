 function create_emp_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				 url: domen+'crm/employees',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[{
      fieldLabel: "Название",
      name: 'login',      
    },{
      fieldLabel: "Пароль",
      name: 'password',      
    },{
      fieldLabel: "Описание",
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
		xtype:'combo',
      fieldLabel: "Роль",
      name: 'role',      
		
    store: Ext.create('Ext.data.Store', {
    fields: ['value', 'display'],
    data : [
        {"value":"S", "display":"S"},
        {"value":"M", "display":"M"}
        
       
    ]}),
    queryMode: 'local',
    displayField: 'display',
    valueField: 'value',
    value: 'M'
		
    },
	{
      fieldLabel: "Эл. почта",
      name: 'email',      
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
 function create_emp_window(){
 return emp_win = Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [emp_form = create_emp_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				emp_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						emp_window.close();
						refresh_mng();
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
	},{text:'Отмена',handler:function(){emp_window.close();}}] 
          
 
 });
 }