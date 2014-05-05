var companyForm = Ext.create('Ext.form.Panel', {
		
		
		margin: '10 10 10 10',
		defaults:{xtype:'displayfield',labelAlign: 'left',	},	//component by default of the form
        items:[{


fieldLabel: 'Название',
name: 'name',


},{


fieldLabel: 'Информация',

name: 'info',

},{


fieldLabel: 'Сайт',
name: 'site',

},{


fieldLabel: 'Телефоны',
name: 'phones',

},{


fieldLabel: 'Эл. почта',
name: 'emails',

},{


fieldLabel: 'Skype',
name: 'skypes',

},
{

xtype:'hidden',

name: 'phones_hidden',

},{


xtype:'hidden',
name: 'emails_hidden',

},{

xtype:'hidden',

name: 'skypes_hidden',

},
{


fieldLabel: 'Город',
name: 'City',

},{


fieldLabel: 'Размер бизнеса',
name: 'BusinessScale',

},{


fieldLabel: 'Статус',
name: 'CompanyStatus',

},
{

fieldLabel: 'Сегмент',
name: 'Segment',

},
{


fieldLabel: 'Теги',
name: 'Tags',

}
]  
       
});

var companyFormPanel= {

		xtype: 'panel',
        title: 'Просмотр компании',        
        layout: 'fit',
        region: 'west',
		
			split: true,
			
		tbar: [                     
                       
  {text:'Написать письмо',iconCls: 'mail',handler:function(){create_email_window(companyForm.getForm().findField("emails_hidden").getValue().split(',')[0]);}},   
  {text:'Звонок',iconCls: 'skype',handler:function(){document.location = "skype:"+companyForm.getForm().findField("skypes_hidden").getValue().split(',')[0];}}
],
		
		items: [
			companyForm
		]
        
    };