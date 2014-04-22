var event_type_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/event_types',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_type_grid = Ext.create('Ext.grid.Panel', {
				
	store: event_type_store,
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