$(document).ready(function(){
  
	$("#menu ul li").hover(function(){
		$(this).addClass("hover-li");
  }, function() {
   $(this).removeClass("hover-li");
	});

  $("#menu ul li, .scrollTo").click(function(){
    $("#menu ul li.current").removeClass("current");
    $(this).closest('li').addClass('current');
    var link_id = $(this).attr('name');
    var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      if($(window).width() > 640){
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
         return false;
      } else  if($(window).width() <= 640){
        document.location.href="#" + link_id;
      }
     
  });
// MENU FIXED
	$(window).scroll(function(){
	    if($(this).scrollTop() > 689)
	      {   
	        $('#menu').css({"position":"fixed" , "top" : "0"});
	      } 
	    else 
	      {
	        $('#menu').css({"position":"relative"});
	      };
	});
// MENU FIXED

// ANNIMATION SCRIPT
$("#content-slider").featureCarousel({
    autoplay:2000,
    trackerIndividual:false,
    trackerSummation:false,
    stopOnHove:true,

	sidePadding:550,

    smallFeatureWidth:239,
    smallFeatureHeight:158,

    largeFeatureWidth:398,
    largeFeatureHeight:235,

    leftButtonTag:'#carousel-left',
    rightButtonTag:'#carousel-right',
    
    movedToCenter: function($feature) {
      // $feature is a jQuery wrapped object describing the featured that is now in the center position.
      var imageUrl = $feature.find('a').attr('href');
      $('.item-slider-brochures').removeClass('brochure-active');
      $feature.addClass('brochure-active');
      var titlebroch,title2broch,textbroch;
      titlebroch = $feature.find('.title-brochures h6,li').html();
      title2broch = $feature.find('.title-brochures h5').html();
      textbroch = $feature.find('.title-brochures p').html();
      $('#title-brochures').html(titlebroch);
      $('#title-2-brochures').html(title2broch);
      $('#description-text').html(textbroch);
    }
});
// /ANNIMATION SCRIPT

// ANNIMATION IMG
$("#content-slider-img").featureCarousel({
    autoplay:0,
    trackerIndividual:false,
    trackerSummation:false,
    stopOnHove:true,

    sidePadding:700,


    smallFeatureWidth:203,
    smallFeatureHeight:283,

    largeFeatureWidth:303,
    largeFeatureHeight:449, 

    movedToCenter: function($feature) {
      // $feature is a jQuery wrapped object describing the featured that is now in the center position.
      var imageUrl = $feature.find('a').attr('href');
      $('.item-slider-img').removeClass('img-active');
      $feature.addClass('img-active');
      var titleimg,textimg;
      titleimg = $feature.find('.title-img h6').html();
      textimg = $feature.find('.title-img p').html();
      $('#title-img').html(titleimg);
      $('#description-text-img').html(textimg);
    }

});
// /ANNIMATION IMG

// ANNIMATION SCRIPT S15
$("#content-slider-s15").featureCarousel({
    autoplay:2000,
    trackerIndividual:false,
    trackerSummation:false,
    stopOnHove:true,

	sidePadding:550,

    smallFeatureWidth:239,
    smallFeatureHeight:158,

    largeFeatureWidth:398,
    largeFeatureHeight:235,

    leftButtonTag:'#carousel-left-s15',
    rightButtonTag:'#carousel-right-s15',
    
    movedToCenter: function($feature) {
      // $feature is a jQuery wrapped object describing the featured that is now in the center position.
      var imageUrl = $feature.find('a').attr('href');
      $('.item-slider-s15').removeClass('s15-active');
      $feature.addClass('s15-active');
    }
});
// /ANNIMATION SCRIPT S15
});