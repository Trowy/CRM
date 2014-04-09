var employee_id = -1;
var employee_admin = false;

Ext.onReady(function(){
	
	if(getCookie("employee_id")!="undefined"){
		id = getCookie("employee_id");
	}else{
		id = 0;
	}
	
	Ext.Ajax.request({
        method: 'GET',
        url: domen+'crm/auth',
				params: { employee_id: id },		
        success: function( result, request ){
					var result_array = Ext.decode(result.responseText);
             if(result_array.success){
							 
							 employee_id = result_array.employee_id;
							 employee_admin = result_array.employee_role==='S';							 	 
							 
						 }else{
							 auth_window.show();
						 }
        }
    });
	
	

});