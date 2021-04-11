// Using FontFaceObserver to switch fonts once they are loaded.
// Avoids the FOIT (Flash Of Invisible Text) esp. on slow connections.
// The text is styled in a way that makes switching fonts less jarring.


// Find if the font-loaded cookie was set
var fontCookie = document.cookie.split('; ').indexOf('font-loaded=1') >= 0;

// If the observer has loaded successfully, promises are available and the fonts haven't been loaded before
if (FontFaceObserver && Promise && !fontCookie) {

  // Create observer instances for each font-face we are loading  
  var augillion = new FontFaceObserver('Augillion Web');
  var archia = new FontFaceObserver('Archia Web');
  var archiaBold = new FontFaceObserver('Archia Web', {
    weight: 700
  });
  
  // Watch for the title font to load
  augillion.load(null, 8000).then(function () {
    document.documentElement.className += " title-font-loaded";
  });
  
  // Watch for the body fonts to load
  Promise.all([archia.load(null, 8000), archiaBold.load(null, 8000)]).then(function () {
    document.documentElement.className += " body-font-loaded";
    document.cookie = "font-loaded=1";
  });

}