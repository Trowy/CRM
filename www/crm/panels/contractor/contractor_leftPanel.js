var contractorForm = Ext.create('Ext.form.Panel', {
	xtype: 'panel',
	margin: '10 10 10 10',
	defaults: {
		xtype: 'displayfield',
		labelAlign: 'left'
	},
	items: [{
			fieldLabel: 'Фамилия',
			name: 'last_name',
			edit: false
		}, {
			fieldLabel: 'Имя',
			name: 'first_name'
		}, {
			fieldLabel: 'Отчетство',
			name: 'middle_name'
		}, {
			fieldLabel: 'Информация',
			name: 'info'
		}, {
			fieldLabel: 'Телефон',
			name: 'phones'
		}, {
			fieldLabel: 'Элек. почта',
			name: 'emails'
		}, {
			fieldLabel: 'Skype',
			name: 'skypes'
		}, {
			xtype: 'hidden',
			name: 'phones_hidden'
		}, {
			xtype: 'hidden',
			name: 'emails_hidden'
		}, {
			xtype: 'hidden',
			name: 'skypes_hidden'
		}
	]

});

var contractorFormPanel = {
	xtype: 'panel',
	title: 'Просмотр контактного лица',
	layout: 'fit',
	region: 'west',
	split: true,
	tbar: [
		{
			text: 'Написать письмо',
			iconCls: 'mail',
			handler: function() {
				create_email_window(contractorForm.getForm().findField("emails_hidden").getValue().split(',')[0]);
			}
		},
		{
			text: 'Звонок',
			iconCls: 'skype',
			handler: function() {
				document.location = "skype:" + contractorForm.getForm().findField("skypes_hidden").getValue().split(',')[0];
			}
		}
	],
	items: [
		contractorForm
	]

};