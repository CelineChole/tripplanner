const mapboxgl = require("mapbox-gl");
const marker = require('./markers');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2VsaW5lY2hvbGUiLCJhIjoiY2pyODkzZGVhMDRncjQ0cGRyeXVwYXFycyJ9.kgMgMQrH7X7bejHmPrOzJg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
  marker: marker.buildMarker('restaurants', [-74.0048, 40.7480]).addTo(map);
});

