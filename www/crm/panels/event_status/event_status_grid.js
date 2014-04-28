var event_status_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/event_statuses',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_status_grid = Ext.create('Ext.grid.Panel', {
				flex: 1,
	store: event_status_store,
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