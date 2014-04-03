var event_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'title', 'info', 'date', 'EventType', 'Contractor'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/events',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_grid = Ext.create('Ext.grid.Panel', {
				
	store: event_store,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});