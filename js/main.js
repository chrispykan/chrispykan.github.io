// NAV CLICKS
// ScrollTo Section

 console.log("scrolls work");

$(document).ready(function(){


$('#go-to-about').click(function(){
  $.scrollTo('#about', 800);});

$('#go-to-portfolio').click(function(){
  $.scrollTo('#portfolio', 800);});

$('#go-to-testimonials').click(function(){
  $.scrollTo('#testimonials', 800);});

$('#go-to-contact').click(function(){
  $.scrollTo('#contact', 800);});
});





// CAROUSEL
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

