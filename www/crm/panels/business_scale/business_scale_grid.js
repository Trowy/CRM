var business_scale_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/business_scales',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var business_scale_grid = Ext.create('Ext.grid.Panel', {
				
	store: business_scale_store,
	columns: [    
    {
      text: "Логин",
      dataIndex: 'name',      
    },
	{
      text: "Фамилия",
      dataIndex: 'info',      
    }]
});