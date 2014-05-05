var contractorForm = Ext.create('Ext.form.Panel', {
		
		xtype: 'panel',
		margin: '10 10 10 10',
		defaults:{xtype:'displayfield',labelAlign: 'left',	},	//component by default of the form
items:[{

fieldLabel: 'Фамилия',
name: 'last_name',

edit:false     
},{

fieldLabel: 'Имя',
name: 'first_name',

},{

fieldLabel: 'Отчетство',
name: 'middle_name',

},{

fieldLabel: 'Информация',
name: 'info',

},{

fieldLabel: 'Телефон',
name: 'phones',

},{

fieldLabel: 'Элек. почта',
name: 'emails',

},{

fieldLabel: 'Skype',
name: 'skypes',

}
]  
       
});

var contractorFormPanel= {

		xtype: 'panel',
        title: 'Просмотр контактного лица',        
        layout: 'fit',
        region: 'west',
		
			split: true,
			
		tbar: [                     
  
                   
  {text:'Написать письмо',iconCls: 'mail',handler:function(){create_email_window(contractorForm.getForm().findField("emails").getValue().split('<br>')[0]);}},   
  {text:'Звонок',iconCls: 'skype',handler:function(){document.location = "skype:"+contractorForm.getForm().findField("skypes").getValue().split('<br>')[0];}}
],
		
		items: [
			contractorForm
		]
        
    };