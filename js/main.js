$(document).ready(function(){
  var owl = $(".owl-carousel"),
      owlOptions = {
        loop: true,
        margin: 5,
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

  /* Animate scroll down to how it works on arrow down click */
  $('.hero-down-icon-container a').click(function(event) {
    $('html, body').animate({ scrollTop: 981 }, 'slow');
  })

  /* Change the 'how does it work' states */
  $('.main-how-does-it-work .navigation a').click(function(event) {
    event.preventDefault();

    // Change image according to step number
    $('.laptop-content').attr('src', './img/bg/step-' + $(this).attr('itemStep') + '.png');

    // Remove all active classes
    $('.hiw-active').removeClass('hiw-active');

    // Add to instructions
    $('.instructions.step-' + $(this).attr('itemStep')).addClass('hiw-active');

    // Add to Did you know?
    $('.did-you-know.step-' + $(this).attr('itemStep')).addClass('hiw-active');

    // Add active class
    $(this).parent().addClass('hiw-active');
  })

});