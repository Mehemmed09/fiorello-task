$('#sara').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
  nextArrow: '<button type="button" class="slick-custom-arrow slick-next"> > </button>'
  });
  // init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
document.addEventListener('DOMContentLoaded', function() {
  var layers = document.querySelectorAll('.parallax-layer');
  window.addEventListener('scroll', function() {
    var scrollDepth = window.scrollY;
    layers.forEach(function(layer, index) {
      var speed = 0.5 * (index + 1);
      var yPos = -(scrollDepth * speed);
      layer.style.transform = 'translateY(' + yPos + 'px)';
    });
  });
});
