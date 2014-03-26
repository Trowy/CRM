var contact_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'first_name', 'middle_name', 'last_name', 'info', 'phones',  'emails','skypes'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/Contact',
    reader:{
         root:'data'
        }
    }
	
});

var contact_grid = Ext.create('Ext.grid.Panel', {
				
		store: contact_store,
		columns: [      
	{
      text: "Фамилия",
      dataIndex: 'last_name',      
    },
	{
      text: "Имя",
      dataIndex: 'first_name',      
    },
	{
      text: "Отчество",
      dataIndex: 'middle_name',      
    },
	{
      text: "Роль",
      dataIndex: 'phones',      
    },
	{
      text: "Эл. почта",
      dataIndex: 'emails',      
    },
	{
      text: "Скайп",
      dataIndex: 'skypes',      
    }]
});