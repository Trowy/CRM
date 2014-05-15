var employee_store = Ext.create('Ext.data.JsonStore', {
	fields: ['id', 'login', 'password', 'first_name', 'middle_name', 'last_name', 'fio', 'role', 'email'],
	proxy: {
		type: 'ajax',
		url: domen + 'crm/employees',
		reader: {
			root: 'data',
			idProperty: 'id'
		}
	}

});

var employee_grid = Ext.create('Ext.grid.Panel', {
	flex: 1,
	store: employee_store,
	columns: [
		{
			text: "Логин",
			dataIndex: 'login', 
			width: 100
		}, {
			text: "Фамилия",
			dataIndex: 'last_name', 
			width: 150
		}, {
			text: "Имя",
			dataIndex: 'first_name',
			width: 130
		}, {
			text: "Отчество",
			dataIndex: 'middle_name',
			width: 150
		}, {
			text: "Роль",
			dataIndex: 'role', 
			width: 80
		}, {
			text: "Эл. почта",
			dataIndex: 'email', 
			width: '100%'
		}
	]
});