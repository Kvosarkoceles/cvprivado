// document.addEventListener('DOMContentLoaded', function () {
//   console.log("Procesa informacion la informacion ...");
//   const selectElement = document.getElementById('filtroTiempo');
//   function observar() {
//     const selectedValue = selectElement.value;

//   }
//   selectElement.addEventListener('change', observar);

// });

// function init() {

// }
var dataTemp = {
  posiciones: [],
  eventos: [],
  informacionMoto: {
    PlacaVeic: "",
    evento: "",
    evento_id: "",
    ignicao: "",
    latitude: "",
    longitude: "",
    origen: "",
    veic_rotulo: "",
    ultimaPosicion: "",
    data_gps_br: "",
  },
  igniciones: [],
  cars: [],
  dateInicion: "",
  dateFin: "",
  rutas: [],
};

function filtarViajes(fechas, fechaInicial, fechaFinal) {
  // Convertir las fechas inicial y final a objetos Date
  var fechaInicialObjeto = new Date(fechaInicial);
  var fechaFinalObjeto = new Date(fechaFinal);

  // Array para almacenar las fechas entre la fecha inicial y final
  var fechasFiltradas = [];

  // Recorrer el array de fechas
  for (var i = 0; i < fechas.length; i++) {
    // Convertir la fecha del array a un objeto Date
    var fecha = new Date(fechas[i]);
    // console.log(fecha)
    // Verificar si la fecha está entre la fecha inicial y final
    if (fecha >= fechaInicialObjeto && fecha <= fechaFinalObjeto) {
      // Agregar la fecha al array de fechas filtradas
      fechasFiltradas.push(fechas[i]);
    }
  }

  return fechasFiltradas;
}
function filtraData(data, Inicion, Fin) {
  objeto = recorrerEntreFechas(data, Inicion, Fin);
  return objeto;
}

function recorrerEntreFechas(arreglo, fechaInicial, fechaFinal) {
  var resultado = [];
  var fechaInicio = new Date(fechaInicial.substring(0, 10));
  var fechaFin = new Date(fechaFinal.substring(0, 10));

  arreglo.forEach(function (objeto) {
    var fechaObjeto = new Date(objeto.data_gps_br.substring(0, 10));
    var limit = fechaObjeto >= fechaInicio && fechaObjeto <= fechaFin;

    if (limit) {
      resultado.push(objeto);
    }
  });
  return resultado;
}
function recorrerEntrehoras(arreglo, fechaInicial, fechaFinal) {
  var resultado = [];
  var fechaInicio = new Date(fechaInicial);
  var fechaFin = new Date(fechaFinal);

  arreglo.forEach(function (objeto) {
    var fechaObjeto = new Date(objeto.data_gps_br);
    var limit = fechaObjeto >= fechaInicio && fechaObjeto <= fechaFin;

    // console.log("limit")
  

    if (limit) {
      // console.log("objeto");
      // console.log(objeto);
      // console.log(resultado.length);
      resultado.push(objeto);
    }
  });


  return resultado;
}
function ultimaPosicion(data1, data2) {
  // console.log(data1.data_gps_br)
  // console.log(data2.data_gps_br)

  var fecha1 = new Date(data1.data_gps_br);
  var fecha2 = new Date(data2.data_gps_br);

  if (fecha1 > fecha2) {
    return data1;
  } else {
    return data2;
  }
}

function funcionHoy() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener los componentes de la fecha actual
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var año = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }

  // Crear una cadena de texto con el formato deseado
  var fechaActualFormateada = año + "-" + mes + "-" + dia + " " + "00:00:00";
  var fechaActualFormateada2 = año + "-" + mes + "-" + dia + " " + "23:59:59";
  // Imprimir la fecha actual

  dataInfo.dateInicion = fechaActualFormateada;
  dataInfo.dateFin = fechaActualFormateada2;

}

function funcionAyer() {
  var fechaActual = new Date();
  var fechaAyer = new Date(fechaActual);
  fechaAyer.setDate(fechaActual.getDate() - 1);
  var diaAyer = fechaAyer.getDate();
  var mesAyer = fechaAyer.getMonth() + 1; // Los meses comienzan desde 0
  var añoAyer = fechaAyer.getFullYear();
  if (diaAyer < 10) {
    diaAyer = "0" + diaAyer;
  }
  if (mesAyer < 10) {
    mesAyer = "0" + mesAyer;
  }
  var fechaInicialFormateada =
    añoAyer + "-" + mesAyer + "-" + diaAyer + " " + "00:00:00";
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }
  var fechaFinalFormateada =
    añoAyer + "-" + mesAyer + "-" + diaAyer + " " + "23:59:59";
  dataInfo.dateInicion = fechaInicialFormateada;
  dataInfo.dateFin = fechaFinalFormateada;
  //  console.log("fechaActualFormateada "  + dateInicial)
  //  console.log("fechaAyerFormateada " + dateFinal)

}

function funcionSemanaActual() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener el día de la semana (0 para domingo, 1 para lunes, ..., 6 para sábado)
  var diaSemana = fechaActual.getDay();

  // Restar los días transcurridos desde el inicio de la semana hasta hoy
  var diasTranscurridos = diaSemana === 0 ? 6 : diaSemana - 1; // Si es domingo, restar 6 días; si no, restar los días correspondientes

  // Clonar la fecha actual y restar los días transcurridos para obtener la fecha de inicio de la semana
  var fechaInicioSemana = new Date(fechaActual);
  fechaInicioSemana.setDate(fechaActual.getDate() - diasTranscurridos);

  // Obtener los componentes de la fecha de inicio de la semana
  var diaInicioSemana = fechaInicioSemana.getDate();
  var mesInicioSemana = fechaInicioSemana.getMonth() + 1; // Los meses comienzan desde 0
  var añoInicioSemana = fechaInicioSemana.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaInicioSemana < 10) {
    diaInicioSemana = "0" + diaInicioSemana;
  }
  if (mesInicioSemana < 10) {
    mesInicioSemana = "0" + mesInicioSemana;
  }

  // Formatear la fecha de inicio de la semana como texto
  var fechaInicioSemanaFormateada =
    añoInicioSemana +
    "-" +
    mesInicioSemana +
    "-" +
    diaInicioSemana +
    " " +
    "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada =
    añoActual + "-" + mesActual + "-" + diaActual + " " + "23:59:59";

  // Imprimir las fechas
  dataInfo.dateInicion = fechaInicioSemanaFormateada;
  dataInfo.dateFin = fechaActualFormateada;

 
}

function funcionMesActual() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener el primer día del mes actual
  var primerDiaMes = new Date(
    fechaActual.getFullYear(),
    fechaActual.getMonth(),
    1
  );

  // Obtener los componentes de la fecha del primer día del mes
  var diaInicioMes = primerDiaMes.getDate();
  var mesInicioMes = primerDiaMes.getMonth() + 1; // Los meses comienzan desde 0
  var añoInicioMes = primerDiaMes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaInicioMes < 10) {
    diaInicioMes = "0" + diaInicioMes;
  }
  if (mesInicioMes < 10) {
    mesInicioMes = "0" + mesInicioMes;
  }

  // Formatear la fecha de inicio del mes como texto
  var fechaInicioMesFormateada =
    añoInicioMes + "-" + mesInicioMes + "-" + diaInicioMes + " " + "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada =
    añoActual + "-" + mesActual + "-" + diaActual + " " + "23:59:59";

  // Imprimir las fechas
  dataInfo.dateInicion = fechaInicioMesFormateada;
  dataInfo.dateFin = fechaActualFormateada;


}

function funcionUltimos7Dias() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener la fecha siete días atrás
  var fechaSieteDiasAntes = new Date(fechaActual);
  fechaSieteDiasAntes.setDate(fechaActual.getDate() - 7);

  // Obtener los componentes de la fecha siete días atrás
  var diaSieteDiasAntes = fechaSieteDiasAntes.getDate();
  var mesSieteDiasAntes = fechaSieteDiasAntes.getMonth() + 1; // Los meses comienzan desde 0
  var añoSieteDiasAntes = fechaSieteDiasAntes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaSieteDiasAntes < 10) {
    diaSieteDiasAntes = "0" + diaSieteDiasAntes;
  }
  if (mesSieteDiasAntes < 10) {
    mesSieteDiasAntes = "0" + mesSieteDiasAntes;
  }

  // Formatear la fecha siete días atrás como texto
  var fechaSieteDiasAntesFormateada =
    añoSieteDiasAntes +
    "-" +
    mesSieteDiasAntes +
    "-" +
    diaSieteDiasAntes +
    " " +
    "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada =
    añoActual + "-" + mesActual + "-" + diaActual + " " + "23:59:59";

  // Imprimir las fechas

  dataInfo.dateInicion = fechaSieteDiasAntesFormateada;
  dataInfo.dateFin = fechaActualFormateada

}

function funcionUltimos30Dias() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener la fecha treinta días atrás
  var fechaTreintaDiasAntes = new Date(fechaActual);
  fechaTreintaDiasAntes.setDate(fechaActual.getDate() - 30);

  // Obtener los componentes de la fecha treinta días atrás
  var diaTreintaDiasAntes = fechaTreintaDiasAntes.getDate();
  var mesTreintaDiasAntes = fechaTreintaDiasAntes.getMonth() + 1; // Los meses comienzan desde 0
  var añoTreintaDiasAntes = fechaTreintaDiasAntes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaTreintaDiasAntes < 10) {
    diaTreintaDiasAntes = "0" + diaTreintaDiasAntes;
  }
  if (mesTreintaDiasAntes < 10) {
    mesTreintaDiasAntes = "0" + mesTreintaDiasAntes;
  }

  // Formatear la fecha treinta días atrás como texto
  var fechaTreintaDiasAntesFormateada =
    añoTreintaDiasAntes +
    "-" +
    mesTreintaDiasAntes +
    "-" +
    diaTreintaDiasAntes +
    " " +
    "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada =
    añoActual + "-" + mesActual + "-" + diaActual + " " + "23:59:59";

  // Imprimir las fechas

  dataInfo.dateInicion = fechaTreintaDiasAntesFormateada;
  dataInfo.dateFin = fechaActualFormateada; 
}

function funcionUltimos100Dias() {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Obtener la fecha treinta días atrás
  var fechaTreintaDiasAntes = new Date(fechaActual);
  fechaTreintaDiasAntes.setDate(fechaActual.getDate() - 100);

  // Obtener los componentes de la fecha treinta días atrás
  var diaTreintaDiasAntes = fechaTreintaDiasAntes.getDate();
  var mesTreintaDiasAntes = fechaTreintaDiasAntes.getMonth() + 1; // Los meses comienzan desde 0
  var añoTreintaDiasAntes = fechaTreintaDiasAntes.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaTreintaDiasAntes < 10) {
    diaTreintaDiasAntes = "0" + diaTreintaDiasAntes;
  }
  if (mesTreintaDiasAntes < 10) {
    mesTreintaDiasAntes = "0" + mesTreintaDiasAntes;
  }

  // Formatear la fecha treinta días atrás como texto
  var fechaTreintaDiasAntesFormateada =
    añoTreintaDiasAntes +
    "-" +
    mesTreintaDiasAntes +
    "-" +
    diaTreintaDiasAntes +
    " " +
    "00:00:00";

  // Obtener los componentes de la fecha actual
  var diaActual = fechaActual.getDate();
  var mesActual = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
  var añoActual = fechaActual.getFullYear();

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (diaActual < 10) {
    diaActual = "0" + diaActual;
  }
  if (mesActual < 10) {
    mesActual = "0" + mesActual;
  }

  // Formatear la fecha actual como texto
  var fechaActualFormateada =
    añoActual + "-" + mesActual + "-" + diaActual + " " + "23:59:59";

  // Imprimir las fechas

  dataInfo.dateInicion = fechaTreintaDiasAntesFormateada;
  dataInfo.dateFin = fechaActualFormateada;

 
}

function calcularVelocidadMaxima(posiciones) {
  let velocidadMaxima = 0;
  posiciones.forEach((posicion) => {
    const velocidadActual = parseFloat(posicion.veloc);
    if (!isNaN(velocidadActual) && velocidadActual > velocidadMaxima) {
      velocidadMaxima = velocidadActual;
    }
  });
  return velocidadMaxima;
}

function calcularTiempoRecorrido(posicionInicial, posicionFinal) {
  console.log("posicionInicial" + posicionInicial);
  console.log("posicionFinal" + posicionFinal);
  const fechaInicial = new Date(posicionInicial);
  const fechaFinal = new Date(posicionFinal);

  console.log(fechaInicial);
  console.log(fechaFinal);
  const tiempoTranscurridoMs = fechaFinal - fechaInicial;
  const segundosTranscurridos = tiempoTranscurridoMs / 1000;

  const horas = Math.floor(segundosTranscurridos / 3600);
  const minutos = Math.floor((segundosTranscurridos % 3600) / 60);
  const segundos = Math.floor(segundosTranscurridos % 60);
  console.log(horas);
  console.log(minutos);
  console.log(segundos);
  return { horas, minutos, segundos };
}

// Suponiendo que tienes un arreglo llamado 'datos' que contiene tus objetos

function calcularTiempoRecorridoDatos(datos) {
  // Ordena los datos por la fecha y hora
 
  // datos.sort((a, b) => new Date(a.data_gps_br) - new Date(b.data_gps_br));

  let primerEncendido = null;
  let segundoEncendido = null;

  // Encuentra el primer punto donde la ignición está encendida
  for (let i = 0; i < datos.length; i++) {
      if (datos[i].ignicao === "1") {
          primerEncendido = i;
          break;
      }
  }

  // Encuentra el siguiente punto donde la ignición está encendida después del primer punto
  for (let i = primerEncendido + 1; i < datos.length; i++) {
      if (datos[i].ignicao === "1") {
          segundoEncendido = i;
          break;
      }
  }

  // Calcula la diferencia de tiempo si se encontraron dos puntos de encendido
  if (primerEncendido !== null && segundoEncendido !== null) {
    console.log("primerEncendido")
    console.log(primerEncendido)
    console.log("segundoEncendido")
    console.log(segundoEncendido)
    
      const tiempoInicio = new Date(datos[primerEncendido].data_gps_br);
      const tiempoFin = new Date(datos[segundoEncendido].data_gps_br);
      const tiempoRecorrido = tiempoFin - tiempoInicio;
      // Convertir la diferencia de tiempo de milisegundos a segundos
      const segundosRecorridos = tiempoRecorrido / 1000;
      return segundosRecorridos;
  } else {
      return "No se encontraron dos puntos con ignición encendida consecutivos.";
  }
}

// Suponiendo que tienes un arreglo llamado 'datos' que contiene tus objetos

// Suponiendo que tienes un arreglo llamado 'datos' que contiene tus objetos

// Suponiendo que tienes un arreglo llamado 'datos' que contiene tus objetos

// Suponiendo que tienes un arreglo llamado 'datos' que contiene tus objetos

function calcularTiempoRecorrido2(datos) {
  let primerEncendido = null;
  let segundoEncendido = null;

  // Encuentra el primer punto donde la ignición está encendida
  for (let i = 0; i < datos.length; i++) {
      if (datos[i].ignicao === "1") {
          if (primerEncendido === null) {
              primerEncendido = i;
          } else {
              segundoEncendido = i;
              break;
          }
      }
  }

  // Si se encontraron dos puntos de encendido, calcula el tiempo recorrido y el subarray restante
  if (primerEncendido !== null && segundoEncendido !== null) {
      const tiempoInicio = new Date(datos[primerEncendido].data_gps_br);
      const tiempoFin = new Date(datos[segundoEncendido].data_gps_br);
      const tiempoRecorrido = tiempoFin - tiempoInicio;
      // Convertir la diferencia de tiempo de milisegundos a segundos
      const segundosRecorridos = tiempoRecorrido / 1000;

      // Crear el subarray restante
      const subArrayRestante = datos.slice(segundoEncendido);

      return {
          tiempoRecorrido: segundosRecorridos,
          subArrayRestante: subArrayRestante
      };
  } else {
      return null; // Si no se encontraron dos puntos consecutivos con ignición encendida
  }
}

// Llamada a la función repetidamente hasta que el tamaño del subarray retornado sea cero




// Llamada a la función y mostrar el resultado


// Llamada inicial a la función
// calcularTiempoRecorridoRecursivo(datos, -1); // Empieza desde el primer punto, por eso el índice inicial es -1

// Llamada inicial a la función
 // Empieza desde el primer punto, por eso el índice inicial es -1

// Llamada a la función y mostrar el resultado
// const tiempoRecorrido = calcularTiempoRecorrido(datos);
// console.log("Tiempo recorrido (segundos):", tiempoRecorrido);



function funcionPersonalizado() {
  // Tu lógica para la opción 'Personalizado'
  // var fechasFormulario = document.getElementById('fechasFormulario');
  // fechasFormulario.style.display = 'bloc';
  abrirModal();
  console.log("Personalizado seleccionado");
}
function abrirModal() {
  modal.style.display = "block";
}

function cerrarModal() {
  modal.style.display = "none";
}
function enviarPosiciones() {
  var dateInicioElement = document.getElementById("dateInicioPerso");
  var dateInicioValue = dateInicioElement.value;
  dataInfo.dateInicion = convertirDateIso(dateInicioValue);

  var dateFinElement = document.getElementById("dateFinPerso");
  var dateFinValue = dateFinElement.value;
  dataInfo.dateFin = convertirDateIso(dateFinValue);

  console.log("Personalizado Inicio valor", dateFinValue);
  console.log("Personalizado Inicio Convetido a ISO", dataInfo.dateInicion);

  console.log("Personalizado");
  console.log("De: " + dataInfo.dateInicion + "  A: " + dataInfo.dateFin);

  muestraViajes();
}

function convertirDateIso(date) {
  // Fecha en formato ISO 8601
  var fechaISO = date;
  // Crear un objeto Date
  var fecha = new Date(fechaISO);
  // Obtener los componentes de la fecha
  var year = fecha.getFullYear();
  var month = String(fecha.getMonth() + 1).padStart(2, "0"); // Añadir ceros a la izquierda si es necesario
  var day = String(fecha.getDate()).padStart(2, "0");
  var hours = String(fecha.getHours()).padStart(2, "0"); // Añadir ceros a la izquierda si es necesario
  var minutes = String(fecha.getMinutes()).padStart(2, "0"); // Añadir ceros a la izquierda si es necesario
  var seconds = String(fecha.getSeconds()).padStart(2, "0"); // Añadir ceros a la izquierda si es necesario
  // Formatear la fecha en el formato deseado
  // Formatear la fecha en el formato deseado
  var fechaFormateada =
    year +
    "-" +
    month +
    "-" +
    day +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  return fechaFormateada;
}



const objeto1 = {
  "horas": 0,
  "minutos": 30,
  "segundos": 50
};

const objeto2 = {
  "horas": 0,
  "minutos": 28,
  "segundos": 6
};

function sumarTiempoObejo(objeto1, objeto2) {
  let sumaHoras = objeto1.horas + objeto2.horas;
  let sumaMinutos = objeto1.minutos + objeto2.minutos;
  let sumaSegundos = objeto1.segundos + objeto2.segundos;

  // Verificar si los segundos o los minutos superan 60 y ajustar en consecuencia
  if (sumaSegundos >= 60) {
      sumaMinutos += Math.floor(sumaSegundos / 60);
      sumaSegundos %= 60;
  }
  if (sumaMinutos >= 60) {
      sumaHoras += Math.floor(sumaMinutos / 60);
      sumaMinutos %= 60;
  }

  // Verificar si las horas superan 24 y ajustar en consecuencia
  let diasExtra = 0;
  if (sumaHoras >= 24) {
      diasExtra = Math.floor(sumaHoras / 24);
      sumaHoras %= 24;
  }

  return {
      "dias": diasExtra,
      "horas": sumaHoras,
      "minutos": sumaMinutos,
      "segundos": sumaSegundos
  };
}




