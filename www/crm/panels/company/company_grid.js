var company_store = Ext.create('Ext.data.JsonStore', {
    fields: ['id', 'name', 'info', 'site', 'phones', 'emails', 'skypes', 
	{name: 'City', mapping: 'City.id'}, 
	{name: 'Segment', mapping: 'Segment.id'}, 
	{name: 'BusinessScale', mapping: 'BusinessScale.id'}, 
	{name: 'CompanyStatus', mapping: 'CompanyStatus.id'}, 
	{name: 'CompanyStatus', mapping: 'CompanyStatus.id'}, 
	{name: 'Employee', mapping: 'Employee.id'}, 
	{name: 'Tags', mapping: 'Tags.id'}, 
	{name: 'City_name', mapping: 'City.name'}, 
	{name: 'Segment_name', mapping: 'Segment.name'}, 
	{name: 'BusinessScale_name', mapping: 'BusinessScale.name'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.name'}, 
	{name: 'CompanyStatus_name', mapping: 'CompanyStatus.name'}, 	
	{name: 'Tags_name', mapping: 'Tags'},
],
    
  
  proxy:{
    type:'ajax',
    url:domen+'crm/companies',
    reader:{
         root:'data',					
			
        }
    }
	
});

var company_grid = Ext.create('Ext.ux.LiveSearchGridPanel', {
				
		store: company_store,
		flex: 1,
				
		listeners: {
itemclick: function(dv, record, item, index, e) {
leftPanel.getLayout().setActiveItem(2);
tab_event_panel.setActiveTab('cmpevt');		
var row = company_grid.getSelectionModel().getSelection()[0];
 
event_store4.load({params:{comp:row.get('id')}});
		event_store5.load({params:{comp:row.get('id')}});
		event_store6.load({params:{comp:row.get('id')}});
phones = "";
	(row.get('phones')+"").split(',').forEach(function(value){phones+="<a href='skype:"+value+"'>"+value+"</a><br>"});
	skypes = "";
	(row.get('skypes')+"").split(',').forEach(function(value){skypes+="<a href='skype:"+value+"'>"+value+"</a><br>"});
	emails = "";
	(row.get('emails')+"").split(',').forEach(function(value){emails+="<a href='#' onclick='create_email_window(\""+value+"\");return false;'>"+value+"</a><br>"});
	tags = "";
	row.get('Tags_name').forEach(function(value){tags += value.name+"<br>"});
companyForm.getForm().setValues({
	name:row.get('name'),
	info:row.get('info'),
	site:'<a target="_blink" href="'+row.get('site')+'">'+row.get('site')+'</a>',
	phones:phones,
	emails:emails,
	skypes:skypes,
	phones_hidden:row.get('phones'),
	emails_hidden:row.get('emails'),
	skypes_hidden:row.get('skypes'),
	City:row.get('City_name'),
	BusinessScale:row.get('BusinessScale_name'),
	CompanyStatus:row.get('CompanyStatus_name'),
	Segment:row.get('Segment_name'),
	Tags:tags,
})
}},
		
		columns: [
    
   
	{
      text: "Название",
      dataIndex: 'name',      width:150 
    },
	{
      text: "Город",       
	  dataIndex: 'City_name',width:150 
    },
	{
      text: "Статус",
      dataIndex: 'CompanyStatus_name',  width:150     
    },
	{
      text: "Сегмент",
      dataIndex: 'Segment_name',      width:150 
    },
	{
      text: "Размер бизнеса",
      dataIndex: 'BusinessScale_name',     width:'100%'  
    }
	
	]
});