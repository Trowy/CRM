var employee_id = -1;
var employee_admin = false;

Ext.onReady(function() {
	
	Ext.Ajax.request({
		method: 'GET',
		url: domen + 'crm/auth',
		
		success: function(result, request) {
			var result_array = Ext.decode(result.responseText);
			if (result_array.success) {

				employee_id = result_array.employee_id;
				employee_admin = result_array.employee_role === 'S';
				init_crm();

			} else {
				auth_window.show();
			}
		}
	});

});

function init_crm() {

if(employee_admin){
		admin_panel.hidden = false;
}

	Ext.create('Ext.Viewport', {

		layout: {
			type: 'border',
			padding: 5
		},

		defaults: {
			split: true
		},

		items: [
			leftPanel
			
		,{
			
			region: 'center',
			layout: 'border',
			border: false,

			items: [{
			region: 'south',
					flex:1,
					height: '40%',
					
					items:[
				tab_event_panel
					]
				},
			
				{
							
					region: 'south',
					flex:1,
					height: '60%',
					layout:'fit',
					items:[{
					xtype: 'tabpanel',
activeTab: 0,	
	items:[
				
				contractor_panel,
				company_panel,
				
				admin_panel
				]}
					]
					
				}
			]
		}]
		
	})		;
	employee_store.load();
city_store.load();
business_scale_store.load();	
	tags_store.load();
segment_store.load();
report_store1.load();
report_store2.load();
report_store3.load();
event_type_store.load();
event_status_store.load();
event_store1.load();
event_store2.load();
event_store3.load();
event_store4.load();
event_store5.load();
event_store6.load();
event_store7.load();
event_store8.load();
event_store9.load();
contractor_store.load();
company_status_store.load();
company_store.load();



}
