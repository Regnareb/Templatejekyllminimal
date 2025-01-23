window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {
  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } 
      else {
        thisVideoEl.pause();
      }
    }
  }
}



function copy_to_clipboard() {
  fetch("https://raw.githubusercontent.com/Regnareb/Houdini/refs/heads/main/python2.7libs/tools/installer.py").then(function(response) {
      response.text().then(function(text) {
        navigator.clipboard.writeText(text);
      });
    });
 }
