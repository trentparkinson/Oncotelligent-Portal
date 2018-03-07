$(document).ready(function(){
	var date_input=$('input[name="birthdate"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	date_input.datepicker({
		format: 'mm/dd/yyyy',
		container: container,
		startDate: "01/01/1900",
		endDate: "12/31/2099",
		autoclose: true,
		todayHighlight: true
	})
})