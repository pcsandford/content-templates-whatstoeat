$(document).ready(function(){

//google maps

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

var startPoint = new google.maps.LatLng(43.6366829, -79.4001831);



function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setOptions( { suppressMarkers: true } );
  var startPoint = new google.maps.LatLng(43.6366829, -79.4001831);

  var mapOptions = {
    zoom:14,
    center: startPoint,
    disableDefaultUI: true,
    draggable: false,
    zoomControl: false,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
 var homeMarker = startPoint
 var marker = new google.maps.Marker({
  position:homeMarker,
  map: map,
  icon:'assets/images/marker.svg'
 })
 

var gusto101 = "101 Portland Street, Toronto";
var aroma = "535 Queen Street West, Toronto";
var pandl = "507 Queen Street West, Toronto";
var leGourmand = "152 Spadina Avenue, Toronto";
var tone = "414 Queen Street West, Toronto";
var phoHung = "350 Spadina Avenue, Toronto"; 
var resetDestination = "600 Fleet Street, Toronto";



//heart animation 

$('.heartArea').on('click',function(){
  $(this).toggleClass('liked');
})

//card flip animation

var flipback1;
var flipback2;
var flipback3;
var flipback4;
var flipback5;
var flipback6;

//set up timers for different map resets

var resetMap1;
var resetMap2;
var resetMap3;
var resetMap4;
var resetMap5;
var resetMap6;

function reset1() {
  resetMap1 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};

function reset2() {
  resetMap2 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};

function reset3() {
  resetMap3 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};

function reset4() {
  resetMap4 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};

function reset5() {
  resetMap5 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};

function reset6() {
  resetMap6 = setTimeout(function(){
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
    },20000);
};


$('.card1').data('flip', false);

$('.card1holder').on('click',function(){

  if($('.card1').hasClass('flipped') === false) {

    reset1();
    clearTimeout(resetMap2);
    clearTimeout(resetMap3);
    clearTimeout(resetMap4);
    clearTimeout(resetMap5);
    clearTimeout(resetMap6);

    directionsDisplay.setMap(map);
	  var start = resetDestination;
    var end = gusto101;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  
	 $('.card1 .imageArea').addClass('touched');

  	setTimeout(function() {
      $('.card1').toggleClass('flipped');
    	$('.card1').data('flip', true);
    	$('.card1').find('.heartArea').css('opacity','0');
    }, 600);


  	flipback1 = setTimeout(function() {
      			$('.card1').toggleClass('flipped');
      			$('.card1').data('flip', false);
      			$('.card1').find('.heartArea').delay(1000).css('opacity','1');
            $('.card1 .imageArea').removeClass('touched');
  		}, 20000);	

  } else {
    $('.card1').removeClass('flipped');
    $('.card1').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback1);
    clearTimeout(resetMap1);
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});





//card2 flip animation

$('.card2').data('flip', false);

$('.card2holder').on('click',function(){

  if($('.card2').hasClass('flipped') === false) {

    reset2();
    clearTimeout(resetMap1);
    clearTimeout(resetMap3);
    clearTimeout(resetMap4);
    clearTimeout(resetMap5);
    clearTimeout(resetMap6);

    directionsDisplay.setMap(map);
    var start = resetDestination;
    var end = aroma;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });

	$('.card2 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card2').toggleClass('flipped');
    $('.card2').data('flip', true);
    $('.card2').find('.heartArea').css('opacity','0');
  }, 600);

  	flipback2 = setTimeout(function() {
      			$('.card2').toggleClass('flipped');
      			$('.card2').data('flip', false);
      			$('.card2').find('.heartArea').delay(1000).css('opacity','1');
            $('.card2 .imageArea').removeClass('touched');
			}, 20000);	
  } else {
    $('.card2').removeClass('flipped');
    $('.card2').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback2);
    clearTimeout(resetMap2);
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});





//card3 flip animation


$('.card3').data('flip', false);

$('.card3holder').on('click',function(){

  if($('.card3').hasClass('flipped') === false) {

	  
    reset3();
    clearTimeout(resetMap1);
    clearTimeout(resetMap2);
    clearTimeout(resetMap4);
    clearTimeout(resetMap5);
    clearTimeout(resetMap6);


   directionsDisplay.setMap(map);
    var start = resetDestination;
    var end = pandl;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });


    $('.card3 .imageArea').addClass('touched');

    setTimeout(function() {
      $('.card3').toggleClass('flipped');
      $('.card3').data('flip', true);
      $('.card3').find('.heartArea').css('opacity','0');
    }, 600);

  	flipback3 = setTimeout(function() {
      			$('.card3').toggleClass('flipped');
      			$('.card3').data('flip', false);
      			$('.card3').find('.heartArea').delay(1000).css('opacity','1');
            $('.card3 .imageArea').removeClass('touched');
			}, 20000);	
  } else {
    $('.card3').removeClass('flipped');
    $('.card3').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback3);
    clearTimeout(resetMap3)
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});

//card4 flip animation

$('.card4').data('flip', false);

$('.card4holder').on('click',function(){

  if($('.card4').hasClass('flipped') === false) {

	
  reset4();
  clearTimeout(resetMap1);
  clearTimeout(resetMap2);
  clearTimeout(resetMap3);
  clearTimeout(resetMap5);
  clearTimeout(resetMap6);

  directionsDisplay.setMap(map);
   var start = resetDestination;
   var end = leGourmand;
   var request = {
     origin:start,
     destination:end,
     travelMode: google.maps.TravelMode.WALKING
   };
   directionsService.route(request, function(response, status) {
     if (status == google.maps.DirectionsStatus.OK) {
       directionsDisplay.setDirections(response);
     }
   });
    
    $('.card4 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card4').toggleClass('flipped');
    $('.card4').data('flip', true);
    $('.card4').find('.heartArea').css('opacity','0');
  }, 600);

  flipback4 =	setTimeout(function() {
      			$('.card4').toggleClass('flipped');
      			$('.card4').data('flip', false);
      			$('.card4').find('.heartArea').delay(1000).css('opacity','1');
            $('.card4 .imageArea').removeClass('touched');
			}, 20000);	
  } else {
    $('.card4').removeClass('flipped');
    $('.card4').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback4);
    clearTimeout(resetMap4)
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});

//card5 flip animation

$('.card5').data('flip', false);

$('.card5holder').on('click',function(){

  if($('.card5').hasClass('flipped') === false) {

	reset5();
  clearTimeout(resetMap1);
  clearTimeout(resetMap2);
  clearTimeout(resetMap3);
  clearTimeout(resetMap4);
  clearTimeout(resetMap6);

  directionsDisplay.setMap(map);
   var start = resetDestination;
   var end = tone;
   var request = {
     origin:start,
     destination:end,
     travelMode: google.maps.TravelMode.WALKING
   };
   directionsService.route(request, function(response, status) {
     if (status == google.maps.DirectionsStatus.OK) {
       directionsDisplay.setDirections(response);
     }
   });

	$('.card5 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card5').toggleClass('flipped');
    $('.card5').data('flip', true);
    $('.card5').find('.heartArea').css('opacity','0');
  }, 600);

  	flipback5 = setTimeout(function() {
      			$('.card5').toggleClass('flipped');
      			$('.card5').data('flip', false);
      			$('.card5').find('.heartArea').delay(1000).css('opacity','1');
            $('.card5 .imageArea').removeClass('touched');
			}, 20000);	
  } else {
    $('.card5').removeClass('flipped');
    $('.card5').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback5);
    clearTimeout(resetMap5);
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});


//card6 flip animation

$('.card6').data('flip', false);

$('.card6holder').on('click',function(){

  if($('.card6').hasClass('flipped') === false) {

  reset6();
  clearTimeout(resetMap1);
  clearTimeout(resetMap2);
  clearTimeout(resetMap3);
  clearTimeout(resetMap4);
  clearTimeout(resetMap5);

  directionsDisplay.setMap(map);
   var start = resetDestination;
   var end = phoHung;
   var request = {
     origin:start,
     destination:end,
     travelMode: google.maps.TravelMode.WALKING
   };
   directionsService.route(request, function(response, status) {
     if (status == google.maps.DirectionsStatus.OK) {
       directionsDisplay.setDirections(response);
     }
   });

  $('.card6 .imageArea').addClass('touched');

  setTimeout(function() {
    $('.card6').toggleClass('flipped');
    $('.card6').data('flip', true);
    $('.card6').find('.heartArea').css('opacity','0');
  }, 600);

    flipback6 = setTimeout(function() {
            $('.card6').toggleClass('flipped');
            $('.card6').data('flip', false);
            $('.card6').find('.heartArea').delay(1000).css('opacity','1');
            $('.card6 .imageArea').removeClass('touched');
      }, 20000);  
  } else {
    $('.card6').removeClass('flipped');
    $('.card6').find('.heartArea').delay(1000).css('opacity','1');
    clearTimeout(flipback6);
    clearTimeout(resetMap6);
    directionsDisplay.setMap(null);
    map.setCenter(startPoint);
  }
});

}//close initialize


google.maps.event.addDomListener(window, 'load', initialize);

});//close document ready