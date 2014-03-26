var managers_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'login', 'password', 'first_name', 'middle_name', 'last_name', 'role', 'email'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/Employee',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var managers_grid = Ext.create('Ext.grid.Panel', {
				
	store: managers_store,
	columns: [    
    {
      text: "Логин",
      dataIndex: 'login',      
    },
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
      dataIndex: 'role',      
    },
	{
      text: "Эл. почта",
      dataIndex: 'email',      
    }]
});