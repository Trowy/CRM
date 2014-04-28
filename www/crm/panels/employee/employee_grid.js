var employee_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'login', 'password', 'first_name', 'middle_name', 'last_name', 'fio', 'role', 'email'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/employees',
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var employee_grid = Ext.create('Ext.grid.Panel', {
				flex: 1,
	store: employee_store,
	columns: [    
    {
      text: "Название",
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