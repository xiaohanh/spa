

    
   var width = document.getElementById("rectangle-width"); 
   var height =document.getElementById('rectangle-height');
   var calc = document.getElementById('rectangle-calc');
   var perimeter =document.getElementById('rectangle-perimeter');
   var area = document.getElementById('rectangle-area');
   var aa=document.getElementById('aa');
   var bb=document.getElementById('bb');
   width.onblur = function(){

         if(width.value == ''){
                    aa.innerHTML = "宽度不能为空!";
                                       
                       }
                          
                }
    height.onblur = function(){
       if(height.value ==''){
           bb.innerHTML = "高度不能为空!";
              
   }

 } 



  calc.onclick=function(){
      var wid =width.value;
          var hei =height.value;
              
              perimeter.value=wid * 2 +hei * 2;
                  area.value = wid * hei ;
                      
                      
}


