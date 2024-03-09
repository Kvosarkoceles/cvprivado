$.getScript("base/script/datos/informacion.js");
$.getScript("base/script/datos/procesdata.js");

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
var mymap = L.map("mapid").setView([19.305451, -99.261148], 15); // coordenadas iniciales y nivel de zoom

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(mymap);
// alert(datosVehiculos);
var Popup ="";
L.marker([19.305451, -99.261148])
.addTo(mymap)
.bindPopup(Popup);
centrarMapaEnMarcador(latitude,longitude, 13)


// intervalID = setInterval(start, 10000);


console.log(dataInfo);


function addMarker(latitude, longitude,Popup) {   
  L.marker([latitude, longitude])
  .addTo(mymap)
  .bindPopup(Popup);
  centrarMapaEnMarcador(latitude,longitude, 13) 

}

function centrarMapaEnMarcador(latitud, longitud, zoom) {
  mymap.setView([latitud, longitud], zoom);
}