function refresh_rp(){
	report_store1.load();
	report_grid1.getView().refresh();
	report_store2.load();
	report_grid2.getView().refresh();
	report_store3.load();
	report_grid3.getView().refresh();

}

var report_panel1 = Ext.create('Ext.panel.Panel', {
	id: 'evt11_7',
	title: 'За день',
	flex: 1,
	region: 'north',
	items: [report_grid1],
	
	
	
});

var report_panel2 = Ext.create('Ext.panel.Panel', {
	id: 'evt12_7',
	title: 'За неделю',
	flex: 1,
	region: 'north',
	items: [report_grid2],
	
	
	
});

var report_panel3 = Ext.create('Ext.panel.Panel', {
	id: 'evt13_7',
	title: 'За месяц',
	flex: 1,
	region: 'north',
	items: [report_grid3],
	
	
	
});

var tab_report_panel = Ext.create('Ext.TabPanel',
					{
		title: 'Отчеты',
		activeTab: 0,
		tbar: [	
		{
		text: 'Обновить',iconCls: 'refresh',
		handler: refresh_rp
		},
		{
		text: 'Экспорт',
		handler: refresh_rp
		}
	],
		items:[report_panel1					
				
		,
					report_panel2					
				
		,
					report_panel3
				
				
		,
				
						
				
				
				
				
				]}
					);