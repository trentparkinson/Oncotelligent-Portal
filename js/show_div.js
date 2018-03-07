var q = 1
var tot = 5
var pause = 250

  $(document).ready(function() {
    $(".question").hide();
	$("#previous").hide();
	$("#submit").hide();
    $("#question1").show();
	$("#why1").show();
  
    $("#next").click(function() {
    
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
    });
	
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
