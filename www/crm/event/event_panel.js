function create_add_evt_window(){

	evt_window = create_evt_window();	
	evt_window.title = 'rest';
evt_window.items.items[0].getForm().setValues({
action: 'new'
});		
	evt_window.show();
	

}

function create_edit_evt_window(){

	evt_window = create_evt_window();
	var row = event_grid.getSelectionModel().getSelection()[0];
	evt_window.items.items[0].getForm().setValues({
id: row.get('id'),
title: row.get('title'),
contractor: row.get('contractor'),
duration:   row.get('duration'),
company: row.get('company'),
managers: row.get('managers'),
eventType: row.get('eventType'),
date: row.get('date'),
info: row.get('info'),
eventStatus: row.get('eventStatus'),
action: 'edit'
   
})
	evt_window.show();
	

}

function create_del_evt_window(){

	var selectedRecord = event_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'GET',
        url: domen+'crm/Employee',
        params: { id: selectedRecord.data.id },
        success: function( result, request ){
            refresh_evt();
        }
    });

}

function refresh_evt(){
	event_store.load();
	event_grid.getView().refresh();

}

var event_panel = Ext.create('Ext.panel.Panel', {
	
	title: 'евент',
	flex: 1,
	region: 'north',
	items: [event_grid],
	
	tbar: [
		{
		text: 'Добавить',
		handler: create_add_evt_window
		},
		{
		text: 'Изменить',
		handler: create_edit_evt_window
		},
		{		
		text: 'Удалить',
		handler: create_del_evt_window
		},
		'-',
		{
		text: 'Обновить',
		handler: refresh_evt
		}
	],
	
});