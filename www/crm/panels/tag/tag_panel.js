function create_add_tgs_window(){

	tgs_window = create_tgs_window();	
	tgs_window.title = 'Добавить таг';	
	tgs_window.items.items[0].getForm().setValues({
action: 'new'
});
	tgs_window.show();	

}

function create_edit_tgs_window(){
if(tags_grid.getSelectionModel().getSelection()!=""){
	tgs_window = create_tgs_window();	tgs_window.title = 'Изменить таг';
	var row = tags_grid.getSelectionModel().getSelection()[0];
	tgs_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	tgs_window.show();	}

}

function create_del_tgs_window(){

	var selectedRecord = tags_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/tags',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
         
            var response = Ext.decode(result.responseText);
                 if (response.success) {   refresh_tgs();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });

}

function refresh_tgs(){

	tags_store.load();
	tags_grid.getView().refresh();

}

var tags_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Теги компаний',

	items: [tags_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_tgs_window
		},
		{
		text: 'Изменить',
		handler: create_edit_tgs_window
		},
		{		
		text: 'Удалить',
		handler: create_del_tgs_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_tgs
		}
	],
	
});