/**
 * Realiza la obtención de datos y muestra la información obtenida.
 * 
 * @returns {void}
 */
async function viajes() {
    await getData();
    console.log(dataInfo);
    console.log(dataTemp);

}
var filas = "";
/**
 * Obtiene los datos según el valor seleccionado en el filtro de tiempo y realiza operaciones de filtrado y procesamiento.
 * 
 * @returns {void}
 */
async function getData() {
    var valorSeleccionado = $('#filtroTiempo').val();

    switch (valorSeleccionado) {
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


    const fechasDeseadas = await obtenerFechas(dataInfo.igniciones.data_gps_br, dataInfo.dateInicion, dataInfo.dateFin);

    posocop = await filtraData(dataInfo.posiciones, dataInfo.dateInicion, dataInfo.dateFin)

    dataTemp.posiciones = posocop

    var vai = await filtarViajes(dataInfo.igniciones.data_gps_br, dataInfo.dateInicion, dataInfo.dateFin)
    dataTemp.igniciones.data_gps_br = vai;
    var vai2 = await filtarViajes(dataInfo.igniciones.nextdataInfo, dataInfo.dateInicion, dataInfo.dateFin)
    dataTemp.igniciones.nextdataInfo = vai2;
    muestraViajes();
}

/**
 * Filtra un array de fechas para obtener solo aquellas que están dentro del rango especificado.
 * 
 * @param {Array} arrayFechas - El array de fechas a filtrar.
 * @param {Date} fechaInicio - La fecha de inicio del rango.
 * @param {Date} fechaFin - La fecha de fin del rango.
 * @returns {Array} - Un array de fechas filtradas que están dentro del rango especificado.
 */
function obtenerFechas(arrayFechas, fechaInicio, fechaFin) {

    const fechasFiltradas = arrayFechas.filter(fecha => {
        const fechaActual = new Date(fecha);
        return fechaActual >= new Date(fechaInicio) && fechaActual <= new Date(fechaFin);
    });
    return fechasFiltradas;
}
/**
 * Muestra la información de los viajes en la interfaz de usuario.
 * 
 * @returns {void}
 */
async function muestraViajes() {
    limpiarTabla()
    dataTemp.viajes = [];
    $('#boton1').text('Localizar');
    $('#boton1').show();
    $('#boton1').click(function () {
        localizar();
    });
    $('#informe').hide();
    $('#posicionesCard').show();
    // limpiarTabla();
    $.each(dataTemp.igniciones.data_gps_br, function (index, item) {
        // console.log("Inicio");
        // console.log(item);
        // console.log("Fin");
        // console.log(dataTemp.igniciones.nextdataInfo[index]);
        var posiciones = recorrerEntrehoras(dataTemp.posiciones, item, dataTemp.igniciones.nextdataInfo[index]);
        var distancia = calduladistancia(posiciones[0].distancia, posiciones[posiciones.length - 1].distancia)
        var coordenadasInicio = [parseFloat(posiciones[0].latitude), parseFloat(posiciones[0].longitude)];
        var coordenadasFinales = [parseFloat(posiciones[posiciones.length - 1].latitude), parseFloat(posiciones[posiciones.length - 1].latitude)];
        // distancia= (parseInt(posiciones[posiciones.length-1].distancia) - parseInt(posiciones[0].distancia)) / 1000;



        //  direccionFinal =  getDireccion(coordenadasFinales);

        viaje = {
            inicio: { date: item, coordenadas: coordenadasInicio, direccion: "" },
            fin: { date: dataTemp.igniciones.nextdataInfo[index], coordenadas: coordenadasFinales, direccion: "" },
            posiciones: posiciones,
            distancia: distancia
        }

        dataTemp.viajes.push(viaje);



        addTablaInfo(item, dataTemp.igniciones.nextdataInfo[index], index)
    });
    $('#tablaPosiciones tbody').append(filas);

    verFullRuta()

}

/**
 * Calcula la distancia entre dos puntos dados.
 * 
 * @param {number} inicio - La distancia inicial.
 * @param {number} fin - La distancia final.
 * @returns {number} - La distancia calculada en kilómetros.
 */
function calduladistancia(inicio, fin) {
    const distancia = ((parseInt(fin) - parseInt(inicio)) / 1000)

    return distancia;
}
/**
 * Agrega información de inicio y fin de viaje a la tabla de posiciones.
 * 
 * @param {string} inicio - La fecha de inicio del viaje.
 * @param {string} fin - La fecha de fin del viaje.
 * @param {number} index - El índice del viaje en la lista de viajes.
 * @returns {void}
 */
function addTablaInfo(incio, fin, index) {

    var fila =
        '<tr data-widget="expandable-table" aria-expanded="false">' +
        '<td>' +
        '<i class="expandable-table-caret fas fa-caret-right fa-fw"></i>' +
        incio
        + '</td>' +
        '</tr>' +
        '<tr class="expandable-body d-none">' +
        '<td>' +
        '<div class="p-0" style="">' +
        '<table class="table table-hover">' +
        '<tbody>' +
        '<tr data-widget="expandable-table" aria-expanded="false" onclick="centrarPosicion(' + "data.posicionInicial.latitude" + ',' + "data.posicionInicial.longitude" + ')">' +
        '<td> Inicion: ' + incio.match(/\d{2}:\d{2}:\d{2}/)[0] + '</td>' +
        '</tr>' +
        '<tr data-widget="expandable-table" aria-expanded="false" onclick="centrarPosicion(' + "data.posicionFinal.latitude" + ',' + "data.posicionFinal.longitude" + ')">' +
        '<td>Fin: ' + fin.match(/\d{2}:\d{2}:\d{2}/)[0] + '</td>' +
        '</tr>' +
        '<tr data-widget="expandable-table" aria-expanded="false"s>' +
        '<td id="miTdBotones" style="display: flex; justify-content: space-around;">' +
        '<button class="btn btn-primary" onclick="verRuta(' + index + ')">' +
        '<i class="fa-solid fa-route"></i>' +
        '</button>' +
        '<button class="btn btn-secondary"><i class="fa-solid fa-star"></i></button>' +
        '<button class="btn btn-success"><i class="fa-solid fa-check"></i></button></td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</td>' +
        '</tr>'
        ;

    filas += fila;
}
/**
 * Limpia la tabla de posiciones, restableciendo su contenido y los datos relacionados.
 * 
 * @returns {void}
 */
function limpiarTabla() {


    var cardBody = document.querySelector(".card-body.p-0");
    cardBody.innerHTML = '<table class="table table-hover tablaPosiciones" id="tablaPosiciones"><tbody id="bodyTablaPosiciones"></tbody></table>';
    posicionesRutas = [];
    filas = "";
    // console.log(posicionesRutas);


}
/**
 * Muestra la ruta completa en el mapa, eliminando las polilíneas y marcadores existentes y dibujando la ruta completa.
 * 
 * @returns {void}
 */
function verFullRuta() {

    var ruta = dataTemp.posiciones


    // console.log(posicionesRutas[params]);
    eliminarPolilineas();
    eliminarTodosLosMarcadores();
    dibujarPolilineasRuta(ruta);

}
/**
 * Muestra la ruta correspondiente al viaje seleccionado en el mapa, eliminando las polilíneas y marcadores existentes.
 * 
 * @param {number} index - El índice del viaje seleccionado.
 * @returns {void}
 */
function verRuta(index) {
    // console.log("funcion ver Ruta");
    var inicio = dataTemp.igniciones.data_gps_br[index]
    var fin = dataTemp.igniciones.nextdataInfo[index]
    // console.log(inicio, fin);
    var ruta = recorrerEntrehoras(dataTemp.posiciones, inicio, fin)
    // console.log(ruta)

    // console.log(posicionesRutas[params]);
    eliminarPolilineas();
    eliminarTodosLosMarcadores();
    dibujarPolilineasRuta(ruta);

}
function rutaDate(inicio, fin) {

}


/**
 * Obtiene la dirección correspondiente a las coordenadas geográficas proporcionadas.
 * 
 * @param {Array} array - Un array que contiene las coordenadas geográficas [latitud, longitud].
 * @returns {Promise<string>} - Una promesa que se resuelve con la dirección obtenida.
 */

async function getDireccion(array) {
    var address = "";
    latitude = array[0];
    longitude = array[1];

    await axios.get('https://nominatim.openstreetmap.org/reverse?lat=' + latitude + '&lon=' + longitude + '&format=json')
        .then(function (response) {
            // Procesar respuesta
            address = response.data.display_name;
            return address;
            // document.getElementById("direccion").innerText = address;
        })
        .catch(function (error) {

            console.log(error);
            return "";
        });

}



/**
 * Obtiene y muestra la dirección correspondiente a las coordenadas geográficas proporcionadas.
 * 
 * @param {number} a - La latitud de las coordenadas geográficas.
 * @param {number} b - La longitud de las coordenadas geográficas.
 * @param {string} c - El identificador del elemento HTML donde se mostrará la dirección.
 * @returns {void}
 */
async function verDireccio(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
    var displayAdress = "";
    await axios.get('https://nominatim.openstreetmap.org/reverse?lat=' + a + '&lon=' + b + '&format=json')
        .then(function (response) {
            // Procesar respuesta
            displayAdress = response.data.display_name;
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
    const idItem = "#" + c;
    console.log(idItem)
    $(idItem).removeAttr("onclick");
    // document.getElementById(c).removeAttr("onclick");
    document.getElementById(c).innerText = displayAdress;
}



/**
 * Muestra la sección de informe y oculta el panel de posiciones y el botón de localizar, eliminando las polilíneas y marcadores existentes.
 * 
 * @returns {void}
 */

function localizar() {
    // console.log("Localizar")

    $('#posicionesCard').hide();
    $('#boton1').hide();
    $('#informe').show();
    eliminarPolilineas();
    eliminarTodosLosMarcadores();
    // start();
    // intervalID = setInterval(start, 10000);
}

/**
 * Muestra el modal que contiene información adicional sobre la ruta.
 * 
 * @returns {void}
 */
function rutaInfo() {
    // $("#mapid").hide();
    $("#modalRutas").show();

}


