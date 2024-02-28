var mymap = L.map("mapid").setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// alert(datosVehiculos);
var velocidad = "";
var dataVeiculo;
// informacion();
posiciones();
function start() {
  // alert("datosVehiculos");
  eliminarTodosLosMarcadores();

  // $.ajax({
  //   url: url,
  //   method: "POST",
  //   data: data,
  //   success: function (response) {
  //     var objeto = JSON.parse(response);
  //     console.log("objeto: ", objeto);
  //     addMarker(objeto[1].latitude, objeto[1].longitude, dataVeiculo);
  //     centrarMapaEnMarcador(objeto[1].latitude, objeto[1].longitude);
  //     muestralocalizacion();
  //   },
  //   error: function (xhr, status, error) {
  //     console.error(status, error); // Manejar cualquier error aquí
  //   },
  // });
}

// setInterval(start, 10000);

async function posiciones() {
  // console.log("informacion funcion" + velocidad);
  var data = {
    ID_disp: 1970000012,
    f1: "2024-02-24 00:00:00",
    f2: "2024-02-24 23:59:59",
    lgw_id: 133,
    db: "awsdev",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getPositionsFast";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      var objeto = JSON.parse(response);
      // console.log("objeto: ", typeof objeto);
      var posicion = { 
        latitude:"",
        longitude:"",
        ignicao:"",
        origen:""
       }


       
      objeto.forEach(function (json) {      
        posicion.latitude=json.latitude;
        posicion.longitude=json.longitude;
        posicion.ignicao=json.ignicao;
        posicion.rigen=json.origen;    
         addMarker(posicion);
      });

     
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });

  start();
}

function addMarker(data) { 
  console.log(data);
  console.log(data.latitude, data.longitud);
  // L.marker([latitude, longitude]).addTo(mymap).bindPopup("<b>Placa:</b> ");
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
function muestralocalizacion() {
  // Manejar el evento de ubicación encontrada

  // Asociar funciones de manejo de eventos de geolocalización
  function onLocationFound(e) {
    alert(e);
    var radius = e.accuracy / 2;

    L.marker(e.latlng)
      .addTo(mymap)
      .bindPopup("Estás dentro de " + radius + " metros de este punto")
      .openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
  }
  function onLocationError(e) {
    alert(e.message);
    start();
  }
  mymap.on("locationfound", onLocationFound);
  mymap.on("locationerror", onLocationError);
}

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
