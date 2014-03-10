Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', '/extjs');
Ext.require([
    'Ext.Msg',
	'Ext.panel.*'
]);

Ext.onReady(function(){
   
    var viewport = Ext.create('Ext.container.Viewport', {
        layout : 'border',
        items : [{
			xtype : 'panel',
            title: 'Редактирование',
            width: 300,			
            region: 'west',
			border: true
        },        
        {
            xtype : 'panel',
            region : 'center',            
			layout: {
                type: 'vbox',
                align: 'stretch'
            },
			items:[			    
			{
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'Просмотр событий',
				flex: 1
			},{
				border: true,
				xtype : 'panel',
				height: 100,
				region : 'north',				
				title:'Просмотр компаний',
				flex: 1
			}]
        }]
    });
});