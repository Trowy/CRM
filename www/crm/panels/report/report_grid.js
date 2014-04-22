var report_store1 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  autoLoad: true,
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
      dataIndex: 'employee_id',      
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',      
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',      
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',      
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',      
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',      
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',      
    }]
});

var report_store2 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  autoLoad: true,
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
      dataIndex: 'employee_id',      
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',      
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',      
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',      
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',      
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',      
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',      
    }]
});

var report_store3 = Ext.create('Ext.data.JsonStore', {
    fields: ['employee_id', 'cmpInsert', 'cmpUpdate','cmpDelete', 'evtInsert', 'evtUpdate','evtDelete'],
    
  autoLoad: true,
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
      dataIndex: 'employee_id',      
    },
	{
      text: "Добавлено компаний",
      dataIndex: 'cmpInsert',      
    },
	{
      text: "Изменено компаний",
      dataIndex: 'cmpUpdate',      
    },
	{
      text: "Удалено компаний",
      dataIndex: 'cmpDelete',      
    },
	{
      text: "Добавлено событий",
      dataIndex: 'evtInsert',      
    },
	{
      text: "Изменено событий",
      dataIndex: 'evtUpdate',      
    },
	{
      text: "Удалено событий",
      dataIndex: 'evtDelete',      
    }]
});

