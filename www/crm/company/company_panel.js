function create_add_cmp_window(){

	cmp_window = create_cmp_window();	
	cmp_window.title = 'rest';	
	cmp_window.show();
	refresh();

}

function create_edit_cmp_window(){

	cmp_window = create_cmp_window();
	var row = company_grid.getSelectionModel().getSelection()[0];
	cmp_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
site: row.get('site'),
phones: row.get('phones'),
emails: row.get('emails'),
skypes: row.get('skypes'),
City: row.get('City'),
BusinessScale: row.get('BusinessScale'),
CompanyStatus: row.get('CompanyStatus'),
Employee: row.get('Employee'),
Tags: row.get('Tags')
   
})
	cmp_window.show();
	refresh();

}

function create_del_cmp_window(){

	Ext.Ajax.request({
        method: 'GET',
        url: 'test.php',
        params: { id:2 },
        success: function( result, request ){
            alert(1);
        }
    });

}

function refresh_cmp(){
	store.load();
	managers_grid.getView().refresh();

}

var company_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Комнания',
	
    
    
	
	items: [company_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_cmp_window
		},
		{
		text: 'Изменить',
		handler: create_edit_cmp_window
		},
		{		
		text: 'Удалить',
		handler: create_del_cmp_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_cmp
		}
	],
	
});