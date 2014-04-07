Ext.onReady(function(){

	//auth_window.show();

	Ext.create('Ext.Viewport', {

		layout: {
			type: 'border',
			padding: 5
		},

		defaults: {
			split: true
		},

		items: [
			clientFormPanel
			
		,{
			
			region: 'center',
			layout: 'border',
			border: false,

			items: [
			
				{
					region: 'south',
					flex:1,
					height: '40%',
					
					items:[{
					xtype: 'tabpanel',
activeTab: 0,	
	items:[
				
				event_panel,
				
				
				]}
					]
				},
			
				{
							
					region: 'south',
					flex:1,
					height: '60%',
					
					items:[{
					xtype: 'tabpanel',
activeTab: 0,	
	items:[
				
				contact_panel,
				
				company_panel,
				{title: 'Админка',
xtype: 'panel',
				items: [
				{
		
items: [	
		{
		
		xtype: 'tabpanel',		
		activeTab: 0,
		items:[
				tags_panel,
				segment_panel,
				managers_panel,
				event_type_panel,
				event_status_panel,
				company_status_panel,
				business_scale_panel,
				city_panel			
				]
			}
		]}]
				}			
				]}
					]
					
				}
			]
		}]
		
	});
		
});

/*
items: [
		{
		xtype: 'tabpanel',		
		activeTab: 0,
		items:[
				//tags_panel,
				//segment_panel,
				//managers_panel,
				//event_type_panel,
				//event_status_panel,
				//event_panel,
				//contact_panel,
				//company_status_panel,
				//company_panel,
				//business_scale_panel,
				//city_panel			
				]
			}
		]
		*/