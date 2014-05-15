var tags_store = Ext.create('Ext.data.JsonStore', {
	fields: ['id', 'name', 'info'],
	proxy: {
		type: 'ajax',
		url: domen + 'crm/tags',
		reader: {
			root: 'data',
			idProperty: 'id'
		}
	}

});

var tags_grid = Ext.create('Ext.grid.Panel', {
	flex: 1,
	store: tags_store,
	columns: [
		{
			text: "Название",
			dataIndex: 'name',
			width: 150
		},
		{
			text: "Описание",
			dataIndex: 'info',
			width: '100%'
		}
	]
});