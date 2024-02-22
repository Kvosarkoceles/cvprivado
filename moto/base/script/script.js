// Inicializar el mapa
var mymap = L.map('mapid').setView([51.505, -0.09], 25); // coordenadas iniciales y nivel de zoom



 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(mymap);



 
// Función para mostrar la ubicación del usuario
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

// Función para manejar errores de geolocalización
function onLocationError(e) {
    alert(e.message);
}


// Añadir el mapa base de OpenStreetMap


// Añadir un marcador en una ubicación específica
// var marker = L.marker([51.5, -0.09]).addTo(mymap); // coordenadas del marcador

// // Añadir un popup al marcador
// marker.bindPopup("<b>Hello world!</b>").openPopup();



// Configurar opciones de geolocalización
mymap.locate({setView: true, maxZoom: 16});

// Asociar funciones de manejo de eventos
mymap.on('locationfound', onLocationFound);
mymap.on('locationerror', onLocationError);