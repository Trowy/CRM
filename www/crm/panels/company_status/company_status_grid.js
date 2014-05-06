var company_status_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  
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
			flex: 1,	
	store: company_status_store,
	columns: [    
    {
      text: "Название",
      dataIndex: 'name',    width:150   
    },
	{
      text: "Описание",
      dataIndex: 'info',      width:'100%'
    }]
});