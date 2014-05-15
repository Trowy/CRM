var contractor_store = Ext.create('Ext.data.JsonStore',
				{
					fields: [
						'id',
						'first_name',
						'middle_name',
						'last_name',
						'fio',
						'info',
						'phones',
						'emails',
						'skypes'
					],
					proxy: {
						type: 'ajax',
						url: domen + 'crm/contractors',
						reader: {
							root: 'data'
						}
					}
				});

var contractor_grid = Ext.create('Ext.ux.LiveSearchGridPanel',
				{
					flex: 1,
					listeners: {
						itemclick: function(dv, record, item, index, e) {
							leftPanel.getLayout().setActiveItem(1);
							tab_event_panel.setActiveTab('cntevt');
							var row = contractor_grid.getSelectionModel().getSelection()[0];
							event_store7.load({
								params: {
									cnt: row.get('id')
								}
							});
							event_store8.load({
								params: {
									cnt: row.get('id')
								}
							});
							event_store9.load({
								params: {
									cnt: row.get('id')
								}
							});
							phones = "";
							(row.get('phones') + "").split(',').forEach(function(value) {
								phones += "<a href='skype:" + value + "'>" + value + "</a><br>";
							});
							skypes = "";
							(row.get('skypes') + "").split(',').forEach(function(value) {
								skypes += "<a href='skype:" + value + "'>" + value + "</a><br>";
							});
							emails = "";
							(row.get('emails') + "").split(',').forEach(function(value) {
								emails += "<a href='#' onclick='create_email_window(\"" + value + "\");return false;'>" + value + "</a><br>";
							});
							
							contractorForm.getForm().setValues({
								last_name: row.get('last_name'),
								first_name: row.get('first_name'),
								middle_name: row.get('middle_name'),
								info: row.get('info'),
								phones: phones,
								emails: emails,
								skypes: skypes,
								phones_hidden: row.get('phones'),
								emails_hidden: row.get('emails'),
								skypes_hidden: row.get('skypes')
							});
						}
					},
					store: contractor_store,
					columns: [
						{
							text: "Фамилия",
							dataIndex: 'last_name',
							width: 150
						},
						{
							text: "Имя",
							dataIndex: 'first_name',
							width: 150
						},
						{
							text: "Отчество",
							dataIndex: 'middle_name',
							width: 150
						},
						{
							text: "Телефон",
							dataIndex: 'phones',
							width: 150
						},
						{
							text: "Эл. почта",
							dataIndex: 'emails',
							width: 150
						},
						{
							text: "Скайп",
							dataIndex: 'skypes',
							width: '100%'
						}
					]
				});