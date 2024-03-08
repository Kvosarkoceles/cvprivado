

document.addEventListener('DOMContentLoaded', function () {
  console.log("inicio de todo");
  init()
});

function init() {
  ultimaPosicion()
  posiciones()
  eventos()
  Igniciones()
}

async function posiciones(date1,date2) {
  var data = {
    ID_disp: 1970000012,
    f1: date1,
    f2: date2,
    lgw_id: 133,
    db: "awsdev",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
};

var url ="https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getPositionsFast";

await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
        objeto = JSON.parse(response);

       console.log("posiciones: ", objeto);
          
    },
    error: function (xhr, status, error) {
        console.error(status, error); // Manejar cualquier error aquí
    },
});

}

async function eventos(date1,date2) {
  var data = {
    lgw_id: 133,
    event: "",
    event_id: "",
    dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",
    db: "awsdev", 
  };

  var url ="https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getEventsAlert";

  await $.ajax({
    url: url,
    method: "POST",
    data: data,
    success: function (response) {
      // objeto = JSON.parse(response);
      console.log("eventos")
      console.log(response.data)
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}
async function ultimaPosicion() {
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
      console.log("Ultima posiciones")
      console.log(objeto)
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}
async function Igniciones() {
  var data = {
    ID_disp: 1970000012,
    f1: "2024-02-07 00:00:00",
    f2: "2024-03-08 23:59:59",
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
      console.log("Igniciones")
      console.log(objeto)
    },
    error: function (xhr, status, error) {
      console.error(status, error); // Manejar cualquier error aquí
    },
  });
}