function create_add_evt_window(){

	evt_window = create_evt_window();	
	evt_window.title = 'rest';	
	evt_window.show();
	refresh();

}

function create_edit_evt_window(){

	evt_window = create_evt_window();
	var row = event_grid.getSelectionModel().getSelection()[0];
	evt_window.items.items[0].getForm().setValues({
login: row.get('login'),
last_name: row.get('last_name'),
first_name: row.get('first_name'),
middle_name: row.get('middle_name'),
role: row.get('role'),
email: row.get('email')
   
})
	evt_window.show();
	refresh();

}

function create_del_evt_window(){

	var selectedRecord = event_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'GET',
        url: domen+'crm/Employee',
        params: { id: selectedRecord.data.id },
        success: function( result, request ){
            
        }
    });

}

function refresh_mng(){
	event_store.load();
	event_grid.getView().refresh();

}

var event_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'евент',
	flex: 1,
	region: 'north',
	items: [event_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_evt_window
		},
		{
		text: 'Изменить',
		handler: create_edit_evt_window
		},
		{		
		text: 'Удалить',
		handler: create_del_evt_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_mng
		}
	],
	
});