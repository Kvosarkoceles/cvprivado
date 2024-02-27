// Datos para enviar en la solicitud
var data = {
  lgw_id: 133,
  codcliente: 87,
  lgw_codcliente_criacao: "",
  dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
  db: "awsdev",
};

// URL a la que se enviará la solicitud
var url = "https://demo.imovit.net/plataforma/DeviceTrackerWS/wsapi/getCars";
// var url2 = "https://demo.imovit.net/plataforma/lib/php/fastQuerys.php?getDevices";
// Inicializar el mapa
var mymap = L.map("mapid").setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

// alert(datosVehiculos);
var velocidad = "";
informacion();
// start();
function start() {
  // alert("datosVehiculos");
  eliminarTodosLosMarcadores();

  $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      var objeto = JSON.parse(response);
      addMarker(
        objeto[1].latitude,
        objeto[1].longitude,
        objeto[1].PlacaVeic,
        objeto[1].veic_rotulo,
        velocidad
      );
      centrarMapaEnMarcador(objeto[1].latitude, objeto[1].longitude);
      muestralocalizacion();
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

setInterval(start, 10000);

async function informacion() {
  // console.log("informacion funcion" + velocidad);
  var data = {
    id_disp: 1970000012,
    lwg_id: 133,
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev",
  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getInfo/1970000012";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      // Crear un elemento div temporal
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = response;
      var infowindowContent = tempDiv.querySelector(".infowindow").innerHTML;

      var htmlSinScripts = infowindowContent.replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ""
      );

      // Expresiones regulares para extraer los valores
      var velocidadMatch = htmlSinScripts.match(
        /Velocidad<\/label>\s*<span>(.*?)<\/span>/
      );

      var inicionMatch = htmlSinScripts.match(
        /Ignicion: <\/label>\s*<span>(.*?)<\/span>/
      );


      // Extraer los valores de las coincidencias
      velocidad = velocidadMatch ? velocidadMatch[1].trim() : "N/A";
      // alert(velocidad);


      // Extraer los valores de las coincidencias
     


    

      var jsonString = htmlSinScripts.replace(/\s/g, '');

      // console.log("inicionMatch:", inicionMatch);
      //  console.log(response);
      // Buscar el elemento que contiene el estado de la ignición
   
      // Crear un elemento jQuery a partir del HTML recibido
      var $html = $(jsonString);

      console.log('$html ' ,$html );
      
      // Encontrar el elemento que contiene el estado de la ignición
      var ignicionElement = $html.find('.ignicion').next('div');
      
      // Obtener el estado de la ignición
      var estadoIgnicion = ignicionElement.text().trim();
      
      // Imprimir el estado de la ignición
      // console.log("Estado de la ignicionElement:", ignicionElement);



      // Obtener el texto dentro del elemento encontrado
      // console.log(typeof infowindowContent);
      var estadoIgnicion = infowindowContent;

      // Imprimir el estado de la ignición
      // console.log("Estado de la ignición:", estadoIgnicion);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });

  start();
}

function addMarker(latitude, longitude, PlacaVeic, veic_rotulo, vel) {
  L.marker([latitude, longitude])
    .addTo(mymap)
    .bindPopup(
      "<b>Placa:</b> " +
        PlacaVeic +
        "<br>" +
        "<b>Rótulo:</b> " +
        veic_rotulo +
        "<br>" +
        "<b>Velocidad:</b> " +
        vel
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
