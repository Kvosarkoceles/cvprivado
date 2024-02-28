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
var dataVeiculo;
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
      addMarker(objeto[1].latitude, objeto[1].longitude, dataVeiculo);
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

      var jsonString = htmlSinScripts.replace(/\s/g, "");

      // console.log("inicionMatch:", inicionMatch);
      //  console.log(response);
      // Buscar el elemento que contiene el estado de la ignición

      // Crear un elemento jQuery a partir del HTML recibido
      var $html = $(jsonString);

      console.log("$html ", $html);

      var valuesArray = Object.values($html);

      // Obtener el primer elemento del array (correspondiente al primer valor del objeto JSON)
      var primerElemento = valuesArray[0].innerText;

      console.log("primerElemento: ", primerElemento);

      console.log("primerElemento: ", typeof primerElemento);

      dataVeiculo = {
        placa: "",
        lable: "",
        velocidad: "",
        ultimoReporte: "",
        conductor: "",
        velocidadmaxima: "",
        velocidadmedia: "",
        ignicion: "",
        recorrido: "",
        detenido:"",
      };

      // Expresión regular para encontrar el valor entre "expand_more" y "Velocidad"
      var placaAndLabel = /expand_more(.*?)Velocidad/;
      var velocidad_Limitador = /Velocidad(.*?)Ignición/;
      var UltimoReporte_Limitador = /UltimoReporte(.*?)UltimaPosición/;
      var conductor_Limitador = /Conductor(.*?)VerPosiciones/;
      var vel_max_Limitador = /Velocidadmaxima(.*?)VelocidadPromedio/;
      var vel_media_Limitador = /VelocidadPromedio(.*?)DintanciaRecorrida/;
      var ignicion_Limitador = /Ignición:(.*?)Inmovilizador/;
      var recorrido_Limitador = /DintanciaRecorrida(.*?)TiempoDetenido/;
      var detenido_Limitador = /TiempoDetenido(.*?)Tiempoenmovimiento/;

      // Buscar coincidencias en el string
      var matches = primerElemento.match(placaAndLabel);
      var matchesVel = primerElemento.match(velocidad_Limitador);
      var matchesUltimoReport = primerElemento.match(UltimoReporte_Limitador);
      var matchesConductor = primerElemento.match(conductor_Limitador);
      var matchesVelMax = primerElemento.match(vel_max_Limitador);
      var matchesVelMedia = primerElemento.match(vel_media_Limitador);
      var matchesignicion = primerElemento.match(ignicion_Limitador);
      var matchesrecorrido = primerElemento.match(recorrido_Limitador);
      var matchesdetenido = primerElemento.match(detenido_Limitador);

      // lable y placa
      if (matches && matches.length > 1) {
        var recortar = /\(([^)]+)\)/;
        var matchesInsideParentheses = matches[1].trim().match(recortar);
        var contentInsideParentheses = "";
        if (matchesInsideParentheses && matchesInsideParentheses.length > 1) {
          contentInsideParentheses = matchesInsideParentheses[1];
        }
        var contentOutsideParentheses = matches[1]
          .trim()
          .replace(recortar, "")
          .trim();
        dataVeiculo.lable = contentInsideParentheses;
        dataVeiculo.placa = contentOutsideParentheses;
      } else {
        dataVeiculo.lable = "";
        dataVeiculo.placa = "";
      }
      // velocidad
      if (matchesVel && matchesVel.length > 1) {
        dataVeiculo.velocidad = matchesVel[1].trim();
      } else {
        dataVeiculo.velocidad = "";
      }
      // matchesUltimoReport
      if (matchesUltimoReport && matchesUltimoReport.length > 1) {
        dataVeiculo.ultimoReporte = matchesUltimoReport[1].trim();
      } else {
        dataVeiculo.ultimoReporte = "";
      }
      // Conductor
      if (matchesConductor && matchesConductor.length > 1) {
        dataVeiculo.conductor = matchesConductor[1].trim();
      } else {
        dataVeiculo.conductor = "";
      }
      // VelMax
      if (matchesVelMax && matchesVelMax.length > 1) {
        dataVeiculo.velocidadmaxima = matchesVelMax[1].trim();
      } else {
        dataVeiculo.velocidadmaxima = "";
      }
      // VelMedia
      if (matchesVelMedia && matchesVelMedia.length > 1) {
        dataVeiculo.velocidadmedia = matchesVelMedia[1].trim();
      } else {
        dataVeiculo.velocidadmedia = "";
      }
      // ignicion
      if (matchesignicion && matchesignicion.length > 1) {
        dataVeiculo.ignicion = matchesignicion[1].trim();
      } else {
        dataVeiculo.ignicion = "";
      }
      // recorrido
      if (matchesrecorrido && matchesrecorrido.length > 1) {
        dataVeiculo.recorrido = matchesrecorrido[1].trim();
      } else {
        dataVeiculo.recorrido = "";
      }
      // detenido
      if (matchesdetenido && matchesdetenido.length > 1) {
        dataVeiculo.detenido = matchesdetenido[1].trim();
      } else {
        dataVeiculo.detenido = "";
      }
      // Imprimir las llaves
      console.log(dataVeiculo);
      // var infowindowinnerText = tempDiv.querySelector(".infowindow").innerText;
      // // console.log('infowindowinnerText', infowindowinnerText);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });

  start();
}

function addMarker(latitude, longitude, dataVeiculo) {
  L.marker([latitude, longitude])
    .addTo(mymap)
    .bindPopup(
      "<b>Placa:</b> " +
        dataVeiculo.placa +
        "<b>   Rótulo:</b> " +
        dataVeiculo.lable +
        "<br>" +
        "<b>Conductor:</b> " +
        dataVeiculo.conductor +
        "<br>" +
        "<b>Ultimo Reporte:</b> " +
        dataVeiculo.ultimoReporte +
        "<br>" +
        "<b>Velocidad:</b> " +
        dataVeiculo.velocidad +
        "<b>   Ignicion:</b> " +
        dataVeiculo.ignicion +
        "<br>" +
        "<b>Vel.Max.:</b> " +
        dataVeiculo.velocidadmaxima +
        "<b>   Vel. Med.:</b> " +
        dataVeiculo.velocidadmedia +
        "<br>" +
        "<b>Recorrido:</b> " +
        dataVeiculo.recorrido +       
        "<b>   Tiempo detenido:</b> " +
        dataVeiculo.detenido
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
