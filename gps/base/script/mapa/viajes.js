/**
 * Realiza la obtención de datos y muestra la información obtenida.
 *
 * @returns {void}
 */
async function viajes() {
  await getData();

  var filtroTiempoSelect = document.getElementById("filtroTiempo");
  filtroTiempoSelect.addEventListener("change", viajes);
  $("#boton3").hide();
  $("#boton1").text("Localizar");
  $("#boton1").show();
  $("#boton1").click(function () {
    localizar();
  });
}
var filas = "";
/**
 * Obtiene los datos según el valor seleccionado en el filtro de tiempo y realiza operaciones de filtrado y procesamiento.
 *
 * @returns {void}
 */
async function getData() {
  console.log("getData");
  var valorSeleccionado = $("#filtroTiempo").val();

  switch (valorSeleccionado) {
    case "hoy":
      funcionHoy();
      break;
    case "ayer":
      funcionAyer();
      break;
    case "semana-actual":
      funcionSemanaActual();
      break;
    case "mes-actual":
      funcionMesActual();
      break;
    case "ultimos-7-dias":
      funcionUltimos7Dias();
      break;
    case "ultimos-30-dias":
      funcionUltimos30Dias();
      break;
    case "personalizado":
      funcionPersonalizado();
      break;
    default:
    // Acción por defecto, si es necesario
  }
  console.log("Calacula las fechas");
  const fechasDeseadas = await obtenerFechas(
    dataInfo.igniciones.data_gps_br,
    dataInfo.dateInicion,
    dataInfo.dateFin
  );
  console.log("fechasDeseadas");
  console.log(fechasDeseadas);
  posocop = await filtraData(
    dataInfo.posiciones,
    dataInfo.dateInicion,
    dataInfo.dateFin
  );
  console.log("Posiciones");
  console.log(posocop);
  dataTemp.posiciones = posocop;

  var vai = await filtarViajes(
    dataInfo.igniciones.data_gps_br,
    dataInfo.dateInicion,
    dataInfo.dateFin
  );
  console.log("igniciones Inicio");
  console.log(vai);
  dataTemp.igniciones.data_gps_br = vai;

  var vai2 = await filtarViajes(
    dataInfo.igniciones.nextdataInfo,
    dataInfo.dateInicion,
    dataInfo.dateFin
  );
  console.log("igniciones Termino");
  console.log(vai2);
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
  const fechasFiltradas = arrayFechas.filter((fecha) => {
    const fechaActual = new Date(fecha);
    return (
      fechaActual >= new Date(fechaInicio) && fechaActual <= new Date(fechaFin)
    );
  });
  return fechasFiltradas;
}
/**
 * Muestra la información de los viajes en la interfaz de usuario.
 *
 * @returns {void}
 */
async function muestraViajes() {
  limpiarTabla();
  verFullRuta();

  dataTemp.viajes = [];
  $("#informe").hide();
  $("#posicionesCard").show();
  //rutas a temp
  $.each(dataTemp.igniciones.data_gps_br, function (index, item) {
    addTablaInfo(item, dataTemp.igniciones.nextdataInfo[index], index);
  });
  console.log(dataTemp);

  $("#tablaPosiciones tbody").append(filas);
  // if (dataTemp.viajes.length != 0) {
  //   dataTemp.viajes.inicio = dataTemp.viajes.rutas[0].inicio;
  //   dataTemp.viajes.fin =
  //     dataTemp.viajes.rutas[dataTemp.viajes.rutas.length - 1].fin;
  // }
}

/**
 * Calcula la distancia entre dos puntos dados.
 * @param {number} inicio - La distancia inicial.
 * @param {number} fin - La distancia final.
 * @returns {number} - La distancia calculada en kilómetros.
 */
function calduladistancia(inicio, fin) {
  const distancia = (parseInt(fin) - parseInt(inicio)) / 1000;

  return distancia;
}
/**
 * Agrega información de inicio y fin de viaje a la tabla de posiciones.
 *
 * @param {string} inicio - La fecha de inicio del viaje.-....
 * @param {string} fin - La fecha de fin del viaje.
 * @param {number} index - El índice del viaje en la lista de viajes.
 * @returns {void}
 */
function addTablaInfo(incio, fin, index) {
  console.log("addTablaInfo"); //
  console.log("index", index); //
  console.log("incio", incio); //
  console.log("fin", fin); //
  // var ruta = recorrerEntrehoras(dataTemp.posiciones, incio, fin);

  var fila =
    '<tr data-widget="expandable-table" aria-expanded="false">' +
    "<td>" +
    '<i class="expandable-table-caret fas fa-caret-right fa-fw"></i>' +
    incio +
    "</td>" +
    "</tr>" +
    '<tr class="expandable-body d-none">' +
    "<td>" +
    '<div class="p-0" style="">' +
    '<table class="table table-hover">' +
    "<tbody>" +
    '<tr data-widget="expandable-table" aria-expanded="false" onclick="verRuta(' +
    index +
    ",1)" +
    '">' +
    "<td>Inicio: " +
    incio.match(/\d{2}:\d{2}:\d{2}/)[0] +
    "</td>" +
    "</tr>" +
    '<tr data-widget="expandable-table" aria-expanded="false" onclick="verRuta(' +
    index +
    ",2)" +
    '">' +
    "<td>Fin: " +
    fin.match(/\d{2}:\d{2}:\d{2}/)[0] +
    "</td>" +
    "</tr>" +
    '<tr data-widget="expandable-table" aria-expanded="false"s>' +
    '<td id="miTdBotones" style="display: flex; justify-content: space-around;">' +
    '<button class="btn btn-primary" onclick="verRuta(' +
    index +
    ',0)">' +
    '<i class="fa-solid fa-route"></i>' +
    "</button>" +
    '<button class="btn btn-secondary"><i class="fa-solid fa-star"></i></button>' +
    '<button class="btn btn-success"><i class="fa-solid fa-check"></i></button></td>' +
    "</tr>" +
    "</tbody>" +
    "</table>" +
    "</div>" +
    "</td>" +
    "</tr>";
  filas += fila;
}
/**
 * Limpia la tabla de posiciones, restableciendo su contenido y los datos relacionados.
 *
 * @returns {void}
 */
function limpiarTabla() {
  var cardBody = document.querySelector(".card-body.p-0");
  cardBody.innerHTML =
    '<table class="table table-hover tablaPosiciones" id="tablaPosiciones"><tbody id="bodyTablaPosiciones"></tbody></table>';
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
  var ruta = dataTemp.posiciones;

  // console.log(posicionesRutas[params]);
  eliminarPolilineas();
  eliminarTodosLosMarcadores();
  dibujarPolilineasRuta(ruta, 1);
}
/**
 * Muestra la ruta correspondiente al viaje seleccionado en el mapa, eliminando las polilíneas y marcadores existentes.
 *
 * @param {number} index - El índice del viaje seleccionado.
 * @returns {void}
 */
function verRuta(index, centrar) {
  togglePreloader("show");
  console.clear();
  console.log("Data Temp");
  console.log(dataTemp);

  // Caso 1: El array existe y está vacío
  if (dataTemp.viajes && dataTemp.viajes.length === 0) {
    console.log("El array existe y está vacío.");
    console.log("1.- Calcula las rutas:");
    console.log(dataTemp.igniciones.data_gps_br.length);

    dataTemp.igniciones.data_gps_br.forEach(function (ignicion, index) {
      // Mostrar cada elemento en la consola
      // console.log("Ignición " + (index + 1) + ": ", ignicion);
      inicio = dataTemp.igniciones.data_gps_br[index];

      var ruta = recorrerEntrehoras(
        dataTemp.posiciones,
        dataTemp.igniciones.data_gps_br[index],
        dataTemp.igniciones.nextdataInfo[index]
      );
      dataTemp.viajes.push(ruta);
      console.log("ruta");
      console.log(ruta);
      // Por ejemplo, si 'ignicion' es un objeto con propiedades como 'fecha', 'estado', etc., puedes acceder a ellas así: ignicion.fecha, ignicion.estado, etc.
    });

    console.log("2.- Muestra la ruta");
  }

  // Caso 2: El array existe y no está vacío
  else if (dataTemp.viajes && dataTemp.viajes.length > 0) {
    console.log("El array existe y no está vacío.");
    console.log("1.- Muestra la ruta");
  }

  // Caso 3: El array no existe
  else {
    console.log("El array no existe.");
    console.log("1.- Calcula las rutas");
    console.log("2.- salva las rutas");
    console.log("3.- Muestra la ruta");
  }

  // if (dataTemp.viajes.length == 0) {
  //   console.log("Calcula Viajes")};
  //   console.log("Despues Muestra la ruta");
  // }else{
  //   console.log("Muestra la ruta");
  // }

  console.log("funcion ver Ruta");

  console.log(index + " :index");
  console.log(centrar + " :centrar");

  // var inicio = dataTemp.igniciones.data_gps_br[index];
  // var fin = dataTemp.igniciones.nextdataInfo[index];
  // console.log(inicio, fin);
  // var ruta = recorrerEntrehoras(dataTemp.posiciones, inicio, fin);
  // console.log(ruta);
  var ruta = dataTemp.viajes[index];
  console.log(ruta);
  // console.log(posicionesRutas[params]);
  eliminarPolilineas();
  eliminarTodosLosMarcadores();
  dibujarPolilineasRuta(ruta, 0);
  if (centrar === 1) {
    console.log("centrar 1");
    console.log("Inicio");
    var lat = ruta[0].latitude;
    var lot = ruta[0].longitude;
    console.log("lat: " + lat);
    console.log(lat);
    console.log("lot: " + lot);
    console.log(lot);
    centrarPosicion(lat, lot);
  } else if (centrar === 2) {
    console.log("centrar 2");

    console.log("Final");
    var lat = ruta[ruta.length - 1].latitude;
    var lot = ruta[ruta.length - 1].longitude;
    console.log("lat: " + lat);
    console.log(lat);
    console.log("lot: " + lot);
    console.log(lot);
    centrarPosicion(lat, lot);
  } else if (centrar === 0) {
    console.log("centrar 0");
  }

  togglePreloader("hide");
}
function rutaDate(inicio, fin) { }

/**
 * Obtiene la dirección correspondiente a las coordenadas geográficas proporcionadas.
 *
 * @param {Array} array - Un array que contiene las coordenadas geográficas [latitud, longitud].
 * @returns {Promise<string>} - Una promesa que se resuelve con la dirección obtenida.
 */

async function getDireccion(array) {
  var address = "";
  latitude = parseFloat(array[0]);
  longitude = parseFloat(array[1]);
  console.log("getDireccion");
  console.log(latitude);
  console.log(longitude);
  await axios
    .get(
      "https://nominatim.openstreetmap.org/reverse?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&format=json"
    )
    .then(function (response) {
      // Procesar respuesta
      console.log(response);
      address = response.data.display_name;
      return address;
      // document.getElementById("direccion").innerText = address;
    })
    .catch(function (error) {
      console.error(error);
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
  console.log(a);
  console.log(b);
  console.log(c);
  var displayAdress = "";
  await axios
    .get(
      "https://nominatim.openstreetmap.org/reverse?lat=" +
      a +
      "&lon=" +
      b +
      "&format=json"
    )
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
  console.log(idItem);
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

  var filtroTiempoSelect = document.getElementById("filtroTiempo");

  filtroTiempoSelect.removeEventListener("change", viajes);

  $("#posicionesCard").hide();
  $("#boton1").hide();
  $("#boton3").show();
  $("#informe").show();
  eliminarPolilineas();
  eliminarTodosLosMarcadores();
  ubicarMapa();
  intervalID = setInterval(ubicarMapa, 10000);
}

function ubicarMapa() {
  getCar();
}
/**
 * Muestra el modal que contiene información adicional sobre la ruta.
 *
 * @returns {void}
 */
function rutaInfo(incio, fin, tipo) {
  // console.log("rutaInfo");
  // console.log(incio);
  // console.log(fin);
  // console.log(tipo);

  if (parseInt(tipo) === 1) {
    console.log("Ruta parcial");
    console.log("Abre el menu para informe de ruta parcial");
    console.log("Calula el informe de ruta parcial");
    console.log("Muestra los datos calculados en la tabla");

  } else {
    console.log("Ruta completa");
    console.log("Abre el menu para informe de ruta completa");
    console.log("Calula el informe de ruta completa");
    console.log("Muestra los datos calculados en la tabla completa");


  }
  // if (tipo != 0) {
  //   // console.log(incio);
  //   // console.log(fin);
  //   var ruta = recorrerEntrehoras(dataTemp.posiciones, incio, fin);
  //   // console.log("rutaInfo");
  //   console.log(ruta);
  //   // $("#mapid").hide();
  //   $("#modalRutas").show();
  //   console.log(dataTemp);
  //   $("#modalRutasInicio").text(ruta[0].data_gps_br);
  //   $("#modalRutasFin").text(ruta[ruta.length - 1].data_gps_br);
  //   $("#modalRutasDistancia").text(
  //     (ruta[ruta.length - 1].distancia - ruta[0].distancia) / 1000 + " km"
  //   );
  //   $("#modalRutasTiempo").text("Tiempo");
  //   $("#modalRutasVmax").text("Velocidad máxima");
  //   $("#modalRutasEventos").text("Eventos");

  //   var velmaximaRuta = calcularVelocidadMaxima(ruta);

  //   $("#modalRutasVmax").text(velmaximaRuta + " km/h");

  //   verDireccio(
  //     ruta[0].latitude,
  //     ruta[0].longitude,
  //     "modalRutasDireccionInicial"
  //   );
  //   verDireccio(
  //     ruta[ruta.length - 1].latitude,
  //     ruta[ruta.length - 1].longitude,
  //     "modalRutasDireccionFin"
  //   );
  //   // alert("es ruta ");
  //   console.log(ruta[0].data_gps_br);
  //   console.log(ruta[ruta.length - 1].data_gps_br);
  //   var tiempo = calcularTiempoRecorrido(
  //     ruta[0].data_gps_br,
  //     ruta[ruta.length - 1].data_gps_br
  //   );
  //   console.log(tiempo);
  //   $("#modalRutasTiempo").text(
  //     "horas:" +
  //       tiempo.horas +
  //       "  minutos:" +
  //       tiempo.minutos +
  //       " segundos:" +
  //       tiempo.segundos
  //   );
  //   // addMarkerposicionRuta(datos[0], "Punto de Inicio", distancia,datos,timpoInicial,tiempoFinal,0);
  //   // addMarkerposicionRuta(datos[datos.length - 1], "Punto Final", distancia,datos,timpoInicial,tiempoFinal,0);
  // } else {
  //   console.log("es ruta completa");
  //   var datos = [
  //     // Puedes agregar más objetos con datos aquí si es necesario
  //   ];
  //   console.log(dataTemp.viajes);
  //   var datos2 = dataTemp.viajes.rutas;

  //   console.log(datos2);

  //   datos2.forEach(function (dato) {
  //     var rut = {
  //       inicio: dato.inicio.date,
  //       finalizacion: dato.fin.date,
  //       direccionInicial: "Inicio A",
  //       direccionFinal: "Final B",
  //       distancia: "100 km",
  //       tiempo: "2 horas",
  //       velocidad: "50 km/h",
  //     };
  //     // console.log("Fecha de inicio:", inicio);
  //     // console.log("Fecha de finalización:", fin);
  //     datos.push(rut);
  //   });

  //   function llenarTabla() {
  //     var tabla = document
  //       .getElementById("example1")
  //       .getElementsByTagName("tbody")[0];

  //     // Limpiar tabla antes de agregar nuevos datos
  //     tabla.innerHTML = "";

  //     // Iterar sobre los datos y agregar filas a la tabla
  //     datos.forEach(function (dato) {
  //       var fila = tabla.insertRow();

  //       // Insertar celdas con los valores de cada propiedad
  //       fila.insertCell().textContent = dato.inicio;
  //       fila.insertCell().textContent = dato.finalizacion;
  //       fila.insertCell().textContent = dato.direccionInicial;
  //       fila.insertCell().textContent = dato.direccionFinal;
  //       fila.insertCell().textContent = dato.distancia;
  //       fila.insertCell().textContent = dato.tiempo;
  //       fila.insertCell().textContent = dato.velocidad;
  //     });
  //   }

  //   // Llenar la tabla al cargar la página
  //   llenarTabla();

  //   // $("#modalRutaCompleta").show();
  //   $("#ReporteViajes").show();
  //   $("#mapid").hide();

  //   // addMarkerposicionRuta(datos[0], "Punto de Inicio", distancia,datos,timpoInicial,tiempoFinal,1);
  //   // addMarkerposicionRuta(datos[datos.length - 1], "Punto Final", distancia,datos,timpoInicial,tiempoFinal,1);
  // }
}

function cerrarModalViajes() {
  $("#modalRutas").hide();
}

function cerrarModalRutaCompleta() {
  $("#modalRutaCompleta").hide();
}

function direccion() { }
