

$(document).ready(function(){
 
  $('#loading_wrap').delay(1000).fadeOut(300,function(){
    setTimeout(function(){
      $('#loading_wrap').remove()
    } ,100);
});
const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
document.body.classList.toggle('dark');
});
});

