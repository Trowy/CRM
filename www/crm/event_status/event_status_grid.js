var event_status_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  autoLoad: true,
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
				
	store: event_status_store,
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