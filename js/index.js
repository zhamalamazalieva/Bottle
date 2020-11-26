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

/*Function for slider in 'NEW'
=============================================*/
  $('.new__slider').slick({
   arrows: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow:'.slider__prev',
   nextArrow:'.slider__next'
  });

/*Function for slider in 'OFFER'
=============================================*/

$('.offer__slider').slick({
  arrows:false,
  dots:true,
  slidesToShow:3,
  slidesToScroll:1
})
     
/*Function for slider in 'EVENTS'
=============================================*/
$('.events__slider').slick({
  dots:false,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
        
/*Function for slider FILTER-IS-ACTIVE in 'SORT'
=============================================*/
function sortSection() {
  const sortItems = document.querySelectorAll('.filter__items');
  const sortItemsName = ['All', 'Salad', 'Fast Food', 'Platters', 'Dessert'];
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