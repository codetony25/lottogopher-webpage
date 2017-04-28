$(document).ready(function() {

  function resetCalloutAnimation() {
    // reset callout animation
    var stepOneAnimation = $('.instructions.step-1 .callout-animation');
    var stepTwoAnimation = $('.instructions.step-2 .callout-animation');
    var stepThreeAnimation = $('.instructions.step-1 .callout-animation');
    var stepFourAnimation = $('.instructions.step-1 .callout-animation');

    stepOneAnimation.css("width", "0px");
    stepOneAnimation.css("height", "0px");
    stepTwoAnimation.css("width", "0px");
    stepTwoAnimation.css("height", "0px");
    stepThreeAnimation.css("width", "0px");
    stepThreeAnimation.css("height", "0px");
    stepFourAnimation.css("width", "0px");
    stepFourAnimation.css("height", "0px");
  }

  resetCalloutAnimation();

  // When page loads, make sure to do the step 1 callout animation
  var runCalloutAnimation = function(calloutEl, smallWidth, smallHeight, bigWidth, bigHeight) {
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      var defaultCalloutAnimation = function() {
        calloutEl.animate({
          height: smallHeight
        }, { duration: 650 })
      };

      calloutEl.animate({
        width: smallWidth
      }, { duration: 650, complete: function() {
        defaultCalloutAnimation();
      }})
    }
    else if (window.innerWidth >= 1200) {
      var defaultCalloutAnimation = function() {
        calloutEl.animate({
          height: bigHeight
        }, { duration: 650 })
      };

      calloutEl.animate({
        width: bigWidth
      }, { duration: 650, complete: function() {
        defaultCalloutAnimation();
      }})
    }
  }

  // On resize of window make sure the callout animation still re-adjust its width and height
  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() > 992 && win.width() < 1200) {
      runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90);
      runCalloutAnimation($('.instructions.step-2 .callout-animation'), 274, 113, 360, 109);
      runCalloutAnimation($('.instructions.step-3 .callout-animation'), 200, 80, 155, 82);
      runCalloutAnimation($('.instructions.step-4 .callout-animation'), 57, 111, 111, 108);
    }
    if (win.width() >= 1200) {
      runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90);
      runCalloutAnimation($('.instructions.step-2 .callout-animation'), 274, 113, 360, 109);
      runCalloutAnimation($('.instructions.step-3 .callout-animation'), 200, 80, 155, 82);
      runCalloutAnimation($('.instructions.step-4 .callout-animation'), 57, 111, 111, 108);
    }
  });

  runCalloutAnimation($('.instructions.step-1 .callout-animation'), 90, 95, 115, 90)

  // Set up Owl Carousel
  var owl = $(".owl-carousel"),
      owlOptions = {
        loop: true,
        margin: 1,
        items:1,
        stagePadding:30,
        autoHeight:true,
        responsiveClass:true,
        autoWidth:true,
        center:true,
        dots: true,
        navText: ['<img class="left-arrow-svg" src="./img/icons/left-arrow.svg" alt="">', '<img class="right-arrow-svg" src="./img/icons/right-arrow.svg" alt="">'],
        responsive:{
          0:{
            items:1,
            nav:true,
          },
          480:{
            items:2,
            nav:true,
          },
          1200:{
            items:3,
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

  /* Animate scroll down to how it works on arrow down click responsively */
  $('.hero-down-icon-container a').click(function(event) {
    if (window.innerWidth <= 450) {
      $('html, body').animate({ scrollTop: 1836 }, 'slow');
    }
    else if (window.innerWidth > 450 && window.innerWidth < 768) {
      $('html, body').animate({ scrollTop: 1787 }, 'slow');
    }
    else if (window.innerWidth > 768 && window.innerWidth < 992) {
      $('html, body').animate({ scrollTop: 1700 }, 'slow');
    }
    else if (window.innerWidth >= 992) {
      $('html, body').animate({ scrollTop: 1005 }, 'slow');
    }
  })

  /* Change the 'how does it work' states */
  $('.main-how-does-it-work .navigation a').click(function(event) {
    event.preventDefault();
    resetCalloutAnimation();

    var stepNumber = $(this).attr('itemStep');
    var animationEl = $('.instructions.step-' + stepNumber + ' .callout-animation');

    // Change image according to step number
    $('.laptop-content').attr('src', './img/bg/step-' + stepNumber + '.png');

    // Remove all active classes
    $('.hiw-active').removeClass('hiw-active');

    // Add to instructions
    $('.instructions.step-' + stepNumber).addClass('hiw-active');

    if (stepNumber === '1') {
      runCalloutAnimation(animationEl, 90, 95, 115, 90);
    }
    else if (stepNumber === '2') {
      runCalloutAnimation(animationEl, 274, 113, 360, 109);
    }
    else if (stepNumber === '3') {
      runCalloutAnimation(animationEl, 200, 80, 155, 82);
    }
    else if (stepNumber === '4') {
      runCalloutAnimation(animationEl, 57, 111, 111, 108);
    }

    // Add to Did you know?
    $('.did-you-know.step-' + stepNumber).addClass('hiw-active');

    // Add active class
    $(this).parent().addClass('hiw-active');
  })

  // user dropdown menu shown on hover
  $('.user-dropdown').hover(function(event) {
    $('.inner-dropdown').css("display", "inline-block");
  }, function(event) {
    $('.inner-dropdown').css("display", "none");
  });





});