$(document).ready(function(){
  $('.shelf').slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  });


TweenLite.to("textarea", 3, {text:"Type here to add your content", ease:Linear.easeNone})
  

// var maxLength = 12;
// $('textarea').keyup(function() {
	// alert("hello");
// });

});