 function create_cmp_form(){
 
 var form =  Ext.create('Ext.form.Panel',{
				 
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
id:'city_id',
    store: city_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
		value: city_store.getAt('0').get('id'),
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Размер бизнеса",
      name: 'BusinessScale',
value: business_scale_store.getAt('0').get('id'),
    store: business_scale_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Статус",
      name: 'CompanyStatus',
value: company_status_store.getAt('0').get('id'),
    store: company_status_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Сегмент",
      name: 'Segment',
value: segment_store.getAt('0').get('id'),
    store: segment_store,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Сотрудник",
      name: 'Employee',
hidden:!employee_admin,
value: employee_store.getAt('0').get('id'),
    store: employee_store,
    queryMode: 'local',
    displayField: 'login',
    valueField: 'id',
	  
    },
	{
	xtype: 'combobox',
      fieldLabel: "Теги",
      name: 'Tags',
value: tags_store.getAt('0').get('id'),
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

 return form;
 
 }
 

 function create_cmp_window(){
 return cmp_win = Ext.create('Ext.window.Window',{
 
	
				
   title: '...',  
	width:300, 
	
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