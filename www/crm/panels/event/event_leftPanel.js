var eventForm = {
		
		xtype: 'panel',
		margin: '10 10 10 10',
		defaults:{xtype:'displayfield',labelAlign: 'left',	},	//component by default of the form
        items:[{


fieldLabel: 'Название',
name: 'title',

},{


fieldLabel: 'Конт. лицо',

name: 'contractor',

},{


fieldLabel: 'Компания',
name: 'company',

},{


fieldLabel: 'Тип',
name: 'eventType',

},{


fieldLabel: 'Дата',
name: 'date',

},{


fieldLabel: 'Продолж.',
name: 'duration',

},{


fieldLabel: 'Описание',
name: 'info',

},{


fieldLabel: 'Статус',
name: 'eventStatus',

}
]  
       
}

var eventFormPanel= {

		xtype: 'panel',
        title: 'Просмотр события',        
        layout: 'fit',
        region: 'west',
		
			split: true,
			
		tbar: [                     
  
    
  '-',                      
  
],
		
		items: [
			eventForm
		]
        
    };