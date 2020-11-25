function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var linkText = document.getElementById("myLink");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      linkText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      linkText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  $('.new__slider').slick({
   arrows: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow:'.slider__prev',
   nextArrow:'.slider__next'
  });

$('.offer__slider').slick({
  arrows:false,
  dots:true,
  slidesToShow:3,
  slidesToScroll:1
})
       
   $('.events__slider').slick({
    dots:false,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
   });
        