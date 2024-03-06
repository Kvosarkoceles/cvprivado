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
      funcionHoy();
      // var infowindowinnerText = tempDiv.querySelector(".infowindow").innerText;
      // // console.log('infowindowinnerText', infowindowinnerText);
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });

  start();
}

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
      centrarMapaEnMarcador(objeto[1].latitude, objeto[1].longitude, 15);
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
      "<button onclick='posicionesDate()' class='btn btn-block btn-outline-primary btn-sm'>Posiciones</button>" +
      "</div>"

    );

}


function centrarMapaEnMarcador(latitud, longitud, zoom) {
  mymap.setView([latitud, longitud], zoom);
}


document.addEventListener('DOMContentLoaded', function () {
  funcionHoy();
  document.getElementById('filtroTiempo').addEventListener('change', function () {
    var seleccionado = this.value; // Obtener el valor del elemento seleccionado

    // Ejecutar la función deseada basada en el valor seleccionado
    switch (seleccionado) {
      case 'hoy':
        funcionHoy();
        break;
      case 'ayer':
        funcionAyer();
        break;
      case 'semana-actual':
        funcionSemanaActual();
        break;
      case 'mes-actual':
        funcionMesActual();
        break;
      case 'ultimos-7-dias':
        funcionUltimos7Dias();
        break;
      case 'ultimos-30-dias':
        funcionUltimos30Dias();
        break;
      case 'personalizado':
        funcionPersonalizado();
        break;
      default:
      // Acción por defecto, si es necesario
    }
  });
});

function abrirModal() {
  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';

}

function funcionHoy() {


  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener los componentes de la fecha actual
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var año = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }

  // Crear una cadena de texto con el formato deseado
  var fechaActualFormateada = año + '-' + mes + '-' + dia + " " + "00:00:00";
  var fechaActualFormateada2 = año + '-' + mes + '-' + dia + " " + "23:59:59";
  // Imprimir la fecha actual
  dateInicial = fechaActualFormateada;
  dateFinal = fechaActualFormateada2;
  // alert("De: " + dateInicial + "  A: " + dateFinal);
}

function funcionAyer() {
   var fechaActual = new Date();
  var fechaAyer = new Date(fechaActual);
  fechaAyer.setDate(fechaActual.getDate() - 1);
  var diaAyer = fechaAyer.getDate();
  var mesAyer = fechaAyer.getMonth() + 1; // Los meses comienzan desde 0
  var añoAyer = fechaAyer.getFullYear();
  if (diaAyer < 10) {
    diaAyer = '0' + diaAyer;
  }
  if (mesAyer < 10) {
    mesAyer = '0' + mesAyer;
  }
  var fechaAyerFormateada = añoAyer + '-' + mesAyer + '-' + diaAyer + " " + "00:00:00";
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();
  if (diaActual < 10) {
    diaActual = '0' + diaActual;
  }
  if (mesActual < 10) {
    mesActual = '0' + mesActual;
  }
  var fechaActualFormateada = añoActual + '-' + mesActual + '-' + diaActual + " " + "23:59:59";
  dateInicial = fechaAyerFormateada;
  dateFinal = fechaActualFormateada;
 
}

function funcionSemanaActual() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener el día de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
  var diaSemana = fechaActual.getDay();

  // Restar los días transcurridos desde el inicio de la semana hasta hoy
  var diasTranscurridos = diaSemana === 0 ? 6 : diaSemana - 1; // Si es domingo, restar 6 días; si no, restar los días correspondientes

  // Clonar la fecha actual y restar los días transcurridos para obtener la fecha de inicio de la semana
  var fechaInicioSemana = new Date(fechaActual);
  fechaInicioSemana.setDate(fechaActual.getDate() - diasTranscurridos);

  // Obtener los componentes de la fecha de inicio de la semana
  var diaInicioSemana = fechaInicioSemana.getDate();
  var mesInicioSemana = fechaInicioSemana.getMonth() + 1; // Los meses comienzan desde 0
  var añoInicioSemana = fechaInicioSemana.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaInicioSemana < 10) {
    diaInicioSemana = '0' + diaInicioSemana;
  }
  if (mesInicioSemana < 10) {
    mesInicioSemana = '0' + mesInicioSemana;
  }

  // Formatear la fecha de inicio de la semana como texto
  var fechaInicioSemanaFormateada = añoInicioSemana + '-' + mesInicioSemana + '-' + diaInicioSemana + " " + "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = '0' + diaActual;
  }
  if (mesActual < 10) {
    mesActual = '0' + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada = añoActual + '-' + mesActual + '-' + diaActual + " " + "23:59:59";

  // Imprimir las fechas
  dateInicial = fechaInicioSemanaFormateada;
  dateFinal = fechaActualFormateada;

}

function funcionMesActual() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener el primer día del mes actual
  var primerDiaMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);

  // Obtener los componentes de la fecha del primer día del mes
  var diaInicioMes = primerDiaMes.getDate();
  var mesInicioMes = primerDiaMes.getMonth() + 1; // Los meses comienzan desde 0
  var añoInicioMes = primerDiaMes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaInicioMes < 10) {
    diaInicioMes = '0' + diaInicioMes;
  }
  if (mesInicioMes < 10) {
    mesInicioMes = '0' + mesInicioMes;
  }

  // Formatear la fecha de inicio del mes como texto
  var fechaInicioMesFormateada = añoInicioMes + '-' + mesInicioMes + '-' + diaInicioMes + " " + "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = '0' + diaActual;
  }
  if (mesActual < 10) {
    mesActual = '0' + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada = añoActual + '-' + mesActual + '-' + diaActual + " " + "23:59:59";

  // Imprimir las fechas
  dateInicial = fechaInicioMesFormateada;
  dateFinal = fechaActualFormateada;
  
  
}

function funcionUltimos7Dias() {

  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener la fecha siete días atrás
  var fechaSieteDiasAntes = new Date(fechaActual);
  fechaSieteDiasAntes.setDate(fechaActual.getDate() - 7);

  // Obtener los componentes de la fecha siete días atrás
  var diaSieteDiasAntes = fechaSieteDiasAntes.getDate();
  var mesSieteDiasAntes = fechaSieteDiasAntes.getMonth() + 1; // Los meses comienzan desde 0
  var añoSieteDiasAntes = fechaSieteDiasAntes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaSieteDiasAntes < 10) {
    diaSieteDiasAntes = '0' + diaSieteDiasAntes;
  }
  if (mesSieteDiasAntes < 10) {
    mesSieteDiasAntes = '0' + mesSieteDiasAntes;
  }

  // Formatear la fecha siete días atrás como texto
  var fechaSieteDiasAntesFormateada = añoSieteDiasAntes + '-' + mesSieteDiasAntes + '-' + diaSieteDiasAntes + " " + "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = '0' + diaActual;
  }
  if (mesActual < 10) {
    mesActual = '0' + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada = añoActual + '-' + mesActual + '-' + diaActual + " " + "23:59:59";

  // Imprimir las fechas

  dateInicial = fechaSieteDiasAntesFormateada;
  dateFinal = fechaActualFormateada;
 
  li();
}

function funcionUltimos30Dias() {

  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener la fecha treinta días atrás
  var fechaTreintaDiasAntes = new Date(fechaActual);
  fechaTreintaDiasAntes.setDate(fechaActual.getDate() - 30);

  // Obtener los componentes de la fecha treinta días atrás
  var diaTreintaDiasAntes = fechaTreintaDiasAntes.getDate();
  var mesTreintaDiasAntes = fechaTreintaDiasAntes.getMonth() + 1; // Los meses comienzan desde 0
  var añoTreintaDiasAntes = fechaTreintaDiasAntes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaTreintaDiasAntes < 10) {
    diaTreintaDiasAntes = '0' + diaTreintaDiasAntes;
  }
  if (mesTreintaDiasAntes < 10) {
    mesTreintaDiasAntes = '0' + mesTreintaDiasAntes;
  }

  // Formatear la fecha treinta días atrás como texto
  var fechaTreintaDiasAntesFormateada = añoTreintaDiasAntes + '-' + mesTreintaDiasAntes + '-' + diaTreintaDiasAntes + " " + "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = '0' + diaActual;
  }
  if (mesActual < 10) {
    mesActual = '0' + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada = añoActual + '-' + mesActual + '-' + diaActual + " " + "23:59:59";

  // Imprimir las fechas


  dateInicial = fechaTreintaDiasAntesFormateada;
  dateFinal = fechaActualFormateada;


}

function funcionPersonalizado() {
  // Tu lógica para la opción 'Personalizado'
  // var fechasFormulario = document.getElementById('fechasFormulario');
  // fechasFormulario.style.display = 'bloc';
  abrirModal();
  console.log("Personalizado seleccionado");
}


