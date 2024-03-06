var dateInicial = "";
var dateFinal = "";
var posicionesFull = "";

var posicionesRutas = "";

var filas = '';




function posiciones() {

// console.log(posicionesFull)

    var resultadoFiltrado = recorrerEntreFechas(posicionesFull, dateInicial, dateFinal);

    // console.log("dateInicial:" + dateInicial);
    // console.log("dateFinal:" + dateFinal);
    // console.log("resultadoFiltrado:");
    // console.log(resultadoFiltrado);
    eliminarTodosLosMarcadores();
    eliminarPolilineas();
    cealPosi(resultadoFiltrado);
    console.log("posicionesRutas");
    console.log(posicionesRutas);
    $.each(posicionesRutas, function (index, item) {
        // console.log("posicionesRutas");
        // console.log(index);
        if (item.length > 1) {
            console.log(item.length);
            dibujarPolilineas(item)
            velMax = calcularVelocidadMaxima(item);
            const distanciaRecorrida = calcularDistanciaRecorrida(item);
            const distancia = distanciaRecorrida.toFixed(2);
            addTablaInfo(item[0], item[item.length - 1], velMax, distancia, item, index);    
        }
    });

    $('#tablaPosiciones tbody').append(filas);
    // alert("cambiar botot a ver ubucacion")


    var informe = document.getElementById('informe');
    informe.style.display = 'none';

    var posicionesCard = document.getElementById('posicionesCard');
    posicionesCard.style.display = 'block';


    var button = document.getElementById('myUbicacion');
    button.style.display = 'block';
    var button = document.getElementById('myPosiciones');
    button.style.display = 'block';

}
let polylines = [];
function eliminarPolilineas() {
    polylines.forEach(polyline => {
        mymap.removeLayer(polyline);
    });
    polylines = [];
}
function dibujarPolilineas(datos) {
    // console.log("polilinea");
    // console.log(datos);
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Genera un color aleatorio
    const coordenadas = datos.map(({ latitude, longitude }) => [parseFloat(latitude), parseFloat(longitude)]);
    const polyline = L.polyline(coordenadas, { color: "red" }).addTo(mymap);
    polylines.push(polyline);

    // const startPoint = L.marker(datos[0]).addTo(mymap);
    // const endPoint = L.marker(datos[datos.length - 1]).addTo(mymap);

    addMarkerposicion(datos[0]);
    addMarkerposicion(datos[datos.length - 1]);

    // alert("Distancia recorrida:"+ distanciaRecorrida.toFixed(2)+ "kilómetros");




    // arreglos.forEach((subArray) => {
    //     L.polyline(subArray, {color: 'blue'}).addTo(map);
    // });
}

function dibujarPolilineasRuta(datos) {
    // console.log("polilinea");
    // console.log(datos);
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16); // Genera un color aleatorio
    const coordenadas = datos.map(({ latitude, longitude }) => [parseFloat(latitude), parseFloat(longitude)]);
    const polyline = L.polyline(coordenadas, { color: "red" }).addTo(mymap);
    polylines.push(polyline);


      // Opciones de las flechas
    //   var arrowHead = L.divIcon({
    //     className: 'arrow-icon',
    //     iconSize: [10, 10],
    //     html: '<div style="width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 10px solid red;"></div>'
    //   });

        // Añadir flechas a la polilínea
    // L.polylineDecorator(polyline, {
    //     patterns: [
    //       { offset: '0%', repeat: '20%', symbol: arrowHead }
    //     ]
    //   }).addTo(mymap);


    // var arrowHead = L.polylineDecorator(coordenadas, {
    //     patterns: [
    //         {offset: '100%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
    //     ]
    // }).addTo(mymap);

    // const startPoint = L.marker(datos[0]).addTo(mymap);
    // const endPoint = L.marker(datos[datos.length - 1]).addTo(mymap);

    addMarkerposicionRuta(datos[0], "Inicio");
    addMarkerposicionRuta(datos[datos.length - 1], "Fin");



    // alert("Distancia recorrida:"+ distanciaRecorrida.toFixed(2)+ "kilómetros");




    // arreglos.forEach((subArray) => {
    //     L.polyline(subArray, {color: 'blue'}).addTo(map);
    // });
}

function recorrerEntreFechas(arreglo, fechaInicial, fechaFinal) {
    // console.log(typeof arreglo);
    // console.log(arreglo);
    var resultado = [];
    var fechaInicio = new Date(fechaInicial.substring(0, 10));
    var fechaFin = new Date(fechaFinal.substring(0, 10));

    arreglo.forEach(function (objeto) {
        var fechaObjeto = new Date(objeto.data_gps_br.substring(0, 10));
        var limit = fechaObjeto >= fechaInicio && fechaObjeto <= fechaFin;

        // console.log(limit);
        //    console.log("fechaObjeto"+fechaObjeto);
        //    console.log("fechaInicio" + fechaInicio);
        //    console.log("fechaFin"+fechaFin);


        if (fechaInicio <= fechaObjeto) {
            resultado.push(objeto);
            //    console.log(fechaInicio);
            // resultado.push(objeto);
        }
    });
    // console.log("fechaInicio" + fechaInicio);
    // console.log("fechaFin"+fechaFin);
    return resultado;
}

async function getPosiciones(date1, date2) {
    var data = {
        ID_disp: 1970000012,
        f1: date1,
        f2: date2,
        lgw_id: 133,
        db: "awsdev",
        dbip: "imovit.cx0btphnat72.us-east-1.rds.amazonaws.com",


    };

    var url =
        "https://awsdev.imovit.net/plataforma/DeviceTrackerWS/wsapi/getPositionsFast";

    await $.ajax({
        url: url,
        method: "POST",
        data: data,
        success: function (response) {
            posicionesFull = JSON.parse(response);

            // console.log("posicionesFull: ", posicionesFull);



        },
        error: function (xhr, status, error) {
            console.error(status, error); // Manejar cualquier error aquí
        },
    });
}


document.addEventListener('DOMContentLoaded', function () {
    funcionUltimos30Dias();
    getPosiciones(dateInicial, dateFinal);
});

function mismaPosicion(coordenadas1, coordenadas2) {
    // Verifica si las coordenadas son iguales
    return (
        coordenadas1[0] === coordenadas2[0] && coordenadas1[1] === coordenadas2[1]
    );
}

function addMarkerposicion(data) {
    L.marker([data.latitude, data.longitude])
        .addTo(mymap)
        .bindPopup("<b>Index: </b> " + data.index + "<br>" +
            "<b>velocidad: </b> " + data.veloc + "<br>");
}

function addMarkerposicionRuta(data, tipo) {
    console.log("addMarkerposicionRuta");
    console.log(data);
    L.marker([data.latitude, data.longitude])
        .addTo(mymap)
        .bindPopup( "<br>" +
        "<b>"+ tipo+ "</b> "+ "<br>"+
        
        "<b>Fecha: </b> " + data.data_gps_br + "<br>" +
            "<b>Distancia: </b> " + data.distancia + "<br>");
}
// function addTableData(data) {
//     // alert(JSON.stringify(data));
// }

function cealPosi(datos) {
    let subArrays = [];
    let subArray = [];
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].ignicao === "0") {
            if (subArray.length > 0) {
                subArrays.push(subArray);
                subArray = [];
            }
        }
        subArray.push(datos[i]);
    }
    if (subArray.length > 0) {
        subArrays.push(subArray);
    }
    posicionesRutas = subArrays;
    // console.log(posicionesRutas);
}

function addTablaInfo(inicial, final, velMax, distanciaRecorrida, recorrido, ruta) {


    const data = {
        posicionInicial: {
            tab: inicial.tab,
            latitude: inicial.latitude,
            longitude: inicial.longitude,
            radio: inicial.radio,
            origen: inicial.origen,
            data_gps_br: inicial.data_gps_br,
            veloc: inicial.veloc,
            acionamento: inicial.acionamento,
            acionamento_id: inicial.acionamento_id
        },
        posicionFinal: {
            tab: final.tab,
            latitude: final.latitude,
            longitude: final.longitude,
            radio: final.radio,
            origen: final.origen,
            data_gps_br: final.data_gps_br,
            veloc: final.veloc,
            acionamento: final.acionamento,
            acionamento_id: final.acionamento_id
        },
        tiempoRecorrido: "",
        velMax: velMax,
        distanciaRecorrida: distanciaRecorrida,
        recorrido: recorrido

    }

    data.tiempoRecorrido = calcularTiempoRecorrido(inicial, final);
//    console.log(data);

    var fila =
        '<tr data-widget="expandable-table" aria-expanded="false">' +
        '<td>' +
        '<i class="expandable-table-caret fas fa-caret-right fa-fw"></i>' +
        data.posicionFinal.data_gps_br
        + '</td>' +
        '</tr>' +
        '<tr class="expandable-body d-none">' +
        '<td>' +
        '<div class="p-0" style="">' +
        '<table class="table table-hover">' +
        '<tbody>' +
        '<tr data-widget="expandable-table" aria-expanded="false" onclick="centrarPosicion(' + data.posicionInicial.latitude + ',' + data.posicionInicial.longitude + ')">' +
        '<td>Latitude ' + data.posicionInicial.latitude + '</td>' +
        '<td>Longitude' + data.posicionInicial.longitude + '</td>' +
        '</tr>' +
        '<tr data-widget="expandable-table" aria-expanded="false" onclick="centrarPosicion(' + data.posicionFinal.latitude + ',' + data.posicionFinal.longitude + ')">' +
        '<td>Latitude ' + data.posicionFinal.latitude + '</td>' +
        '<td>Longitude' + data.posicionFinal.longitude + '</td>' +
        '</tr>' +
        '<tr data-widget="expandable-table" aria-expanded="false" onclick="verRuta(' + ruta + ')">' +
        '<td>Ver Ruta</td>' +
        '<td>Ver Ruta</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</td>' +
        '</tr>'
        ;

    filas += fila;
}

function calcularTiempoRecorrido(posicionInicial, posicionFinal) {
    const fechaInicial = new Date(posicionInicial.data_gps_br);
    const fechaFinal = new Date(posicionFinal.data_gps_br);

    const tiempoTranscurridoMs = fechaFinal - fechaInicial;
    const segundosTranscurridos = tiempoTranscurridoMs / 1000;

    const horas = Math.floor(segundosTranscurridos / 3600);
    const minutos = Math.floor((segundosTranscurridos % 3600) / 60);
    const segundos = Math.floor(segundosTranscurridos % 60);

    return { horas, minutos, segundos };
}

function calcularVelocidadMaxima(posiciones) {
    let velocidadMaxima = 0;
    posiciones.forEach(posicion => {
        const velocidadActual = parseFloat(posicion.veloc);
        if (!isNaN(velocidadActual) && velocidadActual > velocidadMaxima) {
            velocidadMaxima = velocidadActual;
        }
    });
    return velocidadMaxima;
}




function calcularDistanciaEntrePuntos(lat1, lon1, lat2, lon2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c; // Distancia en kilómetros
    return distancia;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function calcularDistanciaRecorrida(datos) {
    let distanciaTotal = 0;
    for (let i = 1; i < datos.length; i++) {
        const lat1 = parseFloat(datos[i - 1].latitude);
        const lon1 = parseFloat(datos[i - 1].longitude);
        const lat2 = parseFloat(datos[i].latitude);
        const lon2 = parseFloat(datos[i].longitude);
        const distanciaEntrePuntos = calcularDistanciaEntrePuntos(lat1, lon1, lat2, lon2);
        distanciaTotal += distanciaEntrePuntos;
    }
    return distanciaTotal;
}

function centrarPosicion(lat, lot) {

    centrarMapaEnMarcador(lat, lot, 17);



  }

  function centrarMapaEnMarcador(latitud, longitud, zoom) {
    mymap.setView([latitud, longitud], zoom);
  }

  function verRuta(params) {
    console.log(params);
    console.log(posicionesRutas);
    console.log(posicionesRutas[params]);
    eliminarPolilineas();
     eliminarTodosLosMarcadores();
    dibujarPolilineasRuta(posicionesRutas[params]);
    
  }