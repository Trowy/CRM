function create_add_et_window() {
	et_window = create_et_window();
	et_window.title = 'Добавить тип события';
	et_window.items.items[0].getForm().setValues({
		action: 'new'
	});
	et_window.show();
}

function create_edit_et_window() {
	if (event_type_grid.getSelectionModel().getSelection() !== "") {
		et_window = create_et_window();
		et_window.title = 'Изменить тип события';
		var row = event_type_grid.getSelectionModel().getSelection()[0];
		et_window.items.items[0].getForm().setValues({
			id: row.get('id'),
			name: row.get('name'),
			info: row.get('info'),
			action: 'edit'
		});
		et_window.show();
	}
}

function create_del_et_window() {

	var selectedRecord = event_type_grid.getSelectionModel().getSelection()[0];

	Ext.Ajax.request({
		method: 'POST',
		url: domen + 'crm/event_types',
		params: {id: selectedRecord.data.id, action: 'delete'},
		success: function(result, request) {

			var response = Ext.decode(result.responseText);
			if (response.success) {
				refresh_et();
			}
			else {
				Ext.MessageBox.show({
					title: 'Ошибка',
					msg: response.errors.name,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.ERROR
				});
			}
		}
	});

}

function refresh_et() {
	event_type_store.load();
	event_type_grid.getView().refresh();

}

var event_type_panel = Ext.create('Ext.panel.Panel', {
	title: 'Типы событий',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [event_type_grid],
	tbar: [
		{
			text: 'Добавить', iconCls: 'add',
			handler: create_add_et_window
		},
		{
			text: 'Изменить', iconCls: 'edit',
			handler: create_edit_et_window
		},
		{
			text: 'Удалить', iconCls: 'delete',
			handler: create_del_et_window
		},
		'-',
		{
			text: 'Обновить', iconCls: 'refresh',
			handler: refresh_et
		}
	]
});