// Inicializar el mapa
var mymap = L.map('mapid').setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom



 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(mymap);




// Añadir el mapa base de OpenStreetMap


// Añadir un marcador en una ubicación específica
var marker = L.marker([51.5, -0.09]).addTo(mymap); // coordenadas del marcador

// Añadir un popup al marcador
marker.bindPopup("<b>Hello world!</b>").openPopup();
