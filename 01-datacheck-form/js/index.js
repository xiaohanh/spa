   var width = document.getElementById("rectangle-width"); 
   var height =document.getElementById('rectangle-height');
   var calc = document.getElementById('rectangle-calc');
   var perimeter =document.getElementById('rectangle-perimeter');
   var area = document.getElementById('rectangle-area');
   var aa=document.getElementById('aa');
   var bb=document.getElementById('bb');
function ww(){

         if(width.value == ''){
                    aa.innerHTML = "宽度不能为空!";
                      return false;                  
                       }
         
         else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(width.value)) {
              aa.innerHTML = "宽度必须为数值!";
               return false;
            }
    
        else if(width.value  < 0) {
           aa.innerHTML = "宽度必须大于0!";
            return false;
          }

         else{
           aa.innerHTML = '';
             return true;
         }          
       }
    function hh(){
       if(height.value ==''){
           bb.innerHTML = "高度不能为空!";
            return false;
        }
     
       else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(height.value)) {
              bb.innerHTML = "高度必须为数值!";
               return false;
            }
    
        else if(height.value  < 0) {
           bb.innerHTML = "高度必须大于0!";
            return false;
          }
       else{
         bb.innerHTML = '';
           return true;
       }

 } 



  calc.onclick=function(){
      var x =width.value;
      var y =height.value;
         
      var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
      var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

      var max = Math.max(lenX, lenY);
       if(!ww() || !hh()) return;
     perimeter.value= (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
    area.value=  (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
            
  } 
  
  

