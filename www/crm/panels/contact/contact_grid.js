var contact_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'first_name', 'middle_name', 'last_name', 'info', 'phones',  'emails','skypes'],
    
  autoLoad: true,
  proxy:{
    type:'ajax',
   url: domen+'crm/contractors',
    reader:{
         root:'data'
        }
    }
	
});

var contact_grid = Ext.create('Ext.grid.Panel', {
				
			
	listeners: {
itemclick: function(dv, record, item, index, e) {
			cont_event=7;
leftPanel.getLayout().setActiveItem(1);
event_store1.load();
	event_store1.getView().refresh();
	event_store2.load();
	event_store2.getView().refresh();
	event_store3.load();
	event_store3.getView().refresh();
}},
				
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