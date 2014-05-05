function create_add_evt_window(){

	evt_window = create_evt_window();	
	evt_window.title = 'Добавить событие';	
evt_window.items.items[0].getForm().setValues({
action: 'new'
});		
	evt_window.show();
	

}

function create_edit_evt_window(){
	var ent_grid;
	
	var activeTab = tab_event_panel.getActiveTab().getActiveTab().id;
	
		if(activeTab=='evt_1'){
			ent_grid = event_grid1;
		}else if(activeTab=='evt_2'){
			ent_grid = event_grid2;
		}else if(activeTab=='evt_3'){
			ent_grid = event_grid3;
		}else if(activeTab=='evt_4'){
			ent_grid = event_grid4;
		}else if(activeTab=='evt_5'){
			ent_grid = event_grid5;
		}else if(activeTab=='evt_6'){
			ent_grid = event_grid6;
		}else if(activeTab=='evt_7'){
			ent_grid = event_grid7;
		}else if(activeTab=='evt_8'){
			ent_grid = event_grid8;
		}else if(activeTab=='evt_9'){
			ent_grid = event_grid9;
		}
		
if(ent_grid.getSelectionModel().getSelection()!=""){
	
	
		
	evt_window = create_evt_window();evt_window.title = 'Изменить событие';	
	var row = ent_grid.getSelectionModel().getSelection()[0];
	evt_window.items.items[0].getForm().setValues({
id: row.get('id'),
title: row.get('title'),
contractor: row.get('Contractor'),
duration:   row.get('duration'),
company: row.get('Company'),
employee: row.get('Employee'),
eventType: row.get('EventType'),
date: row.get('date'),
info: row.get('info'),
eventStatus: row.get('EventStatus'),
action: 'edit'
   
})
	evt_window.show();}
	

}

function create_del_evt_window(){

var ent_grid;
	
	var activeTab = tab_event_panel.getActiveTab().getActiveTab().id;
	
		if(activeTab=='evt_1'){
			ent_grid = event_grid1;
		}else if(activeTab=='evt_2'){
			ent_grid = event_grid2;
		}else if(activeTab=='evt_3'){
			ent_grid = event_grid3;
		}else if(activeTab=='evt_4'){
			ent_grid = event_grid4;
		}else if(activeTab=='evt_5'){
			ent_grid = event_grid5;
		}else if(activeTab=='evt_6'){
			ent_grid = event_grid6;
		}else if(activeTab=='evt_7'){
			ent_grid = event_grid7;
		}else if(activeTab=='evt_8'){
			ent_grid = event_grid8;
		}else if(activeTab=='evt_9'){
			ent_grid = event_grid9;
		}

	var selectedRecord = ent_grid.getSelectionModel().getSelection()[0];
	
	Ext.Ajax.request({
        method: 'POST',
        url: domen+'crm/events',
        params: { id: selectedRecord.data.id, action: 'delete'},
        success: function( result, request ){
           
            var response = Ext.decode(result.responseText);
                 if (response.success) { refresh_evt();}
                 else {Ext.MessageBox.show({
								title: 'Ошибка',
								msg: response.errors.name,
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});}
        }
    });

}

function refresh_evt(){
	event_store1.load();
	event_store2.load();
	event_store3.load();
	event_store4.load();
	event_store5.load();
	event_store6.load();
	event_store7.load();
	event_store8.load();
	event_store9.load();
	event_grid1.getView().refresh();
	event_grid2.getView().refresh();
	event_grid3.getView().refresh();
	event_grid4.getView().refresh();
	event_grid5.getView().refresh();
	event_grid6.getView().refresh();
	event_grid7.getView().refresh();
	event_grid8.getView().refresh();
	event_grid9.getView().refresh();
	

}

var event_panel1 = Ext.create('Ext.panel.Panel', {
	id: 'evt_1',
	title: 'Все события',
	flex: 1,
	region: 'north',
	items: [event_grid1],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel2 = Ext.create('Ext.panel.Panel', {
	id: 'evt_2',
	title: 'События недели',
	flex: 1,
	region: 'north',
	items: [event_grid2],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel3 = Ext.create('Ext.panel.Panel', {
	id: 'evt_3',
	title: 'События дня',
	flex: 1,
	region: 'north',
	items: [event_grid3],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel4 = Ext.create('Ext.panel.Panel', {
	id: 'evt_4',
	title: 'Все события',
	flex: 1,
	region: 'north',
	items: [event_grid4],
	
	
	
});

var event_panel5 = Ext.create('Ext.panel.Panel', {
	id: 'evt_5',
	title: 'События недели',
	flex: 1,
	region: 'north',
	items: [event_grid5],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel6 = Ext.create('Ext.panel.Panel', {
	id: 'evt_6',
	title: 'События дня',
	flex: 1,
	region: 'north',
	items: [event_grid6],
	
	
	
});

var event_panel7 = Ext.create('Ext.panel.Panel', {
	id: 'evt_7',
	title: 'Все события',
	flex: 1,
	region: 'north',
	items: [event_grid7],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel8 = Ext.create('Ext.panel.Panel', {
	id: 'evt_8',
	title: 'События недели',
	flex: 1,
	region: 'north',
	items: [event_grid8],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var event_panel9 = Ext.create('Ext.panel.Panel', {
	id: 'evt_9',
	title: 'События дня',
	flex: 1,
	region: 'north',
	items: [event_grid9],
	layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	
	
});

var tab_event_panel = Ext.create('Ext.TabPanel',
					{
				xtype: 'tabpanel',	
activeTab: 0,	
	
		
		
		activeTab: 0,
		tbar: [
		{
		text: 'Добавить',iconCls: 'add',
		handler: create_add_evt_window
		},
		{
		text: 'Изменить',iconCls: 'edit',
		handler: create_edit_evt_window
		},
		{		
		text: 'Удалить',iconCls: 'delete',
		handler: create_del_evt_window
		},
		'-',
		{
		text: 'Обновить',iconCls: 'refresh',
		handler: refresh_evt
		}
	],
		items:[{title: 'Все события',
				xtype: 'tabpanel',
				id: 'allevt',
				items:[
					event_panel1,
				event_panel2,
				event_panel3,					
				]
		},{title: 'События компании',
				xtype: 'tabpanel',
				id: 'cmpevt',
				items:[
					event_panel4,
				event_panel5,
				event_panel6,					
				]
		},{title: 'События контактного лица',
				xtype: 'tabpanel',
				id: 'cntevt',
				items:[
					event_panel7,
				event_panel8,
				event_panel9,					
				]
		},
				
						
				
				
				
				
				]}
					);