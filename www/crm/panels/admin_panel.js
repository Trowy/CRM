var admin_panel = {
	title: 'Администрирование',
	xtype: 'panel',
	hidden: true,
	layout: 'fit',
	items: [
		{
			xtype: 'tabpanel',
			activeTab: 0,
			items: [
				tags_panel,
				segment_panel,
				employee_panel,
				event_type_panel,
				event_status_panel,
				company_status_panel,
				business_scale_panel,
				city_panel,
				tab_report_panel
			]
		}
	]
};


