
  
      $(document).ready(function () {
      
        $('.brand-carousel').owlCarousel({
          loop: true,
          lazyLoadEager:1,
          stagePadding:0,
          nav: false,
          dots: false,
          autoplay: true,
        //   margin: 4,
          items: 6,
          responsive: {
            0: {
              items: 2
            },
            576: {
              items: 3
            },
            678: {
              items: 4
            },
            992: {
              items: 6
            },
            1200:{
                items: 6
            }
          }

        })
    

    
 
    $('.single-car').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      responsive: {
        1000: {
          items: 1
        }
      }

    })
  ,



  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: true,
        loop: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  })
});

