var PasswordBox=function(config){


   var $pwd=$('	<input type="password">'),
       $pwdText=$('<input type="text">'),
       $eyeImage=$('<div></div>'),
       $div=$('<div class="wd-password">密码：</div>');
       
       $div.append($pwd);
       $div.append($eyeImage);
       $div.append($pwdText);
      $(config.container).append($div);
       
       $pwd.change(function(e){
       	$pwdText.val($pwd.val());
       });
       
       $eyeImage.mouseout(function(){
       		$pwdText.css('z-index','-10');
       		
       });
       
       $eyeImage.mouseover(function(){
       	 $pwdText.css('z-index','10');
     
    });
       
       
       this.getPwd=function(){
       	return  $pwdText.val();
       };
    
   }    
       