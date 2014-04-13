var leftPanel = Ext.create('Ext.panel.Panel', {

		xtype: 'panel',
        title: 'левая панель',        
        layout:'card',
        region: 'west',
		activeItem: 0,
			split: true,
			width: 200,
		tbar: [                     
  
    {text:'Изменить'}
    
                            
  ,
  
  {text:'Удалить'},
  '-',                      
  {text:'Написать почту'},   
  {text:'Позмонить по скайпу'}
],
		
		items: [
			eventFormPanel, companyFormPanel, contactFormPanel
		]
        
    });
