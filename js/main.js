// @codekit-prepend '../bower_components/jquery/dist/jquery.min.js'
// @codekit-prepend '../bower_components/bootstrap/dist/js/bootstrap.min.js'
// @codekit-prepend '../bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js'
// @codekit-prepend '../bower_components/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
// @codekit-prepend '../bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'

// @codekit-prepend '../bower_components/gsap/src/minified/jquery.gsap.min.js'
// @codekit-prepend '../bower_components/gsap/src/minified/TweenMax.min.js'



$(document).ready(function() {

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // fix Start
  var pinStartScene = new ScrollMagic.Scene({
      triggerElement: '#start',
      triggerHook: 0,
      duration: '35%'
    })
    .setPin('#start', {
      pushFollowers: false
    })
    .addTo(controller);

  // loop thru each project element
  $('.panel').each(function() {
    // Build Scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
      })
      .setClassToggle(this, 'fade-in')
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'pink',
        indent: 10,
        colorStart: 'cyan'
      })
      .addTo(controller);

  });
// video play code, chrome seems to require
  (function() {
    /**
     * Video element
     * @type {HTMLElement}
     */
    var video = document.getElementById("myVideo");

    /**
     * Check if video can play, and play it
     */
    video.addEventListener( "canplay", function() {
      video.play();
    });
  })();

});
