$(function(){

 $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    responsive: [
        {
          breakpoint: 1106,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
 });

 



});