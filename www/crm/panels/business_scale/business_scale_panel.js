function create_add_bs_window(){
	bs_window = create_bs_window();
	bs_window.title = 'Добавить размер бизнеса';
	bs_window.items.items[0].getForm().setValues({
		action: 'new'
	});
	bs_window.show();
}

function create_edit_bs_window(){
	if(business_scale_grid.getSelectionModel().getSelection()!==""){
		bs_window = create_bs_window();bs_window.title = 'Изменить размер бизнеса';
		var row = business_scale_grid.getSelectionModel().getSelection()[0];
		bs_window.items.items[0].getForm().setValues({
			id: row.get('id'),
			name: row.get('name'),
			info: row.get('info'),
			action: 'edit'
		});
		bs_window.show();
	}
}

function create_del_bs_window(){
	var selectedRecord = business_scale_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
		method: 'POST',
		url: domen+'crm/business_scales',
		params: {
			id: selectedRecord.data.id,
			action: 'delete'
		},
		success: function(result, request){
			var response = Ext.decode(result.responseText);
			if (response.success) {
				refresh_bs();
			} else {
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

function refresh_bs(){
	business_scale_store.load();
	business_scale_grid.getView().refresh();
}

var business_scale_panel = Ext.create('Ext.panel.Panel', {
	title: 'Размеры бизнеса',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [business_scale_grid],
	
	tbar: [
		{
			text: 'Добавить',iconCls: 'add',
			handler: create_add_bs_window
		},
		{
			text: 'Изменить',iconCls: 'edit',
			handler: create_edit_bs_window
		},
		{
			text: 'Удалить',iconCls: 'delete',
			handler: create_del_bs_window
		},
		'-',
		{
			text: 'Обновить',iconCls: 'refresh',
			handler: refresh_bs
		}
	]
});