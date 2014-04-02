Ext.onReady(function(){

	//auth_window.show();

	Ext.create('Ext.Viewport', {

		layout: 'fit',		
		
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
			business_scale_panel,
			//city_panel			
			]
			}
		]
		
	});
		
});
