/*Function for 'READ MORE' and 'READ LESS'
===========================================*/

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
function myEventsFunction() {
  var dots = document.getElementById("events__dots");
  var moreText = document.getElementById("events__more");
  var linkText = document.getElementById("myEventsLink");

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
/*Function for BURGER MENU in HEADER
============================================*/
function openNav() {
  document.getElementById("myNav").style.display = "flex";
}
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
/*Function for INPUT SEARCH in HEADER
============================================*/
function openSearch(){
  document.getElementById("mySearch").style.display = "flex";
}
function closeSearch() {
  document.getElementById("mySearch").style.display = "none";
}
/*Function for LOGIN in HEADER
============================================*/
function openLogin(){
  document.getElementById("myLogin").style.display = "flex";
}
function closeLogin() {
  document.getElementById("myLogin").style.display = "none";
}
/*Function for REGISTER in HEADER
============================================*/
function openRegister(){
  document.getElementById("myRegister").style.display = "flex";
}
function closeRegister(){
  document.getElementById("myRegister").style.display = "none";
}
/*Function for slider in 'NEW'
=============================================*/
  $('.new__slider').slick({
   arrows: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow:'.slider__prev',
   nextArrow:'.slider__next',
   infinite:true,


  })
          
/*Function for slider in 'OFFER'
=============================================*/

$('.offer__slider').slick({
  arrows:false,
  dots:true,
  slidesToShow:3,
  slidesToScroll:1,
  centerMode: true
})
     
/*Function for slider in 'REVIEW'
=============================================*/

$('.review__slider').slick({
  arrows:false,
  dots:true,
  slidesToShow:1,
  slidesToScroll:1,
  cssEase: 'linear',
})
/*Function for slider in 'EVENTS'
=============================================*/
$('.events__slider').slick({
  dots:false,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite:true,
  prevArrow:".prev__arrow",
  nextArrow:".next__arrow",
  responsive:[{
    breakpoint:599,
    settings: {
      dots:true,
      arrows:false
    }
  }]
});

/*Function for slider FILTER-IS-ACTIVE in 'SORT'
=============================================*/
function sortSection() {
  const sortItems = document.querySelectorAll('.filter__items');
  const sortItemsName = ['All', 'Red', 'Rose', 'White'];
  sortItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      sortItems.forEach((everyElement) => {
        everyElement.classList.remove('filter__items--active');
      });
      item.classList.add('filter__items--active');
      console.log(item);
      if (item.textContent == sortItemsName[index]) {
        sortFilter(index);
      }
    });
  });
}
sortSection();
function sortFilter(index) {
  const filterItems = document.querySelectorAll('.sort__item');
  const filterItemsName = [
    'data-all',
    'data-red',
    'data-rose',
    'data-white',
  ];
  filterItems.forEach((ayday) => {
    if (!ayday.hasAttribute(filterItemsName[index])) {
      ayday.style.display = 'none';
    } else {
      ayday.style.display = 'flex';
    }
  });
}



