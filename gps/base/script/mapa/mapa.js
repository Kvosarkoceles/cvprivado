let polylines = [];
/**
 * Dibuja una polilínea que representa una ruta en un mapa.
 * 
 * @param {Array} datos - Los datos de la ruta, incluyendo coordenadas, distancia y tiempo.
 * @returns {void}
 */

function dibujarPolilineasRuta(datos, tipo) {
    if (datos.length != 0) {

        const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Genera un color aleatorio
        const coordenadas = datos.map(({ latitude, longitude }) => [parseFloat(latitude), parseFloat(longitude)]);
        const polyline = L.polyline(coordenadas, { color: "red" }).addTo(mymap);
        polylines.push(polyline);

        const distancia = ((datos[datos.length - 1].distancia) - (datos[0].distancia)) / 1000;

        timpoInicial = datos[0].data_gps_br;
        tiempoFinal = datos[datos.length - 1].data_gps_br;
        if (tipo != 0) {
            // alert("es ruta completa")
            addMarkerposicionRuta(datos[0], "Punto de Inicio", distancia, datos, timpoInicial, tiempoFinal, 0);
            addMarkerposicionRuta(datos[datos.length - 1], "Punto Final", distancia, datos, timpoInicial, tiempoFinal, 0);
        } else {
            // alert("es ruta")
            addMarkerposicionRuta(datos[0], "Punto de Inicio", distancia, datos, timpoInicial, tiempoFinal, 1);
            addMarkerposicionRuta(datos[datos.length - 1], "Punto Final", distancia, datos, timpoInicial, tiempoFinal, 1);
        }


        centrarPosicion(datos[0].latitude, datos[0].longitude)
    }



}

/**
 * Elimina todas las polilíneas dibujadas en el mapa.
 * 
 * @returns {void}
 */

function eliminarPolilineas() {
    polylines.forEach(polyline => {
        mymap.removeLayer(polyline);
    });
    polylines = [];
}

/**
 * Elimina todos los marcadores del mapa.
 * 
 * @returns {void}
 */

function eliminarTodosLosMarcadores() {
    mymap.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            mymap.removeLayer(layer);
        }
    });
}

/**
 * Agrega un marcador a la posición de la ruta en el mapa, mostrando información relevante.
 * 
 * @param {object} data - Los datos de la posición de la ruta.
 * @param {string} tipo - El tipo de posición (punto de inicio, punto final, etc.).
 * @param {number} distancia - La distancia desde el punto inicial hasta este punto de la ruta.
 * @returns {Promise<void>}
 */

async function addMarkerposicionRuta(posicion, tipo, distancia, ruta, timpoInicial, tiempoFinal, tipoRuta) {

    // Hacer solicitud a Nominatim

    // await axios.get('https://nominatim.openstreetmap.org/reverse?lat=' + data.latitude + '&lon=' + data.longitude + '&format=json')
    //     .then(function (response) {
    //         // Procesar respuesta
    //         address = response.data.display_name;
    //         // console.log("address");
    //         // console.log(address);
    //         // document.getElementById("direccion").innerText = address;
    //     })
    //     .catch(function (error) {
    //         address = "";
    //         console.log(error);
    //     });

    await L.marker([posicion.latitude, posicion.longitude])
        .addTo(mymap)
        .bindPopup(
            "<div style='margin-bottom: 5px; text-align: center;'>" +
            "<span style='font-weight: bold; text-align: center;'>" +
            tipo +
            "</span>" +
            "</div>" +
            "<div style='margin-bottom: 5px;'>" +
            "<span style='font-weight: bold;'>Fecha:</span> " +
            posicion.data_gps_br +
            "</div>" +
            "<div style='margin-bottom: 5px;'>" +
            "<span style='font-weight: bold;'>Distancia:</span> " +
            distancia + " km" +
            "</div>" +
            "<div style='margin-bottom: 5px;'>" +
            "<span style='font-weight: bold;'>Direccion:</span> " +
            '<a href="#" id="' + posicion.nsu_posicoes + '" onclick="verDireccio(' + posicion.latitude + ',' + posicion.longitude + ',' + posicion.nsu_posicoes + ')">Ver Dirección</a>' +
            "</div>" +

            "<div style='margin-bottom: 5px; text-align: center;'>" +
            "<button onclick='rutaInfo(\"" + timpoInicial + "\",\"" + tiempoFinal + "\",\"" + tipoRuta + "\")' class='btn btn-block btn-outline-primary btn-sm'>Detalles</button>"
            +
            "</div>"


        );
}

/**
 * Centra el mapa en una posición específica.
 * 
 * @param {number} lat - Latitud de la posición a centrar.
 * @param {number} lot - Longitud de la posición a centrar.
 * @returns {void}
 */

function centrarPosicion(lat, lot) {
    centrarMapaEnMarcador(lat, lot, 17);
}

function addMarker(latitude, longitude, Popup) {
    L.marker([latitude, longitude])
        .addTo(mymap)
        .bindPopup(Popup);
    centrarMapaEnMarcador(latitude, longitude, 13)
}

function centrarMapaEnMarcador(latitud, longitud, zoom) {
    mymap.setView([latitud, longitud], zoom);
}



function addMarkerUtimaPosicion() {
    inf = dataInfo.informacionMoto;
    console.log("Ultima posicion");
    var ignicion = "";
    if (dataInfo.informacionMoto.ultimaPosicion.ignicao == "1") {
        ignicion = "ON"
    } else {
        ignicion = "OFF"
    }
    console.log(inf);
    var poppup = "<div style='margin-bottom: 5px; text-align: center;'>" +
        "<span style='font-weight: bold; text-align: center;'>" +
        dataInfo.informacionMoto.origen +
        "</span>" +
        "</div>" +
        "<div style='margin-bottom: 5px; text-align: center;'>" +
        "<span style='font-weight: bold; text-align: center;'>" +
        dataInfo.informacionMoto.ultimaPosicion.data_gps_br +
        "</span>" +
        "</div>" +
        "<div style='margin-bottom: 5px;'>" +
        "<span style='font-weight: bold;'>Velocidad:</span> " +
        dataInfo.informacionMoto.ultimaPosicion.veloc + " km/h" +
        "</div>" +
        "<div style='margin-bottom: 5px;'>" +
        "<span style='font-weight: bold;'>Bateria:</span> " +
        dataInfo.informacionMoto.ultimaPosicion.tensao + ' V' +
        "</div>" +
        "<div style='margin-bottom: 5px;'>" +
        "<span style='font-weight: bold;'>Status:</span> " +
        ignicion +
        "</div>" +
        "<div style='margin-bottom: 5px;'>" +
        "<span style='font-weight: bold;'>Direccion:</span> " +
        '<a href="#" id="' + dataInfo.informacionMoto.ultimaPosicion.nsu_posicoes + '" onclick="verDireccio(' + dataInfo.informacionMoto.ultimaPosicion.latitude + ',' + dataInfo.informacionMoto.ultimaPosicion.longitude + ',' + dataInfo.informacionMoto.ultimaPosicion.nsu_posicoes + ')">Ver Dirección</a>' +
        "</div>" +
        "<div style='margin-bottom: 5px; text-align: center;'>" +
        "<button onclick='limpiarTabla()' class='btn btn-block btn-outline-primary btn-sm'>Detalles</button>" +
        "</div>";

    var lat = parseFloat(dataInfo.informacionMoto.latitude)
    var log = parseFloat(dataInfo.informacionMoto.longitude)
    addMarker(lat, log, poppup);

}