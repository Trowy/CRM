function create_add_bs_window(){

	bs_window = create_bs_window();	
	bs_window.title = 'rest';	
	bs_window.items.items[0].getForm().setValues({
action: 'new'
});	
	bs_window.show();
	

}

function create_edit_bs_window(){

	bs_window = create_bs_window();
	var row = business_scale_grid.getSelectionModel().getSelection()[0];
	bs_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	bs_window.show();
	

}

function create_del_bs_window(){

	var selectedRecord = business_scale_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/business_scales',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            
        }
    });

}

function refresh_bs(){
	business_scale_store.load();
	business_scale_grid.getView().refresh();

}

var business_scale_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'размер бизнеса',
	
	items: [business_scale_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_bs_window
		},
		{
		text: 'Изменить',
		handler: create_edit_bs_window
		},
		{		
		text: 'Удалить',
		handler: create_del_bs_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_bs
		}
	],
	
});