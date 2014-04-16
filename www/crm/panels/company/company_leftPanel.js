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

},{


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

fieldLabel: 'Сотрудник',
name: 'Employee',

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
                       
  {text:'Написать письмо'},   
  {text:'Звонок'}
],
		
		items: [
			companyForm
		]
        
    };