// ========================================================================= //
//  Type Script
// ========================================================================= //

$(document).ready(function () {
  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: [
        "Front End Developer.",
        "Graphic Designer.",
        "React JS Developer.",
        "Freelancer.",
      ],
      typeSpeed: 100,
      loop: true,
    });
  });
});

// ========================================================================= //
//  Scroll Script
// ========================================================================= //

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".scrolltop:hidden").stop(true, true).fadeIn();
      //$('.navbar').addClass('solid');
    } else {
      $(".scrolltop").stop(true, true).fadeOut();
      //$('.navbar').removeClass('solid');
    }
  });
  $(function () {
    $(".scroll").click(function () {
      $("html,body").animate({ scrollTop: $(".thetop").offset().top }, "1000");
      return false;
    });
  });
});

// ========================================================================= //
//  Portfolio Filter Script
// ========================================================================= //

$(document).ready(function () {
  $(".nav-item").click(function () {
    // reset active class
    $(".nav-item").removeClass("active");
    // add active class to selected
    $(this).addClass("active");
    // return needed to make function work
    return false;
  });

  $(function () {
    // create an empty variable
    var selectedClass = "";
    // call function when item is clicked
    $(".nav-item").click(function () {
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel");
      // fades out all portfolio items
      $(".portfolio-div div").fadeOut(300);
      // fades in selected category
      $(".portfolio-div div." + selectedClass)
        .delay(300)
        .fadeIn(300);
    });
  });
}); // document ready

// ========================================================================= //
//  Magnific Popup Script
// ========================================================================= //

$(document).ready(function () {
  $(".portfolio-div").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    removalDelay: 300,
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: "ease-in-out", // CSS transition easing function
    },
  });
});

// ========================================================================= //
//  AOS Script
// ========================================================================= //

$(document).ready(function () {
  AOS.init();
});

// ========================================================================= //
//  Slider Script
// ========================================================================= //

// $(document).ready(function(){
//   $('.main-slider').slick({
//       dots: false,
//       infinite: true,
//       speed: 1000,
//       autoplay:true,
//       autoplaySpeed:1500,
//       fade: true,
//       cssEase: 'linear',
//       adaptiveHeight: true,
//       arrows: false,
//   });
// });
