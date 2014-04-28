function create_add_cs_window(){

	cs_window = create_cs_window();	
	cs_window.title = 'Добавить статус компании';	
	cs_window.items.items[0].getForm().setValues({
action: 'new'
});	
	cs_window.show();
	

}

function create_edit_cs_window(){
if(company_status_grid.getSelectionModel().getSelection()!=""){
	cs_window = create_cs_window();cs_window.title = 'Изменить статус компании';	
	var row = company_status_grid.getSelectionModel().getSelection()[0];
	cs_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	cs_window.show();

}
}

function create_del_cs_window(){

	var selectedRecord = company_status_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url:domen+'crm/company_statuses',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            
            var response = Ext.decode(result.responseText);
                 if (response.success) {refresh_cs();
								 }else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });

}

function refresh_cs(){
	company_status_store.load();
	company_status_grid.getView().refresh();

}

var company_status_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Статус компании',
		layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	items: [company_status_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_cs_window
		},
		{
		text: 'Изменить',
		handler: create_edit_cs_window
		},
		{		
		text: 'Удалить',
		handler: create_del_cs_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_cs
		}
	],
	
});