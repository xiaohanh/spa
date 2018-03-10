$(function(){
$('#pw').on('input',function(){
    $('.pwDisplay').val($('#pw').val());
});

$('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','images/eye.png');
    $('.pwDisplay').css('display','inline-block');
});

$('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','images/eye-close.png');
    $('.pwDisplay').css('display','none');
});
});
