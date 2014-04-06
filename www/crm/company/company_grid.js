var company_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info', 'site', 'phones', 'emails', 'skypes', 
	{name: 'City', mapping: 'City.id'}, 
	{name: 'Segment', mapping: 'Segment.id'}, 
	{name: 'BusinessScale', mapping: 'BusinessScale.id'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.id'}, 
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