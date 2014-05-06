var report_store1 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'employee', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/reports',extraParams: {type: "0"},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var report_grid1 = Ext.create('Ext.grid.Panel', {
				
	store: report_store1,
	columns: [    
    {
      text: "Сотрудник",
      dataIndex: 'employee',    width:250      
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',        width:130  
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',       width:130   
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',     width:130     
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',      width:130    
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',     width:130     
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',      width:"100%"    
    }]
});

var report_store2 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'employee', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/reports',extraParams: {type: "1"},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var report_grid2 = Ext.create('Ext.grid.Panel', {
				
	store: report_store2,
	columns: [    
    {
      text: "Сотрудник",
      dataIndex: 'employee',         width:250 
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',         width:130 
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',       width:130   
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',       width:130   
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',       width:130   
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',      width:130    
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',       width:"100%"   
    }]
});

var report_store3 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'employee', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/reports',extraParams: {type: "2"},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var report_grid3 = Ext.create('Ext.grid.Panel', {
				
	store: report_store3,
	columns: [    
    {
      text: "Сотрудник",
      dataIndex: 'employee',      width:250 
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',  width:130     
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',    width:130   
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',    width:130   
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',   width:130    
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',    width:130   
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',  width:'100%'     
    }]
});

