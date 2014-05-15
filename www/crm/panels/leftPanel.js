var leftPanel = Ext.create('Ext.panel.Panel', {
	xtype: 'panel',
	layout: 'card',
	region: 'west',
	activeItem: 0,
	split: true,
	width: 200,
	bbar: [
		{text: 'Справка', xtype: 'button', iconCls: 'help'},
		'-', {text: 'Выход', xtype: 'button', iconCls: 'exit', handler: function() {
				Ext.Ajax.request({
					method: 'POST',
					url: domen + 'crm/auth',
					params: {
						logout: true
					},
					success: function(result, request) {
						document.location.href = "/";
					}
				});
			}}
	],
	items: [
		eventFormPanel,
		contractorFormPanel,
		companyFormPanel
	]

});
