// Datos para enviar en la solicitud
var data = {
  lgw_id: 133,
  codcliente: 87,
  lgw_codcliente_criacao: "",
  dbip: "imovit-test.cx0btphnat72.us-east-1.rds.amazonaws.com",
  db: "awsdev",
};

// URL a la que se enviará la solicitud
var url = "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getCars";

// Realizar la solicitud AJAX utilizando jQuery
$.ajax({
  url: url,
  method: "GET",
  data: data,
  success: function (response) {
    console.log(response); // Manejar la respuesta aquí
    alert(response);
  },
  error: function (xhr, status, error) {
    alert(status);
    alert(error);
    console.error(status, error); // Manejar cualquier error aquí
  },
});

// Inicializar el mapa
var mymap = L.map("mapid").setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// Función para mostrar la ubicación del usuario
function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng)
    .addTo(mymap)
    .bindPopup("You are within " + radius + " meters from this point")
    .openPopup();

  L.circle(e.latlng, radius).addTo(mymap);
}

// Función para manejar errores de geolocalización
function onLocationError(e) {
  alert(e.message);
}

// Añadir el mapa base de OpenStreetMap

// Añadir un marcador en una ubicación específica
// var marker = L.marker([51.5, -0.09]).addTo(mymap); // coordenadas del marcador

// // Añadir un popup al marcador
// marker.bindPopup("<b>Hello world!</b>").openPopup();

// Configurar opciones de geolocalización
mymap.locate({ setView: true, maxZoom: 16 });

// Asociar funciones de manejo de eventos
mymap.on("locationfound", onLocationFound);
mymap.on("locationerror", onLocationError);
