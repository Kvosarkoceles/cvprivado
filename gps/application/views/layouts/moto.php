<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MOTO-GPS | Moto</title>

    <link rel="stylesheet" href="<?php echo base_url(); ?>base/leafletjs/leaflet.css">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="<?php echo base_url(); ?>base/plugins/fontawesome-free/css/all.min.css">
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
    <!-- Site wrapper -->
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="<?php echo base_url(); ?>moto/posiciones" class="nav-link">Posiciones</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="<?php echo base_url(); ?>moto/viajes" class="nav-link">Viajes</a>
                    </l </ul>

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
                <div>
                    <div style='margin-bottom: 5px; margin-top: 15px; text-align: center; color: white;'>
                        <span style='font-weight: bold;'>Lithium-06KFU7</span>
                    </div>
                    <div style='margin-bottom: 5px; text-align: center; color: white;'>
                        <span style='font-weight: bold;'>2.976,3 km</span>
                    </div>
                    <div style='margin-bottom: 5px; margin-top: 15px; text-align: left; color: white;'>
                        <span style='font-weight: bold;'>Conductor:</span>
                    </div>
                    <div style='margin-bottom: 5px; text-align: left; color: white;'>
                        MIGUELMENDOZA
                    </div>
                    <div style='margin-bottom: 5px; text-align: left; color: white;'>
                        <span style='font-weight: bold;'>Ultimo Reporte:</span>
                    </div>
                    <div style='margin-bottom: 5px; text-align: left; color: white;'>
                        2024-02-28 17:37:27
                    </div>                  
                    <div style='margin-bottom: 5px; text-align: left; color: white;'>
                        0,00Km/h
                    </div>

                    <div style='margin-bottom: 5px; color: white;'>
                        <table style="width: 100%; text-align: left;">
                            <tr>
                                <td style='font-weight: bold; color: white;'>Velocidad:</td>
                                <td style='font-weight: bold; color: white;'>Recorrido:</td>
                            </tr>
                            <tr>
                                <td style='color: white;'>0,00Km/h</td>
                                <td style='color: white;'>0,00Km/h</td>
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
                                <td style='color: white;'>0,00Km/h</td>
                                <td style='color: white;'>0,00Km/h</td>
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
                                <td style='color: white;'>00:00:00</td>
                                <td style='color: white;'>00:00:00</td>
                            </tr>
                        </table>
                    </div>



                 
                   
                    <div style='margin-bottom: 5px;'>
                        <span style='font-weight: bold;'>Movimiento:</span>
                        dataVeiculo.movimiento
                        &nbsp;&nbsp;
                        <span style='font-weight: bold;'>Odómetro:</span>
                        dataVeiculo.odometro
                        " km"
                    </div>
                </div>
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-header">Veiculos</li>
                        <li class="nav-item">



                        <li class="nav-item">
                            <a href="<?php echo base_url(); ?>moto/posiciones" class="nav-link">
                                <i></i>
                                <p> Posiciones</p>
                            </a>
                        </li>



                        <li class="nav-item">
                            <a href="<?php echo base_url(); ?>moto/viajes" class="nav-link">
                                <i></i>
                                <p> Viajes</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper" id="mapid">

        </div>
        <!-- /.content-wrapper -->

        <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 1.2.1
            </div>
            <strong>Copyright &copy; 2024 <a href="https://sarkoceles.com.mx">sarkoceles</a>.</strong> All rights reserved.
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
    <!-- AdminLTE App -->
    <script src="<?php echo base_url(); ?>base/dist/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="<?php echo base_url(); ?>base/dist/js/demo.js"></script>

    <script src="<?php echo base_url(); ?>base/leafletjs/leaflet.js"></script>
    <script src="<?php echo base_url(); ?>base/script/moto.js"></script>

</body>

</html>