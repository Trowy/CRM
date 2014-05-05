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
	
	emails = 	(row.get('emails')+"").split(',');
	phones = 	(row.get('phones')+"").split(',');
	skypes = 	(row.get('skypes')+"").split(',');
	
	cmp_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
site: row.get('site'),
phone_0: phones[0],
email_0: emails[0],
skype_0: skypes[0],
City: row.get('City'),
BusinessScale: row.get('BusinessScale'),
Segment: row.get('Segment'),
CompanyStatus: row.get('CompanyStatus'),
Employee: row.get('Employee'),
Tags: row.get('Tags'),
action: 'edit'
   
})

for(i=1;i<phones.length;i++){
	cmp_window.items.items[0].add_phone(phones[i]);
}
for(i=1;i<emails.length;i++){
	cmp_window.items.items[0].add_email(emails[i]);
}
for(i=1;i<skypes.length;i++){
	cmp_window.items.items[0].add_skype(skypes[i]);
}

	cmp_window.show();
	}

}

function create_del_cmp_window(){
	var selectedRecord = company_grid.getSelectionModel().getSelection()[0];
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/companies',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
           
            var response = Ext.decode(result.responseText);
                 if (response.success) { refresh_cmp();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });
	
	


}

function refresh_cmp(){
	
	company_store.load();
	employee_grid.getView().refresh();

}

var company_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Комнании',   iconCls: 'company', 
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	items: [company_grid],
	
	tbar: [
		{
		text: 'Добавить',iconCls: 'add',
		handler: create_add_cmp_window
		},
		{
		text: 'Изменить',iconCls: 'edit',
		handler: create_edit_cmp_window
		},
		{		
		text: 'Удалить',iconCls: 'delete',
		handler: create_del_cmp_window
		},
		'-',
		{
		text: 'Обновить',iconCls: 'refresh',
		handler: refresh_cmp
		}
	],
	
});