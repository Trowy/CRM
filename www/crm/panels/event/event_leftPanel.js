var eventForm = Ext.create('Ext.form.Panel', {
	margin: '10 10 10 10',
	defaults: {
		xtype: 'displayfield',
		labelAlign: 'left'
	},
	items: [{
			fieldLabel: 'Название',
			name: 'title'
		}, {
			fieldLabel: 'Конт. лицо',
			name: 'contractor'
		}, {
			fieldLabel: 'Компания',
			name: 'company'
		}, {
			fieldLabel: 'Тип',
			name: 'eventType'
		}, {
			fieldLabel: 'Дата',
			name: 'date'
		}, {
			fieldLabel: 'Продолж.',
			name: 'duration'
		}, {
			fieldLabel: 'Описание',
			name: 'info'
		}, {
			fieldLabel: 'Статус',
			name: 'eventStatus'
		}
		, {
			fieldLabel: 'Прикрепление',
			name: 'attachment'
		}
	]

});

var eventFormPanel = {
	xtype: 'panel',
	title: 'Просмотр события',
	layout: 'fit',
	region: 'west',
	split: true,
	tbar: [
		'-'
	],
	items: [
		eventForm
	]

};