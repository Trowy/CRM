function create_add_cmp_window(){

	cmp_window = create_cmp_window();	
	cmp_window.title = 'Добавить компанию';	
	cmp_window.items.items[0].getForm().setValues({
action: 'new'
});	
	cmp_window.show();


}

function create_edit_cmp_window(){
if(company_grid.getSelectionModel().getSelection()!=""){
	cmp_window = create_cmp_window();cmp_window.title = 'Изменить компанию';	
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
Tags: row.get('Tags'),
action: 'edit'
   
})
	cmp_window.show();
	}

}

function create_del_cmp_window(){
	var selectedRecord = city_grid.getSelectionModel().getSelection()[0];
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/companies',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            refresh_cmp();
        }
    });
	
	


}

function refresh_cmp(){
	
	company_store.load();
	employee_grid.getView().refresh();

}

var company_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Комнании',   
	
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