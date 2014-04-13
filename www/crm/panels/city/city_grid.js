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
      text: "Логин",
      dataIndex: 'name',      
    },
	{
      text: "Фамилия",
      dataIndex: 'code',      
    },
	{
      text: "Имя",
      dataIndex: 'time_zone',      
    }]
});