var clientForm = {
		
		xtype: 'panel',
		margin: '10 10 10 10',
		
        items:[{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Фамилия',
name: 'login',
labelAlign: 'left',
edit:false     
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Имя',
readOnly: true,
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Отчетство',
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Менеджер',
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test<br>test2',
fieldLabel: 'Телефон',
name: 'login',
labelAlign: 'left'      
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Электронная почта',
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Skype',
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Icq',
name: 'login',
labelAlign: 'left'       
},{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Примечание',
name: 'login',
labelAlign: 'left'       
},
{
xtype: 'displayfield',
value: 'test',
fieldLabel: 'Компании',
name: 'login',
labelAlign: 'left'       
}
]  
       
}

var clientFormPanel= {

		xtype: 'panel',
        title: 'Просмотр контактного лица',        
        layout: 'fit',
        
		tbar: [                     
  
    {text:'Изменить'}
    
                            
  ,
  
  {text:'Удалить'},
  '-',                      
  {text:'Написать почту'},   
  {text:'Позмонить по скайпу'}
],
		
		items: [
			clientForm
		]
        
    };