var segment_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/segments',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var segment_grid = Ext.create('Ext.grid.Panel', {
				
	store: segment_store,
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