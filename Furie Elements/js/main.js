$(function(){

    $('.car-slider').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true

      });

   });

   $(function(){

    $('.car-models__slider').slick({
     
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true

      });
      

      $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        
     });

     document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = true;
    }
      
  

   });

   