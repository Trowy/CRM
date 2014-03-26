Ext.onReady(function(){

	//auth_window.show();

	Ext.create('Ext.Viewport', {

		layout: 'border',	

		items: [
			managers_panel,
			company_panel,
			contact_panel			
		]
		
	});
		
});
