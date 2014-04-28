var company_event = 0;
var cont_event = 0;

var event_store1 = Ext.create('Ext.data.JsonStore', {
    fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
			{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],

    

		
  
	
  proxy:{
    type:'ajax',
    url:domen+'crm/events',
		 extraParams: {type: "1"},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store2 = Ext.create('Ext.data.JsonStore', {
      fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
				{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "2"},
		
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store3 = Ext.create('Ext.data.JsonStore', {
    fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
				{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "3"},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store4 = Ext.create('Ext.data.JsonStore', {
    fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
			{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "4",comp: company_event},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store5 = Ext.create('Ext.data.JsonStore', {
   fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
			{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "5",comp: company_event},
		
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store6 = Ext.create('Ext.data.JsonStore', {
     fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
			{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "6",comp: company_event},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store7 = Ext.create('Ext.data.JsonStore', {
     fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
		{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "7",cnt:cont_event},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_store8 = Ext.create('Ext.data.JsonStore', {
     fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
		{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "8",cnt:cont_event},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});



var event_store9 = Ext.create('Ext.data.JsonStore', {
      fields: [
			'id', 
			'title', 
			'info', 
			'date', 
			'duration', 
			{name: 'StatusType', mapping: 'StatusType.id'},
	{name: 'EventType', mapping: 'EventType.id'},
	{name: 'Company', mapping: 'Company.id'},
	{name: 'Contractor', mapping: 'Contractor.id'},
	{name: 'EventStatus', mapping: 'EventStatus.id'},
	{name: 'StatusType_name', mapping: 'StatusType.name'},
	{name: 'EventType_name', mapping: 'EventType.name'},
	{name: 'Company_name', mapping: 'Company.name'},
	{name: 'Contractor_name', mapping: 'Contractor.middle_name'},
	{name: 'EventStatus_name', mapping: 'EventStatus.name'},
	
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/events',extraParams: {type: "9",cnt:0},
    reader:{
         root:'data',
		 idProperty: 'id'
        }
    }
	
});

var event_grid1 = Ext.create('Ext.grid.Panel', {
				flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid1.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name'),
})
}},
				
	store: event_store1,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid2 = Ext.create('Ext.grid.Panel', {
			flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid2.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')

})
}},
	
			
	store: event_store2,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid3 = Ext.create('Ext.grid.Panel', {
			flex: 1,		
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid3.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
	
	store: event_store3,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid4 = Ext.create('Ext.grid.Panel', {
				flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid4.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
		
	store: event_store4,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid5 = Ext.create('Ext.grid.Panel', {
				flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid5.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
		
	store: event_store5,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid6 = Ext.create('Ext.grid.Panel', {
			flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid6.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
			
	store: event_store6,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid7 = Ext.create('Ext.grid.Panel', {
			flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid7.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
			
	store: event_store7,
columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid8 = Ext.create('Ext.grid.Panel', {
			flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid8.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
			
	store: event_store8,
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});

var event_grid9 = Ext.create('Ext.grid.Panel', {
	flex: 1,
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(0);

var row = event_grid9.getSelectionModel().getSelection()[0];

eventForm.getForm().setValues({
title:row.get('title'),
contractor:row.get('Contractor_name'),
company:row.get('Company_name'),
eventType:row.get('EventType_name'),
date:row.get('date'),
duration:row.get('duration'),
info:row.get('info'),
eventStatus:row.get('EventStatus_name')
})
}},
	
	store: event_store9,
	
	
	columns: [    
    {
      text: "Название",
      dataIndex: 'title',      
    },
	{
      text: "Тип",
      dataIndex: 'EventType_name',      
    },
	{
      text: "Дата",
      dataIndex: 'date',      
    },
	{
      text: "Контркрт",
      dataIndex: 'Contractor_name',      
    },
	{
      text: "Описание",
      dataIndex: 'info',      
    }]
});