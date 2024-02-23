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

var datosVehiculos = [
    {"typeD":"veic","vehiculoTipo":"450","ID_disp":"741852963","settings":"null","latitude":"19.31063","longitude":"-99.25656","origen":"GPS","radio":null,"evento":"EMG","evento_id":"1","modo":"","saida1":"0","curso":"0","veloc":"0","ignicao":"1","CorVeic":"#008000","PlacaVeic":"Xiaomi","veic_rotulo":"Poco X3 5G"},
    {"typeD":"veic","vehiculoTipo":"546","ID_disp":"1970000012","settings":"null","latitude":"19.30923","longitude":"-99.26009","origen":"GPS","radio":null,"evento":"STT","evento_id":"9","modo":"0","saida1":"0","curso":"0.00","veloc":"0","ignicao":"0","CorVeic":"#000000","PlacaVeic":"06KFU7","veic_rotulo":"Lithium - 06KFU7"}
  ];
// Realizar la solicitud AJAX utilizando jQuery
$.ajax({
  url: url,
  method: "POST",
  data: data,
  success: function (response) {
    //   alert("response" +response); 
    // datosVehiculos = response;
    // console.log(response); // Manejar la respuesta aquí
    // alert("datosVehiculos" +datosVehiculos); 


  },
  error: function (xhr, status, error) {
  

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


// alert("vehiculo"); 
// alert(datosVehiculos);


$.each(datosVehiculos, function(index, vehiculo) {  

    var latitud = parseFloat(vehiculo.latitude);
    var longitud = parseFloat(vehiculo.longitude);

    // Crear marcador y añadirlo al mapa
    L.marker([latitud, longitud]).addTo(mymap)
      .bindPopup('<b>Placa:</b> ' + vehiculo.PlacaVeic + '<br>' + '<b>Rótulo:</b> ' + vehiculo.veic_rotulo);
  });


// Función para mostrar la ubicación del usuario
// function onLocationFound(e) {
//   var radius = e.accuracy / 2;

//   L.marker(e.latlng)
//     .addTo(mymap)
//     .bindPopup("You are within " + radius + " meters from this point")
//     .openPopup();

//   L.circle(e.latlng, radius).addTo(mymap);

// }

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
