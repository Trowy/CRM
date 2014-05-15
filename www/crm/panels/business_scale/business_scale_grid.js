var business_scale_store = Ext.create('Ext.data.JsonStore', {
	fields: ['id', 'name', 'info'],
	proxy: {
		type:'ajax',
		url:domen+'crm/business_scales',
		reader: {
			root:'data',
			idProperty: 'id'
		}
	}
	
});

var business_scale_grid = Ext.create('Ext.grid.Panel', {
	flex: 1,
	store: business_scale_store,
	columns: [
		{
			text: "Название",
			dataIndex: 'name', width:150
		},
		{
			text: "Описание",
			dataIndex: 'info',width:'100%'
		}
	]
});