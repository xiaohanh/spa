
   var width = document.getElementById("rectangle-width"); 
   var height =document.getElementById('rectangle-height');
   var calc = document.getElementById('rectangle-calc');
   var perimeter =document.getElementById('rectangle-perimeter');
   var area = document.getElementById('rectangle-area');
   var aa=document.getElementById('aa');
   var bb=document.getElementById('bb');
 


    calc.onclick= function (){
 

      var x =width.value;
      var y =height.value;
         
      var lenX = (x.split('.').length === 2) ? x.split('.')[1].length : 0;
      var lenY = (y.split('.').length === 2) ? y.split('.')[1].length : 0;

      var max = Math.max(lenX, lenY);
        

  if(aa.content=='√'&& bb.content == "√"){
    perimeter.value= (x * (10 ** max) + y * (10 ** max)) * 2 / (10 ** max);
    area.value=  (x * (10 ** max)) * (y * (10 ** max)) / (10 ** (2 * max));
     
  } 
     
  }


//H5校验
  $('.rectangle form').submit(function(e) {
    e.preventDefault();         // 阻止表单提交


 
  });
  
    
