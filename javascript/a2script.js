$(document).ready(function() {
    $("#dailySketch_controls").on('click', 'span', function() {
      $("#dailySketch img").removeClass("opaque");
  
      var newImage = $(this).index();
  
      $("#dailySketch img").eq(newImage).addClass("opaque");
  
      $("#dailySketch_controls span").removeClass("selected");
      $(this).addClass("selected");
    });
  });

  //image transitions code source: http://css3.bradshawenterprises.com/cfimg/ - Demo 6