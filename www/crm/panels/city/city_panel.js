function create_add_ct_window(){

	ct_window = create_ct_window();	
	ct_window.title = 'rest';	
	ct_window.items.items[0].getForm().setValues({
action: 'new'
});	
	ct_window.show();
	

}

function create_edit_ct_window(){

	ct_window = create_ct_window();
	var row = city_grid.getSelectionModel().getSelection()[0];
	ct_window.items.items[0].getForm().setValues({
	id: row.get('id'),
name: row.get('name'),
code: row.get('code'),
time_zone: row.get('time_zone'),
   action: 'edit'
})
	ct_window.show();
	

}

function create_del_ct_window(){

	var selectedRecord = city_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/cities',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            refresh_et();
        }
    });

}

function refresh_ct(){
	city_store.load();
	city_grid.getView().refresh();

}

var city_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'города',

	items: [city_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_ct_window
		},
		{
		text: 'Изменить',
		handler: create_edit_ct_window
		},
		{		
		text: 'Удалить',
		handler: create_del_ct_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_ct
		}
	],
	
});