var event_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'title', 'info', 'date', 
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Contractor', mapping: 'Contractor.id'}],
    
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

var event_grid1 = Ext.create('Ext.grid.Panel', {
				
	store: event_store,
	listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

}},
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

var event_store1 = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'title', 'info', 'date', 
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Contractor', mapping: 'Contractor.id'}],
    
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