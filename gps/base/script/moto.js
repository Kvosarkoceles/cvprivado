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
var mymap = L.map("mapid").setView([19.3910844, -99.473292], 15); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(mymap);
// alert(datosVehiculos);
var velocidad = "";
var dataVeiculo;
informacion();
// start();
function start() {
  // alert("datosVehiculos");
  var posicionesCard = document.getElementById('posicionesCard');

  // Mostrar el botón
  posicionesCard.style.display = 'none';

  eliminarTodosLosMarcadores();

  $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      var objeto = JSON.parse(response);
      var fecha = dataVeiculo.ultimoReporte.substring(0, 10);
      var hora = dataVeiculo.ultimoReporte.substring(10);

      $('#label').text(dataVeiculo.lable);
      $('#odometro').text(dataVeiculo.odometro + " km");
      $('#conductor').text(dataVeiculo.conductor);
      $('#fecha').text(fecha);
      $('#hora').text(hora);
      $('#recorrido').text(dataVeiculo.recorrido);
      $('#velMed').text(dataVeiculo.velocidadmedia);
      $('#velMax').text(dataVeiculo.velocidadmaxima);
      $('#velocidad').text(dataVeiculo.velocidad);

      $('#detenido').text(dataVeiculo.detenido);
      $('#movimiento').text(dataVeiculo.movimiento);

      addMarker(objeto[1].latitude, objeto[1].longitude, dataVeiculo);
      centrarMapaEnMarcador(objeto[1].latitude, objeto[1].longitude);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

var intervalID = setInterval(start, 10000);

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

      var valuesArray = Object.values($html);

      // Obtener el primer elemento del array (correspondiente al primer valor del objeto JSON)
      var primerElemento = valuesArray[0].innerText;

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
        detenido: "",
        movimiento: "",
        odometro: "",
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
      var movimiento_Limitador = /Tiempoenmovimiento(.*?)Odometro/;
      var odometro_Limitador = /Odometro(.*?)ConsumoCombustible/;

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
      var matchesmovimiento = primerElemento.match(movimiento_Limitador);
      var matchesodometro = primerElemento.match(odometro_Limitador);

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
      // movimiento
      if (matchesmovimiento && matchesmovimiento.length > 1) {
        dataVeiculo.movimiento = matchesmovimiento[1].trim();
      } else {
        dataVeiculo.movimiento = "";
      }
      // odometro
      if (matchesodometro && matchesodometro.length > 1) {
        dataVeiculo.odometro = matchesodometro[1].trim();
      } else {
        dataVeiculo.odometro = "";
      }
      // Imprimir las llaves

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
  var myIcon = L.icon({
    iconUrl: "546.svg",
    shadowUrl: "marker-shadow.png",
  });

  L.marker([latitude, longitude])
    .addTo(mymap)
    .bindPopup(
      "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<span style='font-weight: bold; text-align: center;'>" +
      dataVeiculo.ignicion +
      "</span>" +
      "</div>" +
      "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<span style='font-weight: bold; text-align: center;'>" +
      dataVeiculo.placa +
      "</span>" +
      "</div>" +
      "<div style='margin-bottom: 5px;'>" +
      "<span style='font-weight: bold;'>Velocidad:</span> " +
      dataVeiculo.velocidad +
      "</div>" +
      "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<button onclick='posiciones()' class='btn btn-block btn-outline-primary btn-sm'>Posiciones</button>" +
      "</div>"

    );



}


function posiciones() {
  clearInterval(intervalID);
  eliminarTodosLosMarcadores();
  var button = document.getElementById('myUbicacion');

  // Cambia el estilo de visualización para mostrar el botón
  button.style.display = 'block';
  getPosiciones();

  mymap.setZoom(15);
  var posicionesCard = document.getElementById('posicionesCard');
  // Mostrar el botón
  posicionesCard.style.display = 'block';


  var informe = document.getElementById('informe');
  // Mostrar el botón
  informe.style.display = 'block';

  var divInforme = document.getElementById('informe');

  // Elimina todo el contenido dentro del div
  divInforme.innerHTML = '';

  // agrearTablaDePosiciones();


  // Agregar un nuevo <tr> a la tabla con un atributo data-widget y un texto dentro del <td>
  var newRow = $(
    
    
   


    '<tr data-widget="expandable-table" aria-expanded="false">'+
    '<td>'+
    '<i class="expandable-table-caret fas fa-caret-right fa-fw"></i>10:48:07</td>'+
    '</tr>'+
    '<tr class="expandable-body d-none">'+
    '<td>'+
        '<div class="p-0" style="">'+
            '<table class="table table-hover">'+
                '<tbody>'+
                  '<tr data-widget="expandable-table" aria-expanded="false">'+
                        '<td>'+
                           ' Lat:'+
                       ' </td>'+
                        '<td>898908098</td>'+
                    '</tr>'+
                   '<tr data-widget="expandable-table" aria-expanded="false">'+
                        '<td>'+
                            'Lat:'+
                        '</td>'+
                        '<td>898908098</td>'+
                    '</tr>'+
                    '<tr data-widget="expandable-table" aria-expanded="false">'+
                        '<td>'+
                            'Lat:'+
                      '</td>'+
                       '<td>898908098</td>'+
                    '</tr>'+
                    '<tr data-widget="expandable-table" aria-expanded="false">'+
                        '<td>'+
                            'Lat:'+
                        '</td>'+
                        '<td>898908098</td>'+
                    '</tr>'+
                    '<tr data-widget="expandable-table" aria-expanded="false">'+
                        '<td>'+
                            'Lat:'+
                        '</td>'+
                        '<td>898908098</td>'+
                    '</tr>'+
                '</tbody>'+
            '</table>'+
        '</div>'+
    '</td>'+
'</tr>'
);

  // Agregar el nuevo <tr> a la tabla
  $('#tablaPosiciones tbody').append(newRow);





}




function agrearTablaDePosiciones() {

  var contenido = `
        <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
                <div class="col-sm-12 col-md-6"></div>
                <div class="col-sm-12 col-md-6"></div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <table id="example2" class="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                        <thead>
                            <tr>
                                <th class="sorting sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Rendering engine</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Browser</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">Platform(s)</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Engine version</th>
                                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Contenido de la tabla -->
                        </tbody>
                        <tfoot>
                            <tr>
                                <th rowspan="1" colspan="1">Rendering engine</th>
                                <th rowspan="1" colspan="1">Browser</th>
                                <th rowspan="1" colspan="1">Platform(s)</th>
                                <th rowspan="1" colspan="1">Engine version</th>
                                <th rowspan="1" colspan="1">CSS grade</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                        <ul class="pagination">
                            <li class="paginate_button page-item previous disabled" id="example2_previous">
                                <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                            </li>
                            <!-- Otros elementos de paginación -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Agregar el contenido al div con id "informe"
  $("#informe").html(contenido);
}
function verUbicacion() {

  start();
  intervalID = setInterval(start, 10000);

  var button = document.getElementById('myUbicacion');
  button.style.display = 'none';

  var informe = document.getElementById('informe');

  // Mostrar el botón
  button.style.display = 'none';

  mostrarUltimoReporte();
}
function mostrarUltimoReporte() {

  var contenido = `
  <div style='margin-bottom: 5px; margin-top: 15px; text-align: center; color: white;'>
      <span style='font-weight: bold;' id="label"></span>
  </div>
  <div style='margin-bottom: 5px; text-align: center; color: white;' id="odometro">
  </div>
  <div style='margin-bottom: 5px; margin-top: 15px; text-align: left; color: white;'>
      <span style='font-weight: bold;'>Conductor:</span>
  </div>
  <div style='margin-bottom: 5px; text-align: left; color: white;' id="conductor">
  </div>
  <div style='margin-bottom: 5px; color: white; '>
      <table style="width: 100%; text-align: left;">
          <tr>
              <td style='font-weight: bold; color: white;'>Fecha:</td>
              <td style='font-weight: bold; color: white;'>Hora:</td>
          </tr>
          <tr>
              <td style='color: white;' id="fecha"></td>
              <td style='color: white;' id="hora"></td>
          </tr>
      </table>
  </div>
  <div style='margin-bottom: 5px; color: white;'>
      <table style="width: 100%; text-align: left;">
          <tr>
              <td style='font-weight: bold; color: white;'>Velocidad:</td>
              <td style='font-weight: bold; color: white;'>Recorrido:</td>
          </tr>
          <tr>
              <td style='color: white;' id="velocidad"></td>
              <td style='color: white;' id="recorrido"></td>
          </tr>
      </table>
  </div>
  <div style='margin-bottom: 5px; color: white;'>
      <table style="width: 100%; text-align: left;">
          <tr>
              <td style='font-weight: bold; color: white;'>Vel. Med.:</td>
              <td style='font-weight: bold; color: white;'>Vel. Máx.:</td>
          </tr>
          <tr>
              <td style='color: white;' id="velMed"></td>
              <td style='color: white;' id="velMax"></td>
          </tr>
      </table>
  </div>
  <div style='margin-bottom: 5px; color: white;'>
      <table style="width: 100%; text-align: left;">
          <tr>
              <td style='font-weight: bold; color: white;'>Detenido:</td>
              <td style='font-weight: bold; color: white;'>Movimiento:</td>
          </tr>
          <tr>
              <td style='color: white;' id="detenido"></td>
              <td style='color: white;' id="movimiento"></td>
          </tr>
      </table>
  </div>
`;

  // Agregar el contenido al div con id "informe"
  $("#informe").html(contenido);
}
async function getPosiciones() {
  // console.log("informacion funcion" + velocidad);
  var data = {
    ID_disp: 1970000012,
    f1: "2024-02-24 00:00:00",
    f2: "2024-02-25 23:59:59",
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
      console.log("positions: ", objeto);

      var coordinates = [];

      var posicionArray = [];



      $.each(objeto.positions, function (index, item) {
        var coords = item.latitude + "," + item.longitude;








        var numeroEntero = parseInt(item.veloc, 10);


        var posicion = {
          latitude: item.latitude,
          longitude: item.longitude,
          veloc: item.veloc,
        };

        if (numeroEntero > 0) {
          // alert(typeof numeroEntero + numeroEntero);
          posicionArray.push(posicion);


        } else {
          // alert(typeof numeroEntero + numeroEntero);
          coordinates.push(posicion);
          addMarkerposicion(posicion);

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


function addMarkerposicion(data) {
  L.marker([data.latitude, data.longitude])
    .addTo(mymap)
    .bindPopup("<b>velocidad: </b> " + data.veloc);
}


function centrarMapaEnMarcador(latitud, longitud) {
  mymap.setView([latitud, longitud], 15);
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
