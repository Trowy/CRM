function create_add_mng_window(){

	mng_window = create_mng_window();	
	mng_window.title = 'rest';	
	mng_window.show();
	refresh();

}

function create_edit_mng_window(){

	mng_window = create_mng_window();
	var row = managers_grid.getSelectionModel().getSelection()[0];
	mng_window.items.items[0].getForm().setValues({
login: row.get('login'),
last_name: row.get('last_name'),
first_name: row.get('first_name'),
middle_name: row.get('middle_name'),
role: row.get('role'),
email: row.get('email')
   
})
	mng_window.show();
	refresh();

}

function create_del_mng_window(){

	var selectedRecord = managers_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'GET',
        url: domen+'crm/Employee',
        params: { id: selectedRecord.data.id },
        success: function( result, request ){
            
        }
    });

}

function refresh_mng(){
	managers_store.load();
	managers_grid.getView().refresh();

}

var managers_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Манагеры',
	
	
	items: [managers_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_mng_window
		},
		{
		text: 'Изменить',
		handler: create_edit_mng_window
		},
		{		
		text: 'Удалить',
		handler: create_del_mng_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_mng
		}
	],
	
});