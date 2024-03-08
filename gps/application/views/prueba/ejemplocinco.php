<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mapeo y navegación con Leaflet y Nominatim</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>
  <div>
    <label for="origen">Origen:</label>
    <input type="text" id="origen" placeholder="Dirección de origen">
    <label for="destino">Destino:</label>
    <input type="text" id="destino" placeholder="Dirección de destino">
    <button onclick="calcularRuta()">Calcular Ruta</button>
  </div>

  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var control = L.Routing.control({
      waypoints: [
        L.latLng(51.5, -0.1),
        L.latLng(51.51, -0.12)
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);

    function calcularRuta() {
      var origen = document.getElementById('origen').value;
      var destino = document.getElementById('destino').value;

      control.setWaypoints([
        null,
        null
      ]);

      control.geocoder.geocode(origen, function(results) {
        control.spliceWaypoints(0, 1, results[0].center);
      });

      control.geocoder.geocode(destino, function(results) {
        control.spliceWaypoints(control.getWaypoints().length - 1, 1, results[0].center);
      });
    }
  </script>
</body>
</html>
