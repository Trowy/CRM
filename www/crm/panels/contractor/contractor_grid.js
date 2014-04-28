var contractor_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'first_name', 'middle_name', 'last_name', 'fio', 'info', 'phones',  'emails','skypes'],
    
  
  proxy:{
    type:'ajax',
   url: domen+'crm/contractors',
    reader:{
         root:'data'
        }
    }
	
});

var contractor_grid = Ext.create('Ext.ux.LiveSearchGridPanel', {
 		flex: 1,
			
	listeners: {
itemclick: function(dv, record, item, index, e) {
	leftPanel.getLayout().setActiveItem(1);
		
		tab_event_panel.setActiveTab('cntevt');		
		
	var row = contractor_grid.getSelectionModel().getSelection()[0];
	
	event_store7.load({params:{cnt:row.get('id')}});
		event_store8.load({params:{cnt:row.get('id')}});
		event_store9.load({params:{cnt:row.get('id')}});
	
contractorForm.getForm().setValues({
	last_name:row.get('last_name'),
	first_name:row.get('first_name'),
	middle_name:row.get('middle_name'),
	info:row.get('info'),
	phones:row.get('phones'),
	emails:row.get('emails'),
	skypes:row.get('skypes'),

})	
}
	},
				
		store: contractor_store,
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
      text: "Телефон",
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