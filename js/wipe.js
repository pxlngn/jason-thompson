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


  // loop thru each project element
  $('.panel').each(function() {


  });

// wipes table-striped
// define movement of panels
var wipeAnimation = new TimelineMax()
  .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
  .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
  .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%"
  })
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);



});
