function create_add_cnt_window(){

	cmp_window = create_cnt_window();	
	cmp_window.title = 'rest';	
	cmp_window.show();
	refresh();

}

function create_edit_cnt_window(){

	cmp_window = create_cnt_window();
	var row = contact_grid.getSelectionModel().getSelection()[0];
	cmp_window.items.items[0].getForm().setValues({
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

function create_del_cnt_window(){

	Ext.Ajax.request({
        method: 'GET',
        url: 'test.php',
        params: { id:2 },
        success: function( result, request ){
            alert(1);
        }
    });

}

function refresh_cnt(){
	store.load();
	managers_grid.getView().refresh();

}

var contact_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Комнания',
	flex: 1,
    region: 'south',
    
	
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