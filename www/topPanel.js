			var myData = [
    ['Microsoft Corporation',25.84,-0.14,-0.564,'1980-05-06'],
    ['Pfizer Inc',27.96,0.466,1.475,'1980-05-06'],
    ['The Coca-Cola Company',45.7,0.267,0.578,'1980-05-06']
];

var fields = [
       {name: 'company'},
       {name: 'price',
       type: 'float'}  // тип данных
    ];
	var col =  [
        {
            text: 'Company',       // заголовок колонки
            dataIndex: 'company'  // индекс поля из хранилища (fields)
        },{
            text: 'Price',
            dataIndex: 'price'
        }
    ];
	var store = Ext.create('Ext.data.JsonStore', {
    fields: fields,  // указали массив индексов полей.
    
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:'test-data/company.json',
    reader:{
         root:'users'
        }
    }
	
});

var topPanel = {
flex: 1,
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',				
				layout: 'fit',
				items   : [{
				
				 
        xtype: 'tabpanel', 
		flex: 1,
		
        items: [
           {
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'События',
				layout: 'fit',
				items   : [
				{ xtype: 'tabpanel', 
		flex: 1,
		
        items: [
           {border: true,title:'События дня',
				xtype : 'grid',
				flex: 1,

    store: store,               // определили хранилище
           // Заголовок
    columns:col                },{
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'События недели',
				layout: 'fit',
				items   : []
				
			}
			,{
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'События',
				layout: 'fit',
				items   : []
				
			}]}
				
				
				]
				
			},{
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'События контактного лица',
				layout: 'fit',
				items   : []
				
			},{
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'События компании',
				layout: 'fit',
				items   : []
				
			},
            
        ],
		tbar: [                     
  
    {text:'Добавить'},
   {text:'Изменить'},
  {text:'Удалить'},
  '-',
  {text:'Обновить'}
]
		}
				
				]
				
			};
			
