$(document).ready(function () {
    $('#cardCarousel').on('slide.bs.carousel', function (event) {
        var menuItems = $('.navbar-nav .nav-link');
        menuItems.removeClass('active');

        switch (event.to) {
            case 0:
                menuItems.eq(0).addClass('active');
                break;
            case 1:
                menuItems.eq(1).addClass('active');
                break;
            case 2:
                menuItems.eq(2).addClass('active');
                break;
            case 3:
                menuItems.eq(3).addClass('active');
                break;
        }
    });
});


function prevSlide() {
    $('#productCarousel').carousel('prev');
  }

  function nextSlide() {
    $('#productCarousel').carousel('next');
  }


  