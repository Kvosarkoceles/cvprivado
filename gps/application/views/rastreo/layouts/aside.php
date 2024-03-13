<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="javascript:start()" class="brand-link">
        <img src="<?php echo base_url(); ?>base/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">MOTO-GPS</span>
    </a>

    <!-- Sidebar -->
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
            <div id="posicionesCard" style=" max-height: 200px; margin-top: 15px; height: 400px;">
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
                                        <input type="datetime-local" value="2024-07-23T11:00" min="2024-03-23T11:00" max="2024-11-23T11:00" step="3600">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" class="col-sm-4 col-form-label">Fecha Final</label>
                                    <div class="col-sm-8">
                                        <input type="datetime-local" value="2024-07-23T11:00" min="2024-03-23T11:00" max="2024-11-23T11:00" step="3600">
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <!-- <button onclick='cerrarModal()' id="cerrar" type="button" class="btn btn-block btn-primary">cerrar</button> -->
                                <button onclick='enviarPosiciones()' type="button" class="btn btn-info">Sign in</button>
                                <button onclick='cerrarModal()' type="button" class="btn btn-default float-right">Cancel</button>
                            </div>
                            <!-- /.card-footer -->
                        </form>
                    </div>
                    <!-- <button class="close-button">Cerrar</button> -->
                </div>
            </div>

            <div id="modalRutas" class="modal">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Ruta</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick='cerrarModalViajes()'>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Dato</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Fecha de Inicio:</th>
                                            <td id="modalRutasInicio"></td>
                                        </tr>
                                        <tr>
                                            <th>Fecha de Finalizacion:</th>
                                            <td id="modalRutasFin"></td>
                                        </tr>
                                        <tr>
                                            <th>Direcion Inicial</th>
                                            <td id="modalRutasDireccionInicial"></td>
                                        </tr>
                                        <tr>
                                            <th>Direcion Final</th>
                                            <td id="modalRutasDireccionFin"></td>
                                        </tr>
                                        <tr>
                                            <th>Distancia Recorrida:</th>
                                            <td id="modalRutasDistancia"></td>
                                        </tr>
                                        <tr>
                                            <th>Tiempo de Viaje:</th>
                                            <td id="modalRutasTiempo"><span class="tag tag-success"></span></td>
                                        </tr>
                                        <tr>
                                            <th>Velocidad Maxima:</th>
                                            <td id="modalRutasVmax"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button onclick='cerrarModalRutaCompleta()' type="button" class="btn btn-default float-right">Cerrar</button>

                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>
        <!-- /.sidebar-menu -->
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

    <div class="container">
        <div class="row">
            <div class="col">
                <div style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;'>
                        <button id="boton1" type="button" class="btn btn-block btn-primary">botn1</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;'>
                        <button id="boton2" type="button" class="btn btn-block btn-primary">botn2</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;'>
                        <button id="boton3" type="button" class="btn btn-block btn-primary">Boton3</button>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!-- <div class="container">
        <div class="row">
            <div class="col-sm">
                <div id="boton_menu" style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;  text-align: right;' id="boton">
                        <button onclick='verUbicacion()' id="myUbicacion" type="button" class="btn btn-block btn-primary" style="display: none;">Localizar</button>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div id="boton_menu" style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;' id="boton">
                        <button onclick='limpiarTabla()' id="limpiarTabla" type="button" class="btn btn-block btn-primary">Limpiar</button>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div id="boton_menu" style="margin-top: 15px;">
                    <div style='margin-bottom: 5px; color: white; float: right;' id="boton">
                        <button onclick='posiciones()' id="myPosiciones" type="button" class="btn btn-block btn-primary" style="display: bloc;">Posiciones</button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- /.sidebar -->
</aside>