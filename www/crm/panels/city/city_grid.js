var city_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'code', 'time_zone'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/cities',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var city_grid = Ext.create('Ext.grid.Panel', {
				
	store: city_store,
	columns: [    
    {
      text: "Название",
      dataIndex: 'name',      
    },
	{
      text: "Код города",
      dataIndex: 'code',      
    },
	{
      text: "Временная зона",
      dataIndex: 'time_zone',      
    }]
});