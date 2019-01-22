const mapboxgl = require("mapbox-gl");
const index = require('./index');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
  };    

const buildMarker = function(type, coords) {
    console.log(coords);
    console.log(iconURLs[type]);
  let markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = iconURLs[type];
  console.log('YO');

  return new mapboxgl.Marker(markerDomEl).setLngLat([coords]);

};


console.log('hello');
module.exports = buildMarker;