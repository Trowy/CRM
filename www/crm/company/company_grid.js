var company_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info', 'site', 'phones', 'emails', 'skypes', 'City', 'BusinessScale', 'CompanyStatus', 'Employee', 'Tags'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/Company',
    reader:{
         root:'data'
        }
    }
	
});

var company_grid = Ext.create('Ext.grid.Panel', {
				
		store: company_store,
		columns: [
    
    {
      text: "Логин",
      dataIndex: 'id',      
    },
	{
      text: "Фамилия",
      dataIndex: 'name',      
    },
	{
      text: "Имя",
      dataIndex: 'info',      
    },
	{
      text: "Отчество",
      dataIndex: 'site',      
    },
	{
      text: "Роль",
      dataIndex: 'phones',      
    },
	{
      text: "Эл. почта",
      dataIndex: 'emails',      
    }, {
      text: "Логин",
      dataIndex: 'skypes',      
    },
	{
      text: "Фамилия",
      dataIndex: 'City',      
    },
	{
      text: "Имя",
      dataIndex: 'BusinessScale',      
    },
	{
      text: "Отчество",
      dataIndex: 'CompanyStatus',      
    },
	{
      text: "Роль",
      dataIndex: 'Employee',      
    },
	{
      text: "Эл. почта",
      dataIndex: 'Tags',      
    }
	
	]
});