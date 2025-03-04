jQuery(document).ready(function ($) {
  var $window = $(window);

  //Mm-menu
  $("#mobile-menu").mmenu({
    offCanvas: {
      pageSelector: "#page-wrapper",
    },
    navbars: {
      content: ["prev", "searchfield", "close"],
    },
    extensions: ["pageshadow", "effect-menu-slide", "effect-listitems-slide"],
  });

  //Equal heights when needed
  $(".equalheight").matchHeight();

  $("header .menu").superfish();

  $(".lightbox").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",
    zoom: {
      enabled: true,

      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
    gallery: {
      enabled: true,
    },
  });

  //Responsive videos
  $("#main").fitVids();

  $(".carousel").each(function () {
    var num = 3;
    if ($(this).parents(".main__content__left").length) {
      num = 1;
    }
    $(this).owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        780: {
          items: 2,
        },
        971: {
          items: num,
        },
      },
      navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>",
      ],
    });
  });

  $(".carousel-relevant").owlCarousel({
    loop: true,
    margin: 35,
    responsiveClass: true,
    items: 3,
    autoWidth: true,
  });

  $(".carousel-screenshot").owlCarousel({
    loop: true,
    margin: 35,
    responsiveClass: true,
    items: 4,
    nav: true,
    responsive: {
      0: {
        items: 2,
        margin: 10,
      },
      780: {
        items: 3,
      },
      971: {
        items: 4,
      },
    },
  });

  //Social share
  $(".news-item .social li a, .post-info .social li a").click(function () {
    var windowWidth = $window.width();
    var windowHeight = $window.height();

    var url = $(this).attr("href");
    var winWidth = parseInt($(this).attr("data-width"));
    var winHeight = parseInt($(this).attr("data-height"));

    var winTop = windowHeight / 2 - winHeight / 2;
    var winLeft = windowWidth / 2 - winWidth / 2;
    window.open(
      url,
      "Social Share",
      "top=" +
        winTop +
        ",left=" +
        winLeft +
        ",toolbar=0,status=0,width=" +
        winWidth +
        ",height=" +
        winHeight
    );

    return false;
  });

  //User ratings
  $(".rating-user>i").hover(function () {
    if (!$(this).parent().hasClass("user-rated")) {
      $(this).parent().find("i").addClass("fa-star-o").removeClass("fa-star");
      $(this).prevAll().andSelf().removeClass("fa-star-o").addClass("fa-star");
    }
  });

  $(".rating-user").hover(
    function () {},
    function () {
      var i = 0,
        starsTotal = parseInt($(this).attr("data-stars"));

      $(this).find("i").removeClass("fa-star").addClass("fa-star-o");

      while (i < starsTotal) {
        $(this).find("i").eq(i).removeClass("fa-star-o").addClass("fa-star");
        i++;
      }
    }
  );

  $(".rating-user>i").click(function () {
    var el = $(this);

    if (!$(this).hasClass("user-rated")) {
      // Retrieve post ID from data attribute
      var post_id = el.parent().attr("data-post-id");

      if (el.parent().attr("data-log") == "no") {
        el.parent().addClass("animated wobble");
      }

      var user_rating = el.parent().find(".fa-star").length;

      
      el.parent().addClass("user-rated");
    }

    return false;
  });
});
