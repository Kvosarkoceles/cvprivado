function getAlertas() {
  console.log("getAlertas");
  console.log(dataInfo.accionamientos);
  // https://siad.imovit.net/files/icons/actions/25.svg
  agregarNotificacion("fa-users", "8 friend requests", "69 hours");
  agregarNotificacion("fa-users", "8 friend requests", "69 hours");
  agregarNotificacion("fa-users", "8 friend requests", "69 hours");
  agregarNotificacion("fa-users", "8 friend requests", "69 hours");
  agregarNotificacion("fa-users", "8 friend requests", "69 hours");
//   console.log(dataInfo.eventos);
//   var numeroEventosSpan = document.getElementById("numeroEventos");
//   numeroEventosSpan.textContent = dataInfo.eventos.length;

//   var titulo = document.getElementById("numeroEventosTitulo");


// // Obtén la longitud de la variable dataInfo.eventos
// var longitudEventos = dataInfo.eventos.length;

// // Define el texto que deseas agregar, concatenando la longitud de eventos
// var texto = longitudEventos + " Notifications";

// // Agrega el texto al elemento
// titulo.textContent = texto;

}
function agregarNotificacion(iconClass, notificationText, timeText) {
  // Crear el elemento <div> para la división del menú
  var divider = document.createElement("div");
  divider.classList.add("dropdown-divider");

  // Crear el elemento <a> para el nuevo ítem de notificación
  var notificationItem = document.createElement("a");
  notificationItem.href = "#";
  notificationItem.classList.add("dropdown-item");

  // Crear el icono de la notificación
  var icon = document.createElement("i");
  icon.classList.add("fas", iconClass, "mr-2");
  notificationItem.appendChild(icon);

  // Agregar el texto de la notificación
  notificationItem.appendChild(document.createTextNode(notificationText));

  // Agregar el tiempo de la notificación
  var timeSpan = document.createElement("span");
  timeSpan.classList.add("float-right", "text-muted", "text-sm");
  timeSpan.appendChild(document.createTextNode(timeText));
  notificationItem.appendChild(timeSpan);

  // Obtener el enlace "See All Notifications"
  var seeAllLink = document.querySelector(".dropdown-footer");

  // Insertar el elemento de división y el nuevo ítem de notificación antes del enlace "See All Notifications"
  seeAllLink.parentNode.insertBefore(divider, seeAllLink);
  seeAllLink.parentNode.insertBefore(notificationItem, seeAllLink);
}
