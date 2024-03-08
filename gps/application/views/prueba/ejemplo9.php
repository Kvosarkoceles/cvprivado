<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Encontrar la mejor ruta con Leaflet y OSRM</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>

  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Función para encontrar la mejor ruta utilizando OSRM
    function encontrarMejorRuta(origen, destino) {
      var url = 'https://router.project-osrm.org/route/v1/driving/' + origen + ';' + destino + '?overview=false';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var ruta = L.polyline(data.routes[0].geometry.coordinates, {color: 'blue'}).addTo(map);
          map.fitBounds(ruta.getBounds());
        })
        .catch(error => console.error('Error al encontrar la mejor ruta:', error));
    }

    // Ejemplo de uso: encontrar la mejor ruta desde A hasta B
    encontrarMejorRuta('-99.133208,19.432608', '-99.176958,19.371159'); // Puedes usar coordenadas o nombres de lugares
  </script>
</body>
</html>
