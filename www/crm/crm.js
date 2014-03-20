Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', '/extjs');
Ext.require([
    'Ext.Msg',
	'Ext.panel.*'
]);
Ext.Ajax.cors = true;
Ext.Ajax.useDefaultXhrHeader = false;

Ext.onReady(function(){

	Ext.create('Ext.panel.Panel', {
	
		title: 'CRM - система',			
		renderTo: Ext.getBody()
		
	});
	
});