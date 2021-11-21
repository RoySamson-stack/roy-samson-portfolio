

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

$(".tile").moouseenter(function(){
  $(".tile-content").show();
})
$(".tile").mouseleave(function(){
  $(".tile-content").hide(); 
 });

});

