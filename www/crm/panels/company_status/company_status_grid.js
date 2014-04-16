var company_status_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/company_statuses',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
	
});

var company_status_grid = Ext.create('Ext.grid.Panel', {
				
	store: company_status_store,
	columns: [    
    {
      text: "Название",
      dataIndex: 'name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});