var bottomPanel = {
				border: true,
				xtype : 'tabpanel',
				flex: 1,			
				region : 'south',
				
				layout: 'fit',
				items   : [
				{
				border: true,
				xtype : 'panel',
				
				region : 'south',
				title:'Контактные лица',
				layout: 'fit',
				items   : [
				{
				tbar: [                     
  
    {text:'Добавить'},
   {text:'Изменить'},
  {text:'Удалить'},
  '-',
  {text:'Обновить'}
],
				border: true,
				xtype : 'grid',
				flex: 1,

    store: store,               // определили хранилище
           // Заголовок
    columns:col         ,       
	  bbar: Ext.create('Ext.PagingToolbar', {
            store: store
        }) 
	}
				
				]
				
			},{
				border: true,
				xtype : 'panel',
								
				region : 'south',
				title:'Компании',
				layout: 'fit',
				items   : []
				
			},
				]
				
			};