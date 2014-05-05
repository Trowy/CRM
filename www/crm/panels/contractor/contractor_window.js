
 function create_cnt_form(){
 
 return cnt_form = Ext.create('Ext.form.Panel',{
				p:1, 
				e:1, 
				s:1, 
				url: domen+'crm/contractors',
	border:false, // <-- removing the border of the form
	defaults:{xtype:'textfield'	},	//component by default of the form
	items:[
	{
      fieldLabel: "Фамилия",
      name: 'last_name',      
    },
	{
      fieldLabel: "Имя",
      name: 'first_name',      
    },
	{
      fieldLabel: "Отчество",
      name: 'middle_name',      
   
	},
	{
      fieldLabel: "Описание",
      name: 'info',      
			xtype: 'textarea'
    },phones_container = Ext.create('Ext.form.FieldContainer',{
        
				
				defaults:{xtype:'textfield'	},
				 items:[
			{
      fieldLabel: "Телефон",
      name: 'phone_0',      
			
    },
	
				 ], }),Ext.create('Ext.Button', {
				 align :'right',
        text: '+',
        handler: function () {
           var tf = Ext.create('Ext.form.field.Text', {
                    name: 'phone_'+(cnt_form.p++),
                    fieldLabel: 'Доп. телефон',
                });
                phones_container.add(tf);
        },
        
    }),skypes_container = Ext.create('Ext.form.FieldContainer',{
        
				
				defaults:{xtype:'textfield'	},
				 items:[
			{
      fieldLabel: "Skype",
      name: 'skype_0',      
			
    },
	
				 ], }),Ext.create('Ext.Button', {
				 align :'right',
        text: '+',
        handler: function () {
           var tf = Ext.create('Ext.form.field.Text', {
                    name: 'skype_'+(cnt_form.s++),
                    fieldLabel: 'Доп. skype',
                });
                skypes_container.add(tf);
        },
        
    }),emails_container = Ext.create('Ext.form.FieldContainer',{
        
				name: 'emails',  
				defaults:{xtype:'textfield'	},
				 items:[
			{
      fieldLabel: "Эл. почта",
      name: 'email_0',      
			
    },
	
				 ], }),Ext.create('Ext.Button', {
				 align :'right',
        text: '+',
        handler: function () {
           var tf = Ext.create('Ext.form.field.Text', {
                    name: 'email_'+(cnt_form.e++),
                    fieldLabel: 'Доп. эл. почта',
                });
                emails_container.add(tf);
        },
        
    }),{
  xtype:'hidden',
   name:'action'
},{
  xtype:'hidden',
   name:'id'
},

	] ,
add_email:function(email){
				var tf = Ext.create('Ext.form.field.Text', {
                    name: 'email_'+(cnt_form.e++),
                    fieldLabel: 'Доп. эл. почта',
										value: email
                });
                emails_container.add(tf);	
				},
				add_phone:function(phone){
				var tf = Ext.create('Ext.form.field.Text', {
                    name: 'phone_'+(cnt_form.p++),
                    fieldLabel: 'Доп. телефон',
										value: phone
                });
                phones_container.add(tf);	
				},
				add_skype:function(skype){
				var tf = Ext.create('Ext.form.field.Text', {
                    name: 'skype_'+(cnt_form.s++),
                    fieldLabel: 'Доп. skype',
										value: skype
                });
                skypes_container.add(tf);	
				},

}
				
					 );
 
 
 }
 

 function create_cnt_window(){
 return win = Ext.create('Ext.window.Window',{
 
	resizable: false,
				iconCls: 'contractor', 
    title: '...', 
	width:300, 
	
	bodyStyle:'background-color:#fff;padding: 10px', 
	
	items: [cnt_form = create_cnt_form()], //assigning the form
	buttonAlign: 'right', //buttons aligned to the right
	buttons:[{text:'Сохранить',
	handler: function(){

				
				cnt_form.submit({
					waitMsg: 'Сохранение...',
					
					success: function(f,a){
						cnt_window.close();
						refresh_cnt();
					},
					
					failure: function(f,a){
						if (a.failureType === Ext.form.Action.CONNECT_FAILURE){
							Ext.MessageBox.show({
								title: 'Ошибка',
								msg: 'Ошибка подключения к серверу. Проверьте интернет соединение.',
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});
						}
					}
				});
	}
	},{text:'Отмена',handler:function(){cnt_window.close();}}] 
          
 
 });
 }