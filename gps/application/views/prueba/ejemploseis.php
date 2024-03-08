<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mapa similar a Google Maps con Leaflet</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>

  <script src="https://cdn.jsdelivr.net/npm/leaflet.gridlayer.googlemutant@0.11.0"></script>
  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 13);

    L.gridLayer.googleMutant({
      type: 'roadmap' // Puedes cambiar 'roadmap' a 'satellite', 'terrain' o 'hybrid'
    }).addTo(map);
  </script>
</body>
</html>
