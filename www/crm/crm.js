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

			items: [
			
				{
					region: 'south',
					flex:1,
					height: '40%',
					
					items:[{
					xtype: 'tabpanel',
activeTab: 0,	
	
		
		xtype: 'tabpanel',		
		activeTab: 0,
		tbar: [
		{
		text: 'Добавить',
		handler: create_add_evt_window
		},
		{
		text: 'Изменить',
		handler: create_edit_evt_window
		},
		{		
		text: 'Удалить',
		handler: create_del_evt_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_evt
		}
	],
		items:[{title: 'Все события',
				xtype: 'tabpanel',
				items:[
					event_panel1,
				event_panel2,
				event_panel3,					
				]
		},{title: 'События компании',
				xtype: 'tabpanel',
				items:[
					event_panel4,
				event_panel5,
				event_panel6,					
				]
		},{title: 'События контактного лица',
				xtype: 'tabpanel',
				items:[
					event_panel7,
				event_panel8,
				event_panel9,					
				]
		},
				
						
				
				
				
				
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
				
				contractor_panel,
				company_panel,
				
				{title: 'Админестрирование',
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
				employee_panel,
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
		
	})		


}
