<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buscar lugares de interés con Leaflet y Nominatim</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>
  <script>
    var map = L.map('map').setView([19.309200, -99.260203], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Función para buscar lugares de interés
    function buscarLugaresDeInteres(lat, lon) {
      var url = 'https://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=jsonv2';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var city = data.address.city;
          var url = 'https://nominatim.openstreetmap.org/search?format=json&q=amenity&city=' + city;
          fetch(url)
            .then(response => response.json())
            .then(data => {
              data.forEach(lugar => {
                L.marker([lugar.lat, lugar.lon]).addTo(map)
                  .bindPopup(lugar.display_name)
                  .openPopup();
              });
            })
            .catch(error => console.error('Error al buscar lugares de interés:', error));
        })
        .catch(error => console.error('Error al obtener la ciudad:', error));
    }

    // Evento de clic en el mapa para buscar lugares de interés
    map.on('click', function(e) {
      buscarLugaresDeInteres(e.latlng.lat, e.latlng.lng);
    });
  </script>
</body>
</html>
