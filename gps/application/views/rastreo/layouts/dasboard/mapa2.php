<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MOTO-GPS | Moto</title>

  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">



  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/fontawesome-free/css/all.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/dist/css/adminlte.min.css">
</head>

<body class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
  <div class="wrapper">

    <!-- Preloader -->
    <div class="preloader flex-column justify-content-center align-items-center" id="preloader">
      <img class="animation__wobble" src="<?php echo base_url(); ?>base/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div>

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto"> <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge" id="numeroEventos">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header" id="numeroEventoTitulo">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->




    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="" class="brand-link">
        <img src="<?php echo base_url(); ?>base/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">MOTO-GPS</span>
      </a>

      <div class="sidebar">
        <div style="height: 350px; max-height: 350px;" id="Areainformes">
          <div id="informe" style="height: 350px;">
            <div style='margin-bottom: 5px; margin-top: 15px; text-align: center; color: white;'>
              <span style='font-weight: bold;' id="label"></span>
            </div>
            <div style='margin-bottom: 5px; text-align: center; color: white;' id="odometro">
            </div>
            <div style='margin-bottom: 5px; margin-top: 15px; text-align: left; color: white;'>
              <span style='font-weight: bold;'>Conductor:</span>
            </div>
            <div style='margin-bottom: 5px; text-align: left; color: white;' id="conductor">
            </div>
            <div style='margin-bottom: 5px; color: white; '>
              <table style="width: 100%; text-align: left;">
                <tr>
                  <td style='font-weight: bold; color: white;'>Fecha:</td>
                  <td style='font-weight: bold; color: white;'>Hora:</td>
                </tr>
                <tr>
                  <td style='color: white;' id="fecha"></td>
                  <td style='color: white;' id="hora"></td>
                </tr>
              </table>
            </div>
            <div style='margin-bottom: 5px; color: white;'>
              <table style="width: 100%; text-align: left;">
                <tr>
                  <td style='font-weight: bold; color: white;'>Velocidad:</td>
                  <td style='font-weight: bold; color: white;'>Recorrido:</td>
                </tr>
                <tr>
                  <td style='color: white;' id="velocidad"></td>
                  <td style='color: white;' id="recorrido"></td>
                </tr>
              </table>
            </div>
            <div style='margin-bottom: 5px; color: white;'>
              <table style="width: 100%; text-align: left;">
                <tr>
                  <td style='font-weight: bold; color: white;'>Vel. Med.:</td>
                  <td style='font-weight: bold; color: white;'>Vel. Máx.:</td>
                </tr>
                <tr>
                  <td style='color: white;' id="velMed"></td>
                  <td style='color: white;' id="velMax"></td>
                </tr>
              </table>
            </div>
            <div style='margin-bottom: 5px; color: white;'>
              <table style="width: 100%; text-align: left;">
                <tr>
                  <td style='font-weight: bold; color: white;'>Detenido:</td>
                  <td style='font-weight: bold; color: white;'>Movimiento:</td>
                </tr>
                <tr>
                  <td style='color: white;' id="detenido"></td>
                  <td style='color: white;' id="movimiento"></td>
                </tr>
              </table>
            </div>
          </div>
          <style>
            /* Estilo para la barra lateral */


            /* Estilo para el área de posiciones */
            #posicionesCard {
              max-height: 350px;
              /* Altura máxima */
              overflow-y: auto;
              /* Agrega scroll vertical cuando necesario */
            }
          </style>
          <div id="posicionesCard" style=" max-height: 350px; margin-top: 15px; height: 350px;">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title" id="tituloTabla">Posiciones</h3>
              </div>
              <!-- ./card-header -->
              <div class="card-body p-0">
                <table class="table table-hover tablaPosiciones" id="tablaPosiciones">
                  <tbody id="bodyTablaPosiciones">
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div id="posicionesSelect" style="max-height: 100px; height: 100px; color: white;">
                  <div class="form-group">
                    <label>Posiciones</label>
                    <select id="filtroTiempo" class="custom-select">
                      <option value="hoy">Hoy</option>
                      <option value="ayer">Ayer</option>
                      <option value="semana-actual">Semana Actual</option>
                      <option value="mes-actual">Mes Actual</option>
                      <option value="ultimos-7-dias">Últimos 7 días</option>
                      <option value="ultimos-30-dias">Últimos 30 días</option>
                      <option value="personalizado">Personalizado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Botones añadidos para "Viajes" y "Localizar" -->
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <button id="boton1" type="button" class="btn btn-block btn-primary">Viajes</button>
              </div>
              <div class="col-sm">
                <button id="boton3" type="button" class="btn btn-block btn-primary">Localizar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- /.sidebar -->



    </aside>
    <style>
      #mapid {

        /* Altura del mapa */
        background-color: #ffffff;
        height: 600px;
        /* Fondo blanco */
      }

      body {
        padding: 0;
        margin: 0;
      }

      html {
        height: 100%;
        width: 100vw;
      }

      body {
        height: 100%;
        width: 100vw;
      }
    </style>
    <div class="content-wrapper">
      <div id="mapid">

      </div>
      <style>
        .modal {
          display: none;
          /* Ocultar el modal por defecto */
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          /* Fondo semitransparente */
          overflow: auto;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 600px;
        }

        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      </style>
      <div id="modal" class="modal">
        <div class="modal-content">
          <div class="card card-info">
            <div class="card-header" style="text-align: center;">
              <h3 class="card-title">Posiciones</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form class="form-horizontal">
              <div class="card-body">
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-4 col-form-label">Fecha Inicial</label>
                  <div class="col-sm-8">
                    <input type="datetime-local" value="2024-07-23T11:00" min="2023-01-01T11:00" max="2024-11-23T11:00" step="3600" id="dateInicioPerso">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-4 col-form-label">Fecha Final</label>
                  <div class="col-sm-8">
                    <input type="datetime-local" value="2024-07-23T11:00" min="22023-01-01T11:00" max="2024-11-23T11:00" step="3600" id="dateFinPerso">
                  </div>
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <!-- <button onclick='cerrarModal()' id="cerrar" type="button" class="btn btn-block btn-primary">cerrar</button> -->
                <button onclick='enviarPosiciones()' type="button" class="btn btn-info">Enviar</button>
                <button onclick='cerrarModal()' type="button" class="btn btn-default float-right">Cancel</button>
              </div>
              <!-- /.card-footer -->
            </form>
          </div>
          <!-- <button class="close-button">Cerrar</button> -->
        </div>
      </div>
    </div>


    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>
  </div>
  <!-- ./wrapper -->

  <!-- REQUIRED SCRIPTS -->
  <!-- jQuery -->
  <script src="<?php echo base_url(); ?>base/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap -->
  <script src="<?php echo base_url(); ?>base/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- overlayScrollbars -->
  <script src="<?php echo base_url(); ?>base/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
  <!-- AdminLTE App -->
  <script src="<?php echo base_url(); ?>base/dist/js/adminlte.js"></script>

  <!-- PAGE PLUGINS -->
  <!-- jQuery Mapael -->
  <script src="<?php echo base_url(); ?>base/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/raphael/raphael.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/jquery-mapael/jquery.mapael.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/jquery-mapael/maps/usa_states.min.js"></script>
  <!-- ChartJS -->
  <script src="<?php echo base_url(); ?>base/plugins/chart.js/Chart.min.js"></script>

  <!-- AdminLTE for demo purposes -->
  <script src="<?php echo base_url(); ?>base/dist/js/demo.js"></script>
  <!-- DataTables  & Plugins -->
  <script src="<?php echo base_url(); ?>base/plugins/datatables/jquery.dataTables.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/jszip/jszip.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/pdfmake/pdfmake.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/pdfmake/vfs_fonts.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-buttons/js/buttons.print.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>


  <script src="<?php echo base_url(); ?>base/script/tracking/mapa.js"></script>
  <script src="<?php echo base_url(); ?>base/script/mapa/informacion.js"></script>
  <script src="<?php echo base_url(); ?>base/script/mapa/procesdata.js"></script>
  <script src="<?php echo base_url(); ?>base/script/mapa/mapa.js"></script>
  <script src="<?php echo base_url(); ?>base/script/mapa/viajes.js"></script>
  <script src="<?php echo base_url(); ?>base/script/mapa/alertas.js"></script>
  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
  <!-- <script src="<?php echo base_url(); ?>base/dist/js/pages/dashboard2.js"></script> -->
  <!-- <script src="<?php echo base_url(); ?>base/dist/js/pages/dashboard2.js"></script> -->
  <!-- <script src="<?php echo base_url(); ?>base/script/datos/informacion.js"></script>
  <script src="<?php echo base_url(); ?>base/script/datos/procesdata.js"></script>
  <script src="<?php echo base_url(); ?>base/script/tracking/mapa.js"></script>
  <script src="<?php echo base_url(); ?>base/script/datos/viajes.js"></script>
  <script src="<?php echo base_url(); ?>base/script/datos/mapa.js"></script>1 -->

  <!-- <script>
 
  var mymap = L.map('mymap').setView([51.505, -0.09], 13);


  L.tileLayer('https://{s}.mymaptile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);

  
  L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('¡Hola, mundo!')
    .openPopup();
</script> -->

  <script>
    function actualizarMensajes(mensajes) {
      alert(JSON.stringify(mensajes));
      var messageList = document.getElementById("messageList");
      var badgeCounter = document.getElementById("badgeCounter");

      // Reiniciar lista de mensajes
      messageList.innerHTML = '';

      // Recorrer mensajes y agregarlos a la lista
      mensajes.forEach(function(mensaje) {
        var messageItem = document.createElement("a");
        messageItem.classList.add("dropdown-item");

        var messageContent = `
          <div class="media">
            <img src="${mensaje.avatar}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
            <div class="media-body">
              <h3 class="dropdown-item-title">
                ${mensaje.nombre}
                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
              </h3>
              <p class="text-sm">${mensaje.contenido}</p>
              <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i>${mensaje.hace}</p>
            </div>
          </div>
        `;
        messageItem.innerHTML = messageContent;
        messageList.appendChild(messageItem);
      });

      // Actualizar contador de mensajes
      badgeCounter.textContent = mensajes.length;
    }

    // Ejemplo de uso
    var mensajes = [{
        nombre: "Brad Diesel",
        avatar: "../../dist/img/user1-128x128.jpg",
        contenido: "Call me whenever you can...",
        hace: "5 Hours Ago"
      },
      {
        nombre: "John Pierce",
        avatar: "../../dist/img/user8-128x128.jpg",
        contenido: "I got your message bro",
        hace: "5 Hours Ago"
      },
      {
        nombre: "Nora Silvester",
        avatar: "../../dist/img/user3-128x128.jpg",
        contenido: "The subject goes here",
        hace: "4 Hours Ago"
      }
    ];

    // Actualizar los mensajes
    actualizarMensajes(mensajes);
  </script>

  <script>
    $(function() {
      $("#example1").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "pageLength": 5,
        "searching": false,
      })

    });
  </script>

</body>

</html>