<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MOTO-GPS | Moto</title>


  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">


  <link rel="stylesheet" href="<?php echo base_url(); ?>base/leafletjs/leaflet.css">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/dist/css/adminlte.min.css">


  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">


  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/fontawesome-free/css/all.min.css">
  <!-- daterange picker -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/daterangepicker/daterangepicker.css">
  <!-- iCheck for checkboxes and radio inputs -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Bootstrap Color Picker -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css">
  <!-- Tempusdominus Bootstrap 4 -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
  <!-- Bootstrap4 Duallistbox -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css">
  <!-- BS Stepper -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/bs-stepper/css/bs-stepper.min.css">
  <!-- dropzonejs -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/dropzone/min/dropzone.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>base/dist/css/adminlte.min.css">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NKX94EJELJ"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-NKX94EJELJ');
  </script>
</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="<?php echo base_url(); ?>" class="nav-link">Posiciones</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="<?php echo base_url(); ?>" class="nav-link">Viajes</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">

      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="<?php echo base_url(); ?>" class="brand-link">
        <img src="<?php echo base_url(); ?>base/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">MOTO-GPS</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <div id="informe">
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
        <div id="posicionesCard" style="overflow-y: auto; max-height: 400px; margin-top: 15px;">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Posiciones</h3>
            </div>
            <!-- ./card-header -->
            <div class="card-body p-0">
              <table class="table table-hover" id="tablaPosiciones">
                <tbody>


                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <!-- Sidebar Menu -->
        <div id="botones" style="position: fixed; top: 500px; float: right;">
          <div id="boton_menu" style="margin-top: 15px;">
            <div style='margin-bottom: 5px; color: white; float: right;  text-align: right;' id="boton">
              <button onclick='verUbicacion()' id="myUbicacion" type="button" class="btn btn-block btn-primary" style="display: none;">Localizar</button>
            </div>
          </div>
          <div id="boton_menu" style="margin-top: 15px;">
            <div style='margin-bottom: 5px; color: white; float: right;' id="boton">
              <button onclick='posicionesDate()' id="myPosiciones" type="button" class="btn btn-block btn-primary" style="display: block;">Posiciones</button>
            </div>
          </div>
        </div>

        <div style='margin-bottom: 5px; margin-top: 15px; text-align: center; color: white;'>
          <div class="form-group" style="display: bkoc;" id="datePosiciones">
            <label>Fechas</label>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="far fa-clock"></i></span>
              </div>
              <input type="text" class="form-control float-right" id="reservationtime">
            </div>

          </div>
        </div>
        <!-- /.sidebar-menu -->
      </div>

      <!-- /.sidebar -->
    </aside>

    <div class="content-wrapper" id="mapid">

    </div>

    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <!-- jQuery -->
  <script src="<?php echo base_url(); ?>base/plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="<?php echo base_url(); ?>base/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Select2 -->
  <script src="<?php echo base_url(); ?>base/plugins/select2/js/select2.full.min.js"></script>
  <!-- Bootstrap4 Duallistbox -->
  <script src="<?php echo base_url(); ?>base/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js"></script>
  <!-- InputMask -->
  <script src="<?php echo base_url(); ?>base/plugins/moment/moment.min.js"></script>
  <script src="<?php echo base_url(); ?>base/plugins/inputmask/jquery.inputmask.min.js"></script>
  <!-- date-range-picker -->
  <script src="<?php echo base_url(); ?>base/plugins/daterangepicker/daterangepicker.js"></script>
  <!-- bootstrap color picker -->
  <script src="<?php echo base_url(); ?>base/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
  <!-- Tempusdominus Bootstrap 4 -->
  <script src="<?php echo base_url(); ?>base/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
  <!-- Bootstrap Switch -->
  <script src="<?php echo base_url(); ?>base/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>
  <!-- BS-Stepper -->
  <script src="<?php echo base_url(); ?>base/plugins/bs-stepper/js/bs-stepper.min.js"></script>
  <!-- dropzonejs -->
  <script src="<?php echo base_url(); ?>base/plugins/dropzone/min/dropzone.min.js"></script>
  <!-- AdminLTE App -->
  <script src="<?php echo base_url(); ?>base/dist/js/adminlte.min.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="<?php echo base_url(); ?>base/dist/js/demo.js"></script>
  <!-- Page specific script -->
  <script>
    $(function() {
      //Initialize Select2 Elements
      $('.select2').select2()

      //Initialize Select2 Elements
      $('.select2bs4').select2({
        theme: 'bootstrap4'
      })

      //Datemask dd/mm/yyyy
      $('#datemask').inputmask('dd/mm/yyyy', {
        'placeholder': 'dd/mm/yyyy'
      })
      //Datemask2 mm/dd/yyyy
      $('#datemask2').inputmask('mm/dd/yyyy', {
        'placeholder': 'mm/dd/yyyy'
      })
      //Money Euro
      $('[data-mask]').inputmask()

      //Date picker
      $('#reservationdate').datetimepicker({
        format: 'L'
      });

      //Date and time picker
      $('#reservationdatetime').datetimepicker({
        icons: {
          time: 'far fa-clock'
        }
      });

      //Date range picker
      $('#reservation').daterangepicker()
      //Date range picker with time picker
      $('#reservationtime').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
          format: 'MM/DD/YYYY hh:mm A'
        }
      })
      //Date range as a button
      $('#daterange-btn').daterangepicker({
          ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: moment().subtract(29, 'days'),
          endDate: moment()
        },
        function(start, end) {
          $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
        }
      )

      //Timepicker
      $('#timepicker').datetimepicker({
        format: 'LT'
      })

      //Bootstrap Duallistbox
      $('.duallistbox').bootstrapDualListbox()

      //Colorpicker
      $('.my-colorpicker1').colorpicker()
      //color picker with addon
      $('.my-colorpicker2').colorpicker()

      $('.my-colorpicker2').on('colorpickerChange', function(event) {
        $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
      })

      $("input[data-bootstrap-switch]").each(function() {
        $(this).bootstrapSwitch('state', $(this).prop('checked'));
      })

    })




    // DropzoneJS Demo Code End
  </script>

  <script src="<?php echo base_url(); ?>base/leafletjs/leaflet.js"></script>
  <script src="<?php echo base_url(); ?>base/script/moto.js"></script>

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
</body>

</html>