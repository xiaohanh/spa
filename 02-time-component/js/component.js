  var timerButton=function(config){
            
		var $btn=$('<input id="btn" type="button">');
    var t=config.tlength;
    var enabledd=config.enable;
    var title=config.title;
    var con=config.container;
     var timer;
    $(con).append($btn);

     if(enabledd) {
         enableBtn();
      } else {
         disableBtn();
     }
      
      function disableBtn(){
      enabledd=false;
          $btn.attr('disabled','disabled').val(title+"("+t+'s)');
         timer=window.setInterval(function(){
           t--;
          if(t===0){
         enableBtn();
    
      }
      else{
       $btn.val(title+'('+t+'s)');
      }
    },1000);
		}

      
     function enableBtn(){
      enabledd=true;
      //确保每次点击时间都重新开始
     t=config.tlength;
      clearInterval(timer);
         $btn.val(title); 
        $btn.removeAttr('disabled');

     }


    $btn.click(function(){
    $btn.trigger('timer-button-click');
    if(config.enable) disableBtn();
         });

    return $btn;
  };
