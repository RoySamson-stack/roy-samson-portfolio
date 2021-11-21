

$(document).ready(function(){
 
  $('.loader').delay(1000).fadeOut(300,function(){
    setTimeout(function(){
      $('.loader').remove()
    } ,100);
});
const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
document.body.classList.toggle('dark');
});

$(".tile").hover(function(){
  $(".tile-content").show();
})


});

