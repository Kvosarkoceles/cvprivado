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

// Inicializar el mapa
var mymap = L.map("mapid").setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// alert(datosVehiculos);
start();
function start() {
  // alert("datosVehiculos");
  eliminarTodosLosMarcadores();

  $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      var objeto = JSON.parse(response);

      console.log(response);
      informacion();
      // L.marker([objeto[0].latitude, objeto[0].longitude])
      // .addTo(mymap)
      // .bindPopup(
      //   "<b>Placa:</b> " +
      //   objeto[0].PlacaVeic +
      //     "<br>" +
      //     "<b>Rótulo:</b> " +
      //     objeto[0].veic_rotulo
      // );

      L.marker([objeto[1].latitude, objeto[1].longitude])
        .addTo(mymap)
        .bindPopup(
          "<b>Placa:</b> " +
            objeto[1].PlacaVeic +
            "<br>" +
            "<b>Rótulo:</b> " +
            objeto[1].veic_rotulo +
            "<br>" +
            "<b>Rótulo:</b> " +
            objeto[0].ignicao
        );

      muestralocalizacion();
      //console.log(response); // Manejar la respuesta aquí
      // alert("datosVehiculos" +datosVehiculos);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

setInterval(start, 10000);

function informacion() {
  var data = {
    id_disp: 1970000012,
    lwg_id: 133,
    dbip: "imovit-test.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev",
  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getInfo/1970000012";

  $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      // Crear un elemento div temporal
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = response;
      var infowindowContent = tempDiv.querySelector('.infowindow').innerHTML;

      var htmlSinScripts = infowindowContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');


      // Expresiones regulares para extraer los valores
var velocidadMatch = htmlSinScripts.match(/Velocidad<\/label>\s*<span>(.*?)<\/span>/);
var ignicionMatch = htmlSinScripts.match(/<label class="ignicion">Ignición: <\/label>\s*(.*?)\s*$/);



var inmovilizadorMatch = htmlSinScripts.match(/Inmovilizador:<\/label>\s*(.*?)\s*<\/div>/);
var tensionMatch = htmlSinScripts.match(/<i class="fa fa-battery-three-quarters fa-fw"><\/i>\s*(.*?)\s*<\/div>/);
var batteryMatch = htmlSinScripts.match(/<img width="20" src="img\/icons\/battery.svg"><\/label>\s*(.*?)\s*<\/div>/);

// Extraer los valores de las coincidencias
var velocidad = velocidadMatch ? velocidadMatch[1].trim() : 'N/A';
var ignicion = ignicionMatch ? ignicionMatch[1].trim() : 'N/A';
var inmovilizador = inmovilizadorMatch ? inmovilizadorMatch[1].trim() : 'N/A';
var tension = tensionMatch ? tensionMatch[1].trim() : 'N/A';
var battery = batteryMatch ? batteryMatch[1].trim() : 'N/A';


console.log("Velocidad:", velocidad);
console.log("Ignición:", ignicion);
console.log("Inmovilizador:", inmovilizador);
console.log("Tensión:", tension);
console.log("Battery:", battery);


console.log(htmlSinScripts);


    
      // console.log(response);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
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
