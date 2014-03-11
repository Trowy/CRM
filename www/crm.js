Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext', '/extjs');
Ext.require([
    'Ext.Msg',
	'Ext.panel.*'
]);

Ext.onReady(function(){
   
   var panel1 = Ext.create('Ext.panel.Panel', {
   
				border: true,
				xtype : 'panel',
				height: 100,
				region : 'north',				
				title:'Просмотр компаний',
				flex: 1,
				items   : [{
                xtype: 'button',
                text : 'My Button',
                margin:'75 0 0 125',
				handler: function() {
            alert('Привет мир!')
        }
            }]
			
   });
   
    var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Форма авторизации',
        width: 300,
        height:200,
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'login',
                labelAlign: 'left',
                cls: 'field-margin',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Пароль',
                name: 'password',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
              }],      
        // кнопки формы
        buttons: [{
            text: 'Оправить',
            handler: function() {
                // действие отмены
            }
        }, {
            text: 'Отмена',
            handler: function() {
                // действие отправки
                }
        }],
    });
   
   var leftPanel = Ext.create('Ext.panel.Panel', {
			xtype : 'panel',
            title: 'Просмотр',
            width: 300,			
            region: 'west',
			border: true,
items:[formPanel]			
        });
   
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
var grid = Ext.create('Ext.grid.Panel', {
    store: store,               // определили хранилище
           // Заголовок
    columns:col ,                // указали массив колонок
	listeners: {
	select:function(){
	function fnShowProps(obj, objName, n=0){
	var result = "";
	for (var i in obj) // обращение к свойствам объекта по индексу
	if(typeof(obj[i]) === 'object' && n<3)
		result += objName + "." + i + " = " + fnShowProps(obj[i], "",++n) + "<br />\n";
		else
		result += objName + "." + i + " = " + obj[i] + "<br />\n";
	return result;
}
		//alert(fnShowProps(this.getSelectionModel().getSelection()[0],"",0));
		//alert(this.getSelectionModel().getSelection()[0]['data']['price']);
		formPanel.getForm().setValues({
		login:this.getSelectionModel().getSelection()[0]['data']['price'],
		password:this.getSelectionModel().getSelection()[0]['data']['company']
		});
	}
	}
});
var grid2 = Ext.create('Ext.grid.Panel', {
    store: store,               // определили хранилище
          // Заголовок
    columns:col                 // указали массив колонок
});
var grid3 = Ext.create('Ext.grid.Panel', {
    store: store,               // определили хранилище
           // Заголовок
    columns:col                 // указали массив колонок
});
   
    var viewport = Ext.create('Ext.container.Viewport', {
        layout : 'border',
        items : [leftPanel,        
        {
            xtype : 'panel',
            region : 'center',            
			layout: {
                type: 'vbox',
                align: 'stretch'
            },
			items:[		
{ // Массив items содержит компоненты или их конфигурации
        xtype: 'tabpanel', // тип компонента: панель с закладками
		flex: 1,
		title:'Просмотр событий',
        items: [
           {
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'Просмотр событий1',
				
				items   : [grid]
				
			},
            {
				border: true,
				xtype : 'panel',
				height: 100,				
				region : 'south',
				title:'Просмотр событий2',
				
				items   : [grid3]
				
			}
        ]}			
			,{
				border: true,
				xtype : 'panel',
				height: 100,
				region : 'north',				
				title:'Просмотр компаний',
				flex: 1,
				tbar: [                     // тулбар (toolbar) в верхней части окна
        {text:'Первый'},      // массив кнопок. нетрудно догадаться,
                              // что text = текст кнопки
        {text:'Второй'},
        {text:'Третий'}
       ],
				items   : [grid2]
			}]
        }]
    });
});