<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leaflet con Nominatim</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>
  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
      placeholder: "Buscar dirección..."
    }).on('markgeocode', function(e) {
      map.fitBounds(e.geocode.bbox);
      L.marker(e.geocode.center).addTo(map);
    }).addTo(map);
  </script>
</body>
</html>
