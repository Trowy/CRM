var tags_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/tags',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var tags_grid = Ext.create('Ext.grid.Panel', {
				
	store: tags_store,
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