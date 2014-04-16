 function create_cmp_form(){
 
 return Ext.create('Ext.form.Panel',{
				 
				url: domen+'crm/companies',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[	 
	{
      fieldLabel: "Название",
      name: 'name',      
    },
	{
      fieldLabel: "Инфорамция",
      name: 'info',      
    },
	{
      fieldLabel: "Сайт",
      name: 'site',      
    },
	{
      fieldLabel: "Телефоны",
      name: 'phones',      
    },
	{
      fieldLabel: "Эл. почта",
      name: 'emails',      
    }, {
      fieldLabel: "Skype",
      name: 'skypes',      
    },
	{
	xtype: 'combobox',
      fieldLabel: "Город",
      name: 'City',

    store: city_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Размер бизнеса",
      name: 'BusinessScale',

    store: business_scale_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Статус",
      name: 'CompanyStatus',

    store: company_status_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Сотрудник",
      name: 'Employee',

    store: employee_store,
    queryMode: 'local',
    displayField: 'login',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Теги",
      name: 'Tags',

    store: tags_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },{
  xtype:'hidden',
   name:'action'
},{
  xtype:'hidden',
   name:'id'
}
	
	] });
 
 
 }
 

 function create_cmp_window(){
 return cmp_win = Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	height:600, 
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [cmp_form = create_cmp_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				cmp_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						cmp_window.close();
						refresh_cmp();
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