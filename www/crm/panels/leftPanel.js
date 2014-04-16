var leftPanel = Ext.create('Ext.panel.Panel', {

		xtype: 'panel',
     
        layout:'card',
        region: 'west',
		activeItem: 0,
			split: true,
			width: 200,
		
		
		items: [
			eventFormPanel,contractorFormPanel, companyFormPanel
		]
        
    });
