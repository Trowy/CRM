var city_store = Ext.create('Ext.data.JsonStore', {
	fields: ['id', 'name', 'code', 'time_zone'],
	proxy: {
		type: 'ajax',
		url: domen + 'crm/cities',
		reader: {
			root: 'data',
			idProperty: 'id'
		}
	}

});

var city_grid = Ext.create('Ext.grid.Panel', {
	flex: 1,
	store: city_store,
	columns: [
		{
			text: "Название",
			dataIndex: 'name',
			width: 150
		},
		{
			text: "Код города",
			dataIndex: 'code',
			width: 100
		},
		{
			text: "Временная зона",
			dataIndex: 'time_zone',
			width: '100%'
		}
	]
});