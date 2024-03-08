<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tráfico en tiempo real en México con Leaflet y Google Maps</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>

  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 6); // Centrado en México

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var trafficLayer = L.gridLayer.googleMutant({
      type: 'roadmap',
      styles: [{
        featureType: 'all',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ visibility: 'on' }]
      }]
    }).addTo(map);
  </script>
</body>
</html>
