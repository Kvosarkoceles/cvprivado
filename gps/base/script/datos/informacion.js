
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
    data_gps_br:"",
  },
  igniciones: [],
  cars: [],
  dateInicion: "",
  dateFin: ""

}



document.addEventListener('DOMContentLoaded', function () {
  init()
});

function init() {
  funcionUltimos100Dias()
  getCar()
  posiciones(dataInfo.dateInicion, dataInfo.dateFin)
  eventos()
  Igniciones(dataInfo.dateInicion, dataInfo.dateFin)
  accionamientos()
  ultimaPosicion()
  console.log(dataInfo.informacionMoto.latitude);
  addMarkerUtimaPosicion();

}
intervalID = setInterval(init, 10000);

function addMarkerUtimaPosicion() {
  inf = dataInfo.informacionMoto;
  console.log(typeof inf);
  console.log(inf);
  var poppup = "<div style='margin-bottom: 5px; text-align: center;'>" +
    "<span style='font-weight: bold; text-align: center;'>" +
    dataInfo.informacionMoto.latitude +
    "</span>" +
    "</div>" +
    "<div style='margin-bottom: 5px; text-align: center;'>" +
    "<span style='font-weight: bold; text-align: center;'>" +
    dataInfo.informacionMoto.longitude +
    "</span>" +
    "</div>" +
    "<div style='margin-bottom: 5px;'>" +
    "<span style='font-weight: bold;'>Velocidad:</span> " +
    dataInfo.informacionMoto.veic_rotulo +
    "</div>" +
    "<div style='margin-bottom: 5px;'>" +
    "<span style='font-weight: bold;'>Bateria:</span> " +
    dataInfo.informacionMoto.origen +
    "</div>" +
    "<div style='margin-bottom: 5px; text-align: center;'>" +
    "<button onclick='limpiarTabla()' class='btn btn-block btn-outline-primary btn-sm'>Posiciones</button>" +
    "</div>";
  console.log(poppup);
  var lat = parseFloat(dataInfo.informacionMoto.latitude)
  var log = parseFloat(dataInfo.informacionMoto.longitude)
  addMarker(lat, log, poppup);

}


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
      dataInfo.posiciones = objeto;
      console.log("objeto posiciones")
      console.log(objeto[objeto.length - 1])
      console.log("objeto posiciones")
      console.log(dataInfo.eventos[dataInfo.eventos.length - 1])
      var objetoMasReciente = ultimaPosicion(objeto[objeto.length - 1], dataInfo.eventos[dataInfo.eventos.length - 1])


      dataInfo.informacionMoto.ultimaPosicion = objetoMasReciente;
      dataInfo.informacionMoto.latitude=objetoMasReciente.latitude;
      dataInfo.informacionMoto.longitude=objetoMasReciente.longitude;
      dataInfo.informacionMoto.data_gps_br=objetoMasReciente.data_gps_br;
      dataInfo.informacionMoto.evento=objetoMasReciente.event;
      dataInfo.informacionMoto.evento_id=objetoMasReciente.event_id;
      dataInfo.informacionMoto.origen=objetoMasReciente.origen;
      console.log("Ultima posicion");
      console.log(dataInfo);


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
      // objeto = JSON.parse(response);
      // console.log("eventos")
      // console.log(response.data)
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


      dataInfo.informacionMoto.latitude = objeto[1].latitude,
        dataInfo.informacionMoto.longitude = objeto[1].longitude,
        dataInfo.informacionMoto.origen = objeto[1].origen,
        dataInfo.informacionMoto.evento = objeto[1].evento,
        dataInfo.informacionMoto.evento_id = objeto[1].evento_id,
        dataInfo.informacionMoto.ignicao = objeto[1].ignicao,
        dataInfo.informacionMoto.PlacaVeic = objeto[1].PlacaVeic,
        dataInfo.informacionMoto.veic_rotulo = objeto[1].veic_rotulo
      addMarkerUtimaPosicion();

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


