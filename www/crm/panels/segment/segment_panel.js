function create_add_sgt_window(){

	sgt_window = create_sgt_window();	
	sgt_window.title = 'Добавить сегмент';	
	sgt_window.items.items[0].getForm().setValues({
action: 'new'
});
	sgt_window.show();


}

function create_edit_sgt_window(){
if(segment_grid.getSelectionModel().getSelection()!=""){
	sgt_window = create_sgt_window();	sgt_window.title = 'Изменить сегмент';	
	var row = segment_grid.getSelectionModel().getSelection()[0];
	sgt_window.items.items[0].getForm().setValues({
id: row.get('id'),
name: row.get('name'),
info: row.get('info'),
action: 'edit'
});
	sgt_window.show();
	}

}

function create_del_sgt_window(){

	var selectedRecord = segment_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/segments',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
          
            var response = Ext.decode(result.responseText);
                 if (response.success) {  refresh_sgt();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });
		

}

function refresh_sgt(){
	segment_store.load();
	segment_grid.getView().refresh();

}

var segment_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Сегменты',
	flex: 1,
	region: 'north',
	items: [segment_grid],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_sgt_window
		},
		{
		text: 'Изменить',
		handler: create_edit_sgt_window
		},
		{		
		text: 'Удалить',
		handler: create_del_sgt_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_sgt
		}
	],
	
});