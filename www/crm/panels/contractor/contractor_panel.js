function create_add_cnt_window() {
	cnt_window = create_cnt_window();
	cnt_window.title = 'Добавить контакное лицо';
	cnt_window.items.items[0].getForm().setValues({
		action: 'new'
	});
	cnt_window.show();
}

function create_edit_cnt_window() {
	if (contractor_grid.getSelectionModel().getSelection() !== "") {
		var row = contractor_grid.getSelectionModel().getSelection()[0];
		cnt_window = create_cnt_window();
		cnt_window.title = 'Изменить контакное лицо';
		
		emails = (row.get('emails') + "").split(',');
		phones = (row.get('phones') + "").split(',');
		skypes = (row.get('skypes') + "").split(',');

		cnt_window.items.items[0].getForm().setValues({
			id: row.get('id'),
			last_name: row.get('last_name'),
			first_name: row.get('first_name'),
			middle_name: row.get('middle_name'),
			info: row.get('info'),
			phone_0: phones[0],
			email_0: emails[0],
			skype_0: skypes[0],
			action: 'edit'
		});
		for (i = 1; i < phones.length; i++) {
			cnt_window.items.items[0].add_phone(phones[i]);
		}
		for (i = 1; i < emails.length; i++) {
			cnt_window.items.items[0].add_email(emails[i]);
		}
		for (i = 1; i < skypes.length; i++) {
			cnt_window.items.items[0].add_skype(skypes[i]);
		}
		cnt_window.show();
	}


}

function create_del_cnt_window() {

	var selectedRecord = contractor_grid.getSelectionModel().getSelection()[0];

	Ext.Ajax.request({
		method: 'POST',
		url: domen + 'crm/contractors',
		params: {id: selectedRecord.data.id, action: 'delete'},
		success: function(result, request) {
			var response = Ext.decode(result.responseText);
			if (response.success) {
				refresh_cnt();
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

function refresh_cnt() {
	contractor_store.load();
	contractor_grid.getView().refresh();

}

var contractor_panel = Ext.create('Ext.panel.Panel', {
	title: 'Контактные лица', iconCls: 'contractor',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [contractor_grid],
	tbar: [
		{
			text: 'Добавить', iconCls: 'add',
			handler: create_add_cnt_window
		},
		{
			text: 'Изменить', iconCls: 'edit',
			handler: create_edit_cnt_window
		},
		{
			text: 'Удалить', iconCls: 'delete',
			handler: create_del_cnt_window
		},
		'-',
		{
			text: 'Обновить', iconCls: 'refresh',
			handler: refresh_cnt
		}
	]
});