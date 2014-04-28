function create_add_cnt_window(){

	cnt_window = create_cnt_window();	
	cnt_window.title = 'Добавить контакное лицо';	
	cnt_window.items.items[0].getForm().setValues({
action: 'new'
});	
	cnt_window.show();
	

}

function create_edit_cnt_window(){
if(contractor_grid.getSelectionModel().getSelection()!=""){
	var row = contractor_grid.getSelectionModel().getSelection()[0];
	cnt_window = create_cnt_window();
	cnt_window.title = 'Изменить контакное лицо';	
	
	cnt_window.items.items[0].getForm().setValues({
id: row.get('id'),
last_name: row.get('last_name'),
first_name: row.get('first_name'),
middle_name: row.get('middle_name'),
info: row.get('info'),
phones: row.get('phones'),
emails: row.get('emails'),
skypes: row.get('skypes'),
      action: 'edit'
})
	cnt_window.show();}
	

}

function create_del_cnt_window(){

	var selectedRecord = contractor_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/contractors',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            
            var response = Ext.decode(result.responseText);
                 if (response.success) {refresh_cnt();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });

}

function refresh_cnt(){
	contractor_store.load();
	contractor_grid.getView().refresh();

}

var contractor_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Контактные лица',   
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	items: [contractor_grid],
	
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
		},
	],
	
});