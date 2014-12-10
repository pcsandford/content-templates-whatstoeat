$(document).ready(function(){

//heart animation 

$('.heartArea').on('click',function(){
  $(this).toggleClass('liked');
})

//card flip animation

$('.card').on('click',function(){
	console.log('test');
  $(this).toggleClass('flipped');
});

});//close document ready