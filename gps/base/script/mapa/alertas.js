function getAlertas() {
  dataInfo.eventos.slice(0, 10).forEach(function (eventos) {
    var tiempo = calcularTiempoTranscurrido(eventos.data_gps_br);
    agregarNotificacion(eventos.icon, eventos.desc, tiempo);
  });

  function calcularTiempoTranscurrido(desde) {
    // Convertir la fecha inicial a objeto Date
    var fechaInicial = new Date(desde);

    // Obtener la fecha y hora actual
    var fechaActual = new Date();

    // Calcular la diferencia en milisegundos entre las dos fechas
    var diferencia = fechaActual - fechaInicial;

    // Convertir la diferencia de milisegundos a minutos
    var minutosPasados = Math.floor(diferencia / 60000); // 1 minuto = 60000 milisegundos

    // Si han pasado más de una hora, calcular tanto las horas como los minutos transcurridos
    if (minutosPasados >= 60) {
      var horasPasadas = Math.floor(minutosPasados / 60);
      var minutosRestantes = minutosPasados % 60;
      return "Hace " + horasPasadas + " horas y " + minutosRestantes + " minutos";
    } else {
      // Si han pasado menos de una hora, devolver solo los minutos transcurridos
      return "Hace " + minutosPasados + " minutos";
    }
  }
  verAlertas()
}
function agregarNotificacion(svgUrl, notificationText, timeText) {
  // Crear el elemento <div> para la división del menú
  var divider = document.createElement("div");
  divider.classList.add("dropdown-divider");

  // Crear el elemento <a> para el nuevo ítem de notificación
  var notificationItem = document.createElement("a");
  notificationItem.href = "#";
  notificationItem.classList.add("dropdown-item");

  // Crear el icono de la notificación utilizando una imagen SVG
  var icon = document.createElement("img");
  icon.src = svgUrl;
  icon.classList.add("mr-2");
  icon.style.width = "16px"; // Cambiar el tamaño del icono
  icon.style.height = "16px"; // Cambiar el tamaño del icono
  notificationItem.appendChild(icon);

  // Crear un contenedor para el texto de la notificación y el tiempo
  var textContainer = document.createElement("span");

  // Agregar el texto de la notificación
  textContainer.appendChild(document.createTextNode(notificationText + " "));

  // Agregar el tiempo de la notificación
  var timeSpan = document.createElement("span");
  timeSpan.classList.add("text-muted", "text-sm");
  timeSpan.appendChild(document.createTextNode(timeText));
  textContainer.appendChild(timeSpan);

  // Agregar el contenedor de texto al elemento de notificación
  notificationItem.appendChild(textContainer);

  // Obtener el enlace "See All Notifications"
  var seeAllLink = document.querySelector(".dropdown-footer");

  // Insertar el elemento de división y el nuevo ítem de notificación antes del enlace "See All Notifications"
  seeAllLink.parentNode.insertBefore(divider, seeAllLink);
  seeAllLink.parentNode.insertBefore(notificationItem, seeAllLink);
}


function verAlertas() {  
  dataInfo.eventos.forEach(function (eventos) {    
    var fechaBuscada = eventos.data_gps_br;
    var posicionEncontrada = buscarPosicionPorFecha(fechaBuscada);
    var poppup = "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<span style='font-weight: bold; text-align: center;'>" +
      " dataInfo.informacionMoto.latitude" +
      "</span>" +
      "</div>" +
      "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<span style='font-weight: bold; text-align: center;'>" +
      "dataInfo.informacionMoto.longitude " +
      "</span>" +
      "</div>" +
      "<div style='margin-bottom: 5px;'>" +
      "<span style='font-weight: bold;'>Velocidad:</span> " +
      "dataInfo.informacionMoto.veic_rotulo" +
      "</div>" +
      "<div style='margin-bottom: 5px;'>" +
      "<span style='font-weight: bold;'>Bateria:</span> " +
      "dataInfo.informacionMoto.origen " +
      "</div>" +
      "<div style='margin-bottom: 5px; text-align: center;'>" +
      "<button onclick='limpiarTabla()' class='btn btn-block btn-outline-primary btn-sm'>Posiciones</button>" +
      "</div>";
    if (posicionEncontrada) {  
      var lat = parseFloat(posicionEncontrada.latitude)
      var log = parseFloat(posicionEncontrada.longitude)
      addMarker(lat, log, poppup);
    } else {
      // console.log("No se encontró ninguna posición con la fecha buscada.");
    }

  });
}




function buscarPosicionPorFecha(fecha) {
  // Función para comparar la fecha con la fecha de cada objeto
  function esFechaBuscada(posicion) {
    return posicion.data_gps_br === fecha;
  }

  // Buscar el objeto con la fecha buscada en el array dataInfo.posiciones
  return dataInfo.posiciones.find(esFechaBuscada);
}
