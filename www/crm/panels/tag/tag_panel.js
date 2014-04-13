function create_add_tgs_window(){

	tgs_window = create_tgs_window();	
	tgs_window.title = 'rest';	
	tgs_window.items.items[0].getForm().setValues({
action: 'new'
});
	tgs_window.show();	

}

function create_edit_tgs_window(){

	tgs_window = create_tgs_window();
	var row = tags_grid.getSelectionModel().getSelection()[0];
	tgs_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	tgs_window.show();	

}

function create_del_tgs_window(){

	var selectedRecord = tags_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/tags',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            refresh_tgs();
        }
    });

}

function refresh_tgs(){

	tags_store.load();
	tags_grid.getView().refresh();

}

var tags_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'tagi',

	items: [tags_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_tgs_window
		},
		{
		text: 'Изменить',
		handler: create_edit_tgs_window
		},
		{		
		text: 'Удалить',
		handler: create_del_tgs_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_tgs
		}
	],
	
});