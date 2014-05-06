var leftPanel = Ext.create('Ext.panel.Panel', {

		xtype: 'panel',
     
        layout:'card',
        region: 'west',
		activeItem: 0,
			split: true,
			width: 200,
		bbar: [                     
  
		{ text:'Справка',xtype:'button',iconCls: 'help'},
  '-',{ text:'Выход',xtype:'button',iconCls: 'exit'},
  
],
		
		items: [
			eventFormPanel,contractorFormPanel, companyFormPanel
		]
        
    });
