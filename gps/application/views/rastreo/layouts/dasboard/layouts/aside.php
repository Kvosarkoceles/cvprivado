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