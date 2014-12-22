$(document).ready(function(){

//google sheets

// var sheet = document.querySelector('#sheet');

// sheet.addEventListener('google-sheet-data', function(e) {
//   switch (e.detail.type) {
//     case 'rows':
//       document.querySelector('#rows').model = this;
//     break;
//     default:
//     break;
//   }
// });

// sheet.addEventListener('core-error', function(e) {
//   alert(e.detail.response);
// });

//google maps

var gMap = document.querySelector('google-map');
  gMap.addEventListener('api-load', function(e) {
    document.querySelector('google-map-directions').map = this.map;
  });



  
//heart animation 

$('.heartArea').on('click',function(){
  $(this).toggleClass('liked');
})

//card flip animation

$('.card1').data('flip', false);

$('.card1 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "101 Portland Street, Toronto";
  
  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);
	
  
  $('.card1 .imageArea').addClass('touched');

	setTimeout(function() {
    $('.card1').toggleClass('flipped');
  	$('.card1').data('flip', true);
  	$('.card1').find('.heartArea').css('opacity','0');
  }, 600);


  	setTimeout(function() {
      			$('.card1').toggleClass('flipped');
      			$('.card1').data('flip', false);
      			$('.card1').find('.heartArea').delay(1000).css('opacity','1');
            $('.card1 .imageArea').removeClass('touched');
			}, 10000);	
});


//card2 flip animation

$('.card2').data('flip', false);

$('.card2 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "535 Queen Street West, Toronto";
  
  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);


	$('.card2 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card2').toggleClass('flipped');
    $('.card2').data('flip', true);
    $('.card2').find('.heartArea').css('opacity','0');
  }, 600);

  	setTimeout(function() {
      			$('.card2').toggleClass('flipped');
      			$('.card2').data('flip', false);
      			$('.card2').find('.heartArea').delay(1000).css('opacity','1');
            $('.card2 .imageArea').removeClass('touched');
			}, 10000);	
});

//card3 flip animation

$('.card3').data('flip', false);

$('.card3 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "507 Queen Street West, Toronto";
  
  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);


    $('.card3 .imageArea').addClass('touched');

    setTimeout(function() {
      $('.card3').toggleClass('flipped');
      $('.card3').data('flip', true);
      $('.card3').find('.heartArea').css('opacity','0');
    }, 600);

  	setTimeout(function() {
      			$('.card3').toggleClass('flipped');
      			$('.card3').data('flip', false);
      			$('.card3').find('.heartArea').delay(1000).css('opacity','1');
            $('.card3 .imageArea').removeClass('touched');
			}, 10000);	
});

//card4 flip animation

$('.card4').data('flip', false);

$('.card4 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "152 Spadina Avenue, Toronto";

  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);
    
    $('.card4 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card4').toggleClass('flipped');
    $('.card4').data('flip', true);
    $('.card4').find('.heartArea').css('opacity','0');
  }, 600);

  	setTimeout(function() {
      			$('.card4').toggleClass('flipped');
      			$('.card4').data('flip', false);
      			$('.card4').find('.heartArea').delay(1000).css('opacity','1');
            $('.card4 .imageArea').removeClass('touched');
			}, 10000);	
});

//card5 flip animation

$('.card5').data('flip', false);

$('.card5 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "414 Queen Street West, Toronto";

  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);

	$('.card5 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card5').toggleClass('flipped');
    $('.card5').data('flip', true);
    $('.card5').find('.heartArea').css('opacity','0');
  }, 600);

  	setTimeout(function() {
      			$('.card5').toggleClass('flipped');
      			$('.card5').data('flip', false);
      			$('.card5').find('.heartArea').delay(1000).css('opacity','1');
            $('.card5 .imageArea').removeClass('touched');
			}, 10000);	
});

//card6 flip animation

$('.card6').data('flip', false);

$('.card6 .imageArea').on('click',function(){

	document.querySelector('google-map-directions').endAddress = "212 Spadina Avenue, Toronto";
  
  setTimeout(function() {
  document.querySelector('google-map').latitude= 43.6366829;
  document.querySelector('google-map').longitude= -79.4001831;
  },8000);

	  $('.card6 .imageArea').addClass('touched');

    setTimeout(function() {
      $('.card6').toggleClass('flipped');
      $('.card6').data('flip', true);
      $('.card6').find('.heartArea').css('opacity','0');
    }, 600);

  	setTimeout(function() {
      			$('.card6').toggleClass('flipped');
      			$('.card6').data('flip', false);
      			$('.card6').find('.heartArea').delay(1000).css('opacity','1');
            $('.card6 .imageArea').removeClass('touched');
			}, 10000);	
});

});//close document ready