var mymap = L.map("mapid").setView([19.31399, -99.25856], 25); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// alert(datosVehiculos);

// informacion();
viajes();

// setInterval(start, 10000);

async function viajes() {
  // console.log("informacion funcion" + velocidad);
  var data = {
    ID_disp: 1970000012,
    f1: "2024-02-22 00:00:00",
    f2: "2024-02-27 23:59:59",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev",
    lgw_id: 133,
  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/index.php/wsapi/getEventsMob";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      var objeto = JSON.parse(response);
      console.log("positions: ", objeto.positions);

      var coordinates = [];

      var posicion = {
        latitude: "",
        longitude: "",
        ignicao: "",
        origen: "",
      };

      $.each(objeto.positions, function (index, item) {
        posicion.latitude = item.latitude;
        posicion.longitude = item.longitude;
        posicion.ignicao = item.ignicao;
        posicion.rigen = item.origen;

        if ($.inArray(posicion, coordinates) === -1) {
          coordinates.push(posicion);
        }
      });

      console.log("coordinates", coordinates);

      $.each(coordinates, function(index, element) {
        console.log("element: ",element);
      
    });

     
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

function addMarker(data) {
  L.marker([data.latitude, data.longitude])
    .addTo(mymap)
    .bindPopup("<b>ignicao: </b> " + data.ignicao);
}

function centrarMapaEnMarcador(latitud, longitud) {
  mymap.setView([latitud, longitud], 17);
}

function eliminarTodosLosMarcadores() {
  mymap.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      mymap.removeLayer(layer);
    }
  });
}
// Función para mostrar la ubicación del usuario
// function onLocationFound(e) {
//   var radius = e.accuracy / 2;

//   L.marker(e.latlng)
//     .addTo(mymap)
//     .bindPopup("You are within " + radius + " meters from this point")
//     .openPopup();

//   L.circle(e.latlng, radius).addTo(mymap);

// }
// Configurar opciones de geolocalización
// mymap.locate({ setView: true, maxZoom: 16 });

// Manejar el evento de error de geolocalización

// Función para manejar errores de geolocalización
// function onLocationError(e) {
//   alert(e.message);
// }

// Añadir el mapa base de OpenStreetMap

// Añadir un marcador en una ubicación específica
// var marker = L.marker([51.5, -0.09]).addTo(mymap); // coordenadas del marcador

// // Añadir un popup al marcador
// marker.bindPopup("<b>Hello world!</b>").openPopup();

// Configurar opciones de geolocalización
mymap.locate({ setView: true, maxZoom: 16 });

// Asociar funciones de manejo de eventos
