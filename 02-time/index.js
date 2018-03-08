
window.onload= function (){
      interId = window.setInterval(minusNumber, 1000);
        
}
  var i=10;
    var time=document.getElementById('timer');
    function minusNumber(){
          i--;
              if(i==0)
              {
                      
                      time.disabled=false;
                            time.value="同意";
                                  window.clearInterval(interId);
                                      
              }
                  else
                  {
                          time.value="同意"+"("+i+"秒"+")";
                              
                  }
                    
    } 
 
time.onclick=function(){
    alert("就知道你会同意的！");
     
}
