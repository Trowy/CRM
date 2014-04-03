var event_type_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  autoLoad: true,
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
      text: "Логин",
      dataIndex: 'name',      
    },
	{
      text: "Фамилия",
      dataIndex: 'info',      
    }]
});