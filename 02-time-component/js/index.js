$(function(){

var $btn=timerButton({
        "container":"div.main",
        "title":"同意",
        "tlength":9,
        "enable":false,
});
 
 $btn.on('timer-button-click',function(){
          alert("已同意");
 });

var $bt = timerButton({
		'container':"div.main",
		'title':"发送短信",
		'tlength':9,
		'enable':true
	});


$bt.on('timer-button-click',function(){
		alert('短信已发送');
	});


});