	$(document).ready(function() {
	// firstName can't be blank
	$('#contact_firstName').on('input', function() {
		var input=$(this);
		var re = /...+/;
		var is_firstName=re.test(input.val());
		if(is_firstName){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// lastName can't be blank
	$('#contact_lastName').on('input', function() {
		var input=$(this);
		var re = /...+/;
		var is_lastName=re.test(input.val());
		if(is_lastName){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// email must be an email
	$('#contact_email').on('input', function() {
		var input=$(this);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());
		if(is_email){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// birthdate must be in date format
	$('#contact_birthdate').on('change', function() {
		var input=$(this);
		var re = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
		var is_birthdate=re.test(input.val());
		if(is_birthdate){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// gender can't be blank
	$('#contact_gender').on('change', function() {
		var select=$(this);
		var is_gender=select.val();
		if(is_gender){select.removeClass("invalid").addClass("valid");}
		else{select.removeClass("valid").addClass("invalid");}
	});
	// phone must entered
	$('#contact_phone').on('input', function() {
		var input=$(this);
		var re = /...+/;
		var is_phone=re.test(input.val());
		if(is_phone){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// country has to be selected
	$('#contact_country').on('change', function() {
		var select=$(this);
		var is_country=select.val();
		if(is_country){select.removeClass("invalid").addClass("valid");}
		else{select.removeClass("valid").addClass("invalid");}
	});
	// postalCode can't be blank
	$('#contact_postalCode').on('input', function() {
		var input=$(this);
		var re = /...+/;
		var is_postalCode=re.test(input.val());
		if(is_postalCode){input.removeClass("invalid").addClass("valid");}
		else{input.removeClass("valid").addClass("invalid");}
	});
	// After Form Submitted Validation
	$("#next").click(function(event){
		var form_data=$('#question1 :input').serializeArray();
		var error_free=true;
		for (var input in form_data){
			var element=$("#contact_"+form_data[input]['name']);
			var valid=element.hasClass("valid");
			var error_element=$("span", element.parent());
			if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
			else{error_element.removeClass("error_show").addClass("error");}
		}
		if (!error_free){
			event.preventDefault(); 
		}
		else {
			show_div();
		}
	});
	});
	
	var q = 1
	var tot = 5
	var pause = 250

	  $(document).ready(function() {
		$(".question").hide();
		$("#previous").hide();
		$("#submit").hide();
		$("#question1").show();
		$("#why1").show();
		
		$("#previous").click(function() {
		if((q - 1) == 1) {
		  $("#previous").hide();
		} else if ((q - 1) == tot) {
		  $("#next").delay(pause).fadeIn();
		  $("#submit").hide();
		}
		$("#question" + q).hide();
		$("#why" + q).hide();
		q = q - 1;
		$("#question" + q).delay(pause).fadeIn();
		$("#why" + q).delay(pause).fadeIn();
		});
	  });
	  
		function show_div() {
			  $("#question" + q).hide();
			  $("#why" + q).hide();
			  q = q + 1;
			  if(!$("#previous").is(":visible")) {
			  $("#previous").delay(pause).fadeIn();
			  }
			  if(q > tot) {
				$("#next").hide();
				$("#submit").delay(pause).fadeIn();
				$("#question" + q).delay(pause).fadeIn();
				$("#why" + q).delay(pause).fadeIn();
			  } else {
				$("#question" + q).delay(pause).fadeIn();
				$("#why" + q).delay(pause).fadeIn();
			  }
		}