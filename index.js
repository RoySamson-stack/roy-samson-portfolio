$(document).ready(function(){
  $(".main").delay(7000);
  $('#loading_wrap').delay(1000).fadeOut(300,function(){
    setTimeout(function(){
      $('#loading_wrap').remove()
    } ,100);
});
});