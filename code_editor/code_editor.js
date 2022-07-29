$( function() {
	$("#control-head").controlgroup();
	$("#html-radio").checkboxradio().click();
	$("#css-radio").checkboxradio().click();
	$("#jscript-radio").checkboxradio().click();
	$("#live-radio").checkboxradio().click();
	$("#OnInput-radio").checkboxradio().click();

var html_state = 1;
var css_state = 1;
var jscript_state = 1;
var live_state = 1;
var inputChange = true;

var _html = document.getElementById("html");

function sizeSetShow(varState) {
    var innerWidth = window.innerWidth-50;
    var AWindow = html_state + css_state + jscript_state + live_state - varState;
    var finalWidth = innerWidth/AWindow+"px";
    $("#html").css("width",finalWidth);
    $("#css").css("width",finalWidth);
    $("#jscript").css("width",finalWidth);
    $("#live").css("width",finalWidth);

}

	 $("#html-radio").click(function(){
		 if( html_state == 1) {
			 			$("#html").hide(1000,sizeSetShow(1));
						html_state = 0;
		 } else {
			$("#html").show(1000,sizeSetShow(-1));
			html_state = 1;
			 	}
		 });
		 
		 	 $("#css-radio").click(function(){
		 if( css_state == 1) {
			 			$("#css").hide(1000,sizeSetShow(1));
						css_state = 0;
		 } else {
			$("#css").show(1000,sizeSetShow(-1));
			css_state = 1;
			 	}
		 });
		 
		 	 $("#jscript-radio").click(function(){
		 if( jscript_state == 1) {
			 			$("#jscript").hide(1000,sizeSetShow(1));
						jscript_state = 0;
		 } else {
			$("#jscript").show(1000,sizeSetShow(-1));
			jscript_state = 1;
			 	}
		 });
		 
		 	 $("#live-radio").click(function(){
		 if( live_state == 1) {
			 			$("#live").hide(1000,sizeSetShow(1));
						live_state = 0;
		 } else {
			$("#live").show(1000,sizeSetShow(-1));
			live_state = 0;
			 	}
		 });
		 
		 
		 		 	 $("#OnInput-radio").click(function(){
		 if( inputChange == true) {
				inputChange = false;
		 } else {
				inputChange = true;

			 	}
		 });
		 
		 

		 
 
	$("#html,#css,#jscript").on("input", function(){
		 if( inputChange == true) {
				var iframe_html = $("#html").val();
				var iframe_css = $("#css").val();
				var iframe_jscript = $("#jscript").val();
		
 $("#iframe").attr("srcdoc", '<html><head><link rel="stylesheet" href="jquery/jquery-ui.css"></link><script src="jquery/jquery.js"></script><script src="jquery/jquery-ui.js"></script><style>' + iframe_css + "</style><script>$(document).ready(function(){" + iframe_jscript + "});</script></head><body>" + iframe_html + "</body></html>" );
		 }  else {

	$("#submit").click(function(){
				var iframe_html = $("#html").val();
				var iframe_css = $("#css").val();
				var iframe_jscript = $("#jscript").val();
		
 $("#iframe").attr("srcdoc", '<html><head><link rel="stylesheet" href="jquery/jquery-ui.css"></link><script src="jquery/jquery.js"></script><script src="jquery/jquery-ui.js"></script><style>' + iframe_css + "</style><script>$(document).ready(function(){" + iframe_jscript + "});</script></head><body>" + iframe_html + "</body></html>" );
		});
			 	}
		 
		});





		
});
