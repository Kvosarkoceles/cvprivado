var mymap = L.map("mapid").setView([19.3910844, -99.473292], 12); // coordenadas iniciales y nivel de zoom
  
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(mymap);
// alert(datosVehiculos);


function addMarker(latitude, longitude,Popup) {   
    L.marker([latitude, longitude])
    .addTo(mymap)
    .bindPopup(Popup);
    centrarMapaEnMarcador(latitude,longitude, 13)

    // var myIcon = L.icon({
    //   iconUrl: "546.svg",
    //   shadowUrl: "marker-shadow.png",
    // });
  
    // L.marker([latitude, longitude])
    //   .addTo(mymap)
    //   .bindPopup(
    //     "<div style='margin-bottom: 5px; text-align: center;'>" +
    //     "<span style='font-weight: bold; text-align: center;'>" +
    //     dataVeiculo.ignicion +
    //     "</span>" +
    //     "</div>" +
    //     "<div style='margin-bottom: 5px; text-align: center;'>" +
    //     "<span style='font-weight: bold; text-align: center;'>" +
    //     dataVeiculo.placa +
    //     "</span>" +
    //     "</div>" +
    //     "<div style='margin-bottom: 5px;'>" +
    //     "<span style='font-weight: bold;'>Velocidad:</span> " +
    //     dataVeiculo.velocidad +
    //     "</div>" +
    //     "<div style='margin-bottom: 5px;'>" +
    //     "<span style='font-weight: bold;'>Bateria:</span> " +
    //     Ultima.tensao +
    //     "</div>" +
    //     "<div style='margin-bottom: 5px; text-align: center;'>" +
    //     "<button onclick='limpiarTabla()' class='btn btn-block btn-outline-primary btn-sm'>Posiciones</button>" +
    //     "</div>"
  
    //   );
  
}

function centrarMapaEnMarcador(latitud, longitud, zoom) {
  mymap.setView([latitud, longitud], zoom);
}