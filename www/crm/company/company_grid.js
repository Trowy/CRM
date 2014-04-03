var company_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info', 'site', 'phones', 'emails', 'skypes', 
	{name: 'City', mapping: 'City.name'}, 
	{name: 'Segment', mapping: 'Segment.name'}, 
	{name: 'BusinessScale', mapping: 'BusinessScale.name'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.name'}, 
	'CompanyStatus', 
	'Employee', 'Tags'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:domen+'crm/companies',
    reader:{
         root:'data'
        }
    }
	
});

var company_grid = Ext.create('Ext.grid.Panel', {
				
		store: company_store,
		columns: [
    
   
	{
      text: "Название",
      dataIndex: 'name',      
    },
	{
      text: "Город",       
	  dataIndex: 'City'
    },
	{
      text: "Статус",
      dataIndex: 'CompanyStatus_name',      
    },
	{
      text: "Сегмент",
      dataIndex: 'Segment',      
    },
	{
      text: "Размер бизнеса",
      dataIndex: 'BusinessScale',      
    }
	
	]
});