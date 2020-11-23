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
   infinite:true,
  //  autoplay: true,
  // //  autoplaySpeed: 2000,
   prevArrow:'.slider__prev',
   nextArrow:'.slider__next'

  });
  $('.offer__slider').slick({
    dots:true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:true,
    centerMode: true,
   
   });
            