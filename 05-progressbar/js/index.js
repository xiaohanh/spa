      $(document).ready(function(){
              var value = 0;
          
              function increment( ) {
                  value += 1;
                  $("#prog").css("width",value + "%").text(value + "%");
                  if (value>=0 && value<100) {
                      $("#prog").addClass("progress-bar-info");
                  }
                  
                  else{
                      setTimeout(reset,3000);
                      return;

                  }

                  st = setTimeout(increment,100);
              }
              
              //进度条开始
               $("#start").click(function () {
               
                    increment();       
              });
              
              //进度条暂停
              $("#pause").click(function () {
                 
                      $("#prog").stop();
                      clearTimeout(st);         
              });
              
           //进度条重置
           $("#reset").click(function(){
           	  value = 0 
             $("#prog").removeClass("progress-bar-info").css("width","0%");
           });
        });
