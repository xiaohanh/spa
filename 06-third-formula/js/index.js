$(function(){

var MQ=MathQuill.getInterface(2);
var htmlElement = document.getElementById('aa');
var mm="";
var config = {
handlers: { edit: function(){ 
      var cc=mathField.latex(); 
      mm=cc;
} },
restrictMismatchedBrackets: true
};
var mathField = MQ.MathField(htmlElement, config);


$(".tt").click(function(){
	 var $formula = $('<p><span class="formula"></span></p>');
    
    $formula.find('.formula').html(mm);
    MQ.StaticMath($formula.find('.formula').get(0));
    $('.main').append($formula);
	
});





});
