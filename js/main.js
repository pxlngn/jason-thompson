// @codekit-prepend '../bower_components/jquery/dist/jquery.min.js'
// @codekit-prepend '../bower_components/bootstrap/dist/js/bootstrap.min.js'
// @codekit-prepend '../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'
// @codekit-prepend '../bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'




$(document).ready(function() {

  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

});
