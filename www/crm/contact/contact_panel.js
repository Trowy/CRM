function create_add_cnt_window(){

	cnt_window = create_cnt_window();	
	cnt_window.title = 'rest';	
	cnt_window.show();
	refresh_cnt();

}

function create_edit_cnt_window(){

	cnt_window = create_cnt_window();
	var row = contact_grid.getSelectionModel().getSelection()[0];
	cnt_window.items.items[0].getForm().setValues({

last_name: row.get('last_name'),
first_name: row.get('first_name'),
middle_name: row.get('middle_name'),
info: row.get('info'),
phones: row.get('phones'),
emails: row.get('emails'),
skypes: row.get('skypes')
   
})
	cnt_window.show();
	refresh_cnt();

}

function create_del_cnt_window(){

	var selectedRecord = contact_grid.getSelectionModel().getSelection()[0];
	alert(selectedRecord.data.skypes[1]);
	/*Ext.Ajax.request({
        method: 'GET',
        url: domen+'crm/Employee',
        params: { id: selectedRecord.data.id },
        success: function( result, request ){
            
        }
    });*/

}

function refresh_cnt(){
	contact_store.load();
	contact_grid.getView().refresh();

}

var contact_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Котратор',
	
    region: 'center',
	flex: 1,
    
	
	items: [contact_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_cnt_window
		},
		{
		text: 'Изменить',
		handler: create_edit_cnt_window
		},
		{		
		text: 'Удалить',
		handler: create_del_cnt_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_cnt
		}
	],
	
});