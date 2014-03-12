/**
* init
*/
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', '/extjs');
Ext.require([
    'Ext.Msg',
	'Ext.panel.*'
]);

Ext.onReady(function(){

	Ext.create('Ext.container.Viewport', {
	
		layout : 'border',
		
		items:[
			leftPanel,
			{
				xtype : 'panel',
				region : 'center',            
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [
					topPanel,
					bottomPanel
				]
			}
		]
	
	});

});