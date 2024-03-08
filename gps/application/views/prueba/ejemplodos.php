<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obtener dirección desde coordenadas</title>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
  <div>
    <p>Latitud: <span id="lat"></span></p>
    <p>Longitud: <span id="lon"></span></p>
    <p>Dirección: <span id="direccion"></span></p>
  </div>

  <script>
    // Coordenadas
    
    var lat = 19.309200;
    var lon = -99.260203;

    // Mostrar coordenadas
    document.getElementById("lat").innerText = lat;
    document.getElementById("lon").innerText = lon;

    // Hacer solicitud a Nominatim
    axios.get('https://nominatim.openstreetmap.org/reverse?lat=' + lat + '&lon=' + lon + '&format=json')
      .then(function (response) {
        // Procesar respuesta
        var address = response.data.display_name;
        document.getElementById("direccion").innerText = address;
      })
      .catch(function (error) {
        console.log(error);
      });
  </script>
</body>
</html>

