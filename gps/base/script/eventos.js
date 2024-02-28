var mymap = L.map("mapid").setView([19.31399, -99.25856], 19); // coordenadas iniciales y nivel de zoom

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
    f1: "2024-02-15 00:00:00",
    f2: "2024-02-16 16:26:21",
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

      var posicionArray = [];

      var inicio = objeto.positions[0].data_gps_br;
      $.each(objeto.positions, function (index, item) {
        console.log(inicio);
        var coords = item.latitude + "," + item.longitude;

        var numeroEntero = parseInt(item.veloc, 10);

        var posicion = {
          latitude: item.latitude,
          longitude: item.longitude,
          veloc: item.veloc,
          acionamento_id: "",
          inicio: inicio,
          fin: "",
        };

        if (item.tab === "ev") {
          posicion.fin = item.data_gps_br;
          inicio = item.data_gps_br;
          // alert(item.acionamento_id);
          if (item.acionamento_id === "68") {
            posicion.acionamento_id = "Modo detenido";
          } else {
            posicion.acionamento_id = item.acionamento_id;
          }
          posicionArray.push(posicion);
          stop(posicion);
          addMarker(posicion);
        } else {
          // posicion.fin = item.data_gps_br;
          // alert(typeof numeroEntero + numeroEntero);
          coordinates.push(posicion);
        }
      });

      console.log("posicionArray", posicionArray);
      console.log("coordinates", coordinates);
      //  console.log("posicionArray", posicionArray);

      // $.each(coordinates, function (index, element) {
      //   console.log("element: ", element);
      //   addMarker(element);
      // });
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

function addMarker(data) {
  var myIcon = L.icon({
    iconUrl: "../red-dot.png",
    shadowUrl: "../marker-shadow.png",
  });

 

  L.marker([data.latitude, data.longitude], { icon: myIcon })
    .addTo(mymap)
    .bindPopup(
      "<b>Alerta: </b> " +
        data.acionamento_id +
        "<br>" +
        "<b>Inicio: </b> " +
        data.inicio +
        "<br>" +
        "<b>Fin: </b> " +
        data.fin
    );
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

function stop(data) {
  console.log(data);  
  console.log("data: ", data.inicio , " ", data.fin);
  
  // Fechas proporcionadas
  var fecha1 = new Date(data.inicio);
  var fecha2 = new Date(data.fin);
 
  // Calcula la diferencia en milisegundos
  var diferencia_ms = Math.abs(fecha2 - fecha1);

  // Convierte la diferencia de milisegundos a horas, minutos y segundos
  var horas = Math.floor(diferencia_ms / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia_ms % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia_ms % (1000 * 60)) / 1000);

  // Muestra la diferencia
 var stoper = horas+ ":" +minutos+
  ":" +
  segundos;


  console.log(
    "Diferencia: " +
      horas +
      " horas, " +
      minutos +
      " minutos, " +
      segundos +
      " segundos."
  );

  alert("stoper " +stoper);
  return stoper;
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
