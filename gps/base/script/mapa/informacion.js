
var dataInfo = {
  posiciones: [],
  eventos: [],
  informacionMoto: {
    PlacaVeic: "",
    evento: "",
    evento_id: "",
    ignicao: "",
    latitude: "",
    longitude: "",
    origen: "",
    veic_rotulo: "",
    ultimaPosicion: "",
    data_gps_br: "",
  },
  igniciones: [],
  cars: [],
  dateInicion: "",
  dateFin: ""

}



document.addEventListener('DOMContentLoaded', function () {
  ejecutarFuncionesAsincronas()
});




async function ejecutarFuncionesAsincronas() {
  try {

    // cerrarTabla();
    togglePreloader('show');
    await funcionUltimos100Dias();
    togglePreloader('show');
    await getCar();
    togglePreloader('show');
    await eventos();
    togglePreloader('show');
    await posiciones(dataInfo.dateInicion, dataInfo.dateFin);
    togglePreloader('show');
    await Igniciones(dataInfo.dateInicio, dataInfo.dateFin);
    togglePreloader('show');
    await accionamientos();
    togglePreloader('show');
    funcionHoy();
    // dataTemp = dataInfo;
    getAlertas();
    var posiOy = await filtraData(dataInfo.posiciones, dataInfo.dateInicion, dataInfo.dateFin);

    dataTemp.posiciones = posiOy;
    dataTemp.eventos = dataInfo.eventos;
    var posiMasReciente = [];
    posiMasReciente = ultimaPosicion(dataInfo.posiciones[dataInfo.posiciones.length - 1], dataInfo.eventos[dataInfo.eventos.length - 1])



    // console.log(posiMasReciente);
    dataTemp.informacionMoto.ultimaPosicion = posiMasReciente;
    togglePreloader('show');
    filtarViajes(dataInfo.igniciones)
    // dataTemp.igniciones= ignicionesOy;
    $('#preloader').hide();
    togglePreloader('hide');

    $('#boton3').text('Viajes');
    $('#boton3').show();
    $('#boton3').click(function () {
      // Cambiar la función a mostrarPosiciones()
      viajes();
    });
    $('#ReporteViajes').hide();



    localizar();

    //   $(document).on('change', '#filtroTiempo', function (event) {

    //     filtarInformacion();
    //    // alert($("#servicio option:selected").text())
    //    // $('#servicioSelecionado').val($("#servicio option:selected").text());
    //  });
    // console.log("dataInfo")
    // console.log(dataInfo)
    // console.log("dataTemp")
    // console.log(dataTemp)



    cerrarTabla(1);
    cerrarTabla(2);
  } catch (error) {
    console.error(error);
  }
}


function init() {
  funcionUltimos100Dias()
  getCar()
  posiciones(dataInfo.dateInicion, dataInfo.dateFin)
  eventos()
  Igniciones(dataInfo.dateInicion, dataInfo.dateFin)
  accionamientos()
  // ultimaPosicion()
  // console.log(dataInfo.informacionMoto.latitude);
  addMarkerUtimaPosicion();

  // console.log(dataInfo);



}
// intervalID = setInterval(init, 10000);




async function posiciones(date1, date2) {
  var data = {
    ID_disp: 1970000012,
    f1: date1,
    f2: date2,
    lgw_id: 133,
    db: "awsdev",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
  };

  var url = "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getPositionsFast";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      objeto = JSON.parse(response);
      // console.log("Posiciones tamaño")
      // console.log(objeto.length)
      // console.log(objeto)
      // console.log(data)
      dataInfo.posiciones = objeto;



      var objetoMasReciente = ultimaPosicion(objeto[objeto.length - 1], dataInfo.eventos[dataInfo.eventos.length - 1])

      // console.log(objetoMasReciente);
      dataInfo.informacionMoto.ultimaPosicion = objetoMasReciente;
      dataInfo.informacionMoto.latitude = objetoMasReciente.latitude;
      dataInfo.informacionMoto.longitude = objetoMasReciente.longitude;
      dataInfo.informacionMoto.data_gps_br = objetoMasReciente.data_gps_br;
      dataInfo.informacionMoto.evento = objetoMasReciente.event;
      dataInfo.informacionMoto.evento_id = objetoMasReciente.event_id;
      dataInfo.informacionMoto.origen = objetoMasReciente.origen;
      // console.log("Ultima posicion");
      // console.log(dataInfo.informacionMoto);
      var distancia = parseInt(dataInfo.informacionMoto.ultimaPosicion.distancia) / 1000;
      var fecha = objetoMasReciente.data_gps_br.substring(0, 10);
      var hora = objetoMasReciente.data_gps_br.substring(10);

      $('#label').text(dataInfo.informacionMoto.veic_rotulo);
      $('#odometro').text(distancia + " km");
      $('#conductor').text("Miguel Mendoza");
      $('#fecha').text(fecha);
      $('#hora').text(hora);
      $('#recorrido').text(objetoMasReciente.veloc + " km");
      $('#velMed').text(objetoMasReciente.veloc + " km/h");
      $('#velMax').text(objetoMasReciente.veloc + " km/h");
      $('#velocidad').text(objetoMasReciente.veloc + " km/h");
      $('#detenido').text("00:00:00 hrs");
      $('#movimiento').text("00:00:00 hrs");

      $('#posicionesCard').hide();
      $('#informe').show();
      // $('#informe').hide();

      $('#boton1').hide();
      $('#boton2').hide();
      $('#boton3').hide();
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });

}

async function eventos() {
  var data = {
    lgw_id: 133,
    event: "",
    event_id: "",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev",
  };
  var url = "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getEventsAlert";
  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {

      //  objeto = JSON.parse(response.data);

      dataInfo.eventos = response.data;


    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}
async function getCar() {
  var data = {
    lgw_id: 133,
    codcliente: 87,
    lgw_codcliente_criacao: "",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev",
  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getCars";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      objeto = JSON.parse(response);
      dataInfo.cars = objeto;
      dataInfo.informacionMoto.latitude = objeto[1].latitude;
      dataInfo.informacionMoto.longitude = objeto[1].longitude;
      dataInfo.informacionMoto.origen = objeto[1].origen;
      dataInfo.informacionMoto.evento = objeto[1].evento;
      dataInfo.informacionMoto.evento_id = objeto[1].evento_id;
      dataInfo.informacionMoto.ignicao = objeto[1].ignicao;
      dataInfo.informacionMoto.PlacaVeic = objeto[1].PlacaVeic;
      dataInfo.informacionMoto.veic_rotulo = objeto[1].veic_rotulo;
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}
async function Igniciones(date1, date2) {
  var data = {
    ID_disp: 1970000012,
    f1: date1,
    f2: date2,
    lgw_id: 133,
    db: 'awsdev',
    dbip: 'imovit.cx0btphnat72.us-east-1.rds.amazonaws.com'

  };

  var url =
    "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getReportsIngnition";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      objeto = JSON.parse(response);
      dataInfo.igniciones = objeto;

    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}

async function accionamientos() {

  await $.ajax({
    url: "https://siad.imovit.net/wsapi/getIconsActions",
    method: "GET",
    success: function (response) {
      objeto = JSON.parse(response)

      var objetosFiltrados = objeto.data.filter(function (objeto) {
        return objeto.acionamento === "UP";
      });
      dataInfo.accionamientos = objetosFiltrados

      // Aquí puedes manejar la respuesta como desees
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener los datos:", error);
      // Aquí puedes manejar el error, si ocurre alguno
    }
  });
}


function togglePreloader(action) {
  var SELECTOR_PRELOADER = '.preloader';

  var $preloader = $(SELECTOR_PRELOADER);

  if (action === 'show') {
    // Mostrar el preloader
    if ($preloader) {
      $preloader.css('height', ''); // Eliminar la altura establecida
      $preloader.children().show(); // Mostrar los elementos hijos
    }
  } else if (action === 'hide') {
    // Ocultar el preloader
    if ($preloader) {
      $preloader.css('height', 0); // Establecer altura a 0 para ocultar
      setTimeout(function () {
        $preloader.children().hide(); // Ocultar los elementos hijos después de una pequeña espera
      }, 200);
    }
  } else {
    // Acción no válida
    console.error('Acción no válida para togglePreloader. Debe ser "show" o "hide".');
  }
}



async function tablaUltimaPosicion() {
  var ifo = [];

  // console.log("tabla Ultima Posicion")
  // console.log(dataInfo.informacionMoto.ultimaPosicion)
  // $("#fechaUltimaPosicion").text(dataInfo.informacionMoto.ultimaPosicion.data_gps_br);
  //  var direcion = verDireccio(19.30922, -99.2601, "direccionUltimaPosicion");
  // $("#direccionUltimaPosicion").text(direcion);
  var fechaUltimaPosicion = dataInfo.informacionMoto.ultimaPosicion.data_gps_br
  ifo.push(fechaUltimaPosicion);
  var ultimoEvento = dataInfo.eventos[0].desc + " " + dataInfo.eventos[0].data_gps_br
  ifo.push(ultimoEvento);

  var direccion = "";
  
  await axios
    .get(
      "https://nominatim.openstreetmap.org/reverse?lat=" +
      dataInfo.informacionMoto.ultimaPosicion.latitude +
      "&lon=" +
      dataInfo.informacionMoto.ultimaPosicion.longitude +
      "&format=json"
    )
    .then(function (response) {
      // Procesar respuesta
      direccion = response.data.display_name;
      // console.log("address");
      // console.log(response);
      // console.log(response.data.display_name);
      // if (response.data.address.state === "Tibesti") {
      //     verDirecciooole(a, b, c)
      // }
    })
    .catch(function (error) {
      console.log(error);
    });

  ifo.push(direccion);
  var velocidad = dataInfo.informacionMoto.ultimaPosicion.veloc + " km/h"
  ifo.push(velocidad);
  var odometro = Math.round((dataInfo.informacionMoto.ultimaPosicion.distancia) / 1000) + " km/h"
  ifo.push(odometro);
  var ignicao = "";
  if (dataInfo.informacionMoto.ultimaPosicion.ignicao === "0") {
    ignicao = "OFF";
  } else {
    ignicao = "ON";
  }

  ifo.push(ignicao);
  var origen = dataInfo.informacionMoto.ultimaPosicion.origen
  ifo.push(origen);
  var satelites = dataInfo.informacionMoto.ultimaPosicion.satelites
  ifo.push(satelites);
  var tensao = dataInfo.informacionMoto.ultimaPosicion.tensao
  ifo.push(tensao);


  // $("#origenUltimaPosicion").text(Origen);

  // var Satelites = dataInfo.informacionMoto.ultimaPosicion.satelites

  // $("#satelitesUltimaPosicion").text(Satelites);

  // var bateria = dataInfo.informacionMoto.ultimaPosicion.tensao

  // // alert(bateria)
  // $("#bateriaUltimaPosicion").text(bateria);
  // console.log(dataInfo.accionamientos)
  // var event = dataInfo.eventos[0].desc + " " + dataInfo.eventos[0].data_gps_br

  // $("#eventoUltimaPosicion").text(event);





  const table = new DataTable('#example1');
  clearTable(table)


  // Automatically add a first row of data
  addNewRow(table, ifo);



}

function addNewRow(table, array) {

  table.row
    .add(array)
    .draw(false);


}
function clearTable(table) {
  table.clear().draw();
}

function obtenerDescripcionPorActId(id) {
  let entrada = dataInfo.accionamientos.find(function (elemento) {
    return elemento.acionamento_id === id;
  });
  return entrada ? entrada.acionamento_descr : "No se encontró la entrada con el ID especificado.";
}


