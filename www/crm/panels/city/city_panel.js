function create_add_ct_window(){

	ct_window = create_ct_window();	
	ct_window.title = 'Добавить город';	
	ct_window.items.items[0].getForm().setValues({
action: 'new'
});	
	ct_window.show();
	

}

function create_edit_ct_window(){
if(city_grid.getSelectionModel().getSelection()!=""){
	ct_window = create_ct_window();ct_window.title = 'Изменить город';	
	var row = city_grid.getSelectionModel().getSelection()[0];
	ct_window.items.items[0].getForm().setValues({
	id: row.get('id'),
name: row.get('name'),
code: row.get('code'),
time_zone: row.get('time_zone'),
   action: 'edit'
})
	ct_window.show();
	}

}

function create_del_ct_window(){

	var selectedRecord = city_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/cities',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
            
						var response = Ext.decode(result.responseText);
                 if (response.success) {refresh_ct();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        },
				
    });

}

function refresh_ct(){
	city_store.load();
	city_grid.getView().refresh();

}

var city_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'Города',
layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	items: [city_grid],
	
	tbar: [
		{
		text: 'Добавить',iconCls: 'add',
		handler: create_add_ct_window
		},
		{
		text: 'Изменить',iconCls: 'edit',
		handler: create_edit_ct_window
		},
		{		
		text: 'Удалить',iconCls: 'delete',
		handler: create_del_ct_window
		},
		'-',
		{
		text: 'Обновить',iconCls: 'refresh',
		handler: refresh_ct
		}
	],
	
});