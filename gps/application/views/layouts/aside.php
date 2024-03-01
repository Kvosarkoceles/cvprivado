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
                    <button onclick='posiciones()' id="myPosiciones" type="button" class="btn btn-block btn-primary" style="display: block;">Posiciones</button>
                </div>
            </div>
        </div>
        <!-- /.sidebar-menu -->
    </div>

    <!-- /.sidebar -->
</aside>