
	var aa=document.getElementById('aa');	
	var slider=document.getElementById('scaler');

	window.onload=function(){
	     var scale=slider.value;
	     
	    
	slider.onmousemove=function(){
		scale=slider.value;
		draw(scale);
	}
  }
 
 function draw(scale){
 	aa.value=scale;
 }
	
	

