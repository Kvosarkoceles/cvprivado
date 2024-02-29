
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
                        <span style='font-weight: bold;' id="label"></span>
                    </div>
                    <div style='margin-bottom: 5px; text-align: center; color: white;' id="odometro">
                        
                    </div>
                    <div style='margin-bottom: 5px; margin-top: 15px; text-align: left; color: white;'>
                        <span style='font-weight: bold;'>Conductor:</span>
                    </div>
                    <div style='margin-bottom: 5px; text-align: left; color: white;' id="conductor">
                        
                    </div>
                    <div style='margin-bottom: 5px; text-align: left; color: white;  margin-top: 15px;  text-align: center;'>
                        <span style='font-weight: bold;'>Ultimo Reporte</span>
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

                    <div style='margin-bottom: 5px; text-align: left; color: white;  margin-top: 15px;  text-align: center;'>
                        <span style='font-weight: bold;'>Resumen del dia</span>
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
                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-header">Mapas</li>
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