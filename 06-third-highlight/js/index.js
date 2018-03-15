$(function(){
	
var editor = new Behave({
    textarea: $('.main textarea').get(0),
    replaceTab: true,
    softTabs: true,
    tabSize: 5,
    autoOpen: true,
    overwrite: true,
    autoStrip: true,
    autoIndent: true,
    fence: false
  });



$(".bb").click(function(){
		var $tt=$(".tt");
    	var $code = $('<div> <p class="javascript"></p></div>');
    if($tt.val()!=''){
    

       $code.find("p").html($tt.val());
      hljs.highlightBlock($code.find('p').get(0));
		$(".main").append($code);
    	
    }
	
	
});





});

