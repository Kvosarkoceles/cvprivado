// Inicializar el mapa
var mymap = L.map('mapid').setView([51.505, -0.09], 13); // coordenadas iniciales y nivel de zoom

// Añadir el mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Añadir un marcador en una ubicación específica
var marker = L.marker([51.5, -0.09]).addTo(mymap); // coordenadas del marcador

// Añadir un popup al marcador
marker.bindPopup("<b>Hello world!</b>").openPopup();
