$(document).ready(function(){
  var owl = $(".owl-carousel"),
      owlOptions = {
        loop: true,
        margin: 35,
        items:1,
        stagePadding:30,
        autoHeight:true,
        responsiveClass:true,
        autoWidth:true,
        center:true,
        responsive:{
          0:{
            items:1,
          },
          480:{
            items:1,
          },
          1200:{
            items:3,
            nav:true,
            loop:false
          }
        }
      };

  /* Remove Owl Carousel at specific browser width */
  if ( $(window).width() <= 990 ) {
    var owlActive = owl.owlCarousel(owlOptions);
  } else {
    owl.addClass('off');
  }

  $(window).resize(function() {
    if ( $(window).width() <= 990 ) {
      if ( $('.owl-carousel').hasClass('off') ) {
        var owlActive = owl.owlCarousel(owlOptions);
        owl.removeClass('off');
      }
    } else {
      if ( !$('.owl-carousel').hasClass('off') ) {
        owl.addClass('off').trigger('destroy.owl.carousel');
        owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  });
});