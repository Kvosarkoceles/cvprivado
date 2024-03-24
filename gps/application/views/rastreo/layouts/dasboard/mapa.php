<!-- <style>
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
</div> -->
<style>
  #mapid {

    /* Altura del mapa */
    background-color: #ffffff;
    height: 490px;
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


<div class="content-wrapper" id="ContenMapa">
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

  <!-- <div class="card" id="tablaRutaCompleta" style="display: none;">
    <div class="card-header">
      <h3 class="card-title">DataTable with default features</h3>
    </div>
    <div class="card-body">
      <table id="example1" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Fecha de Inicio </th>
            <th>Fecha de Finalizacion</th>
            <th>Direcion Inicial</th>
            <th>Direcion Final</th>
            <th>Distancia Recorrida</th>
            <th>Tiempo de Viaje</th>
            <th>Velocidad Maxima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fecha de Inicio </td>
            <td>Fecha de Finalizacion</td>
            <td>Direcion Inicial</td>
            <td>Direcion Final</td>
            <td>Distancia Recorrida</td>
            <td>Tiempo de Viaje</td>
            <td>Velocidad Maxima</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Fecha de Inicio </th>
            <th>Fecha de Finalizacion</th>
            <th>Direcion Inicial</th>
            <th>Direcion Final</th>
            <th>Distancia Recorrida</th>
            <th>Tiempo de Viaje</th>
            <th>Velocidad Maxima</th>
          </tr>
        </tfoot>
      </table>
    </div> 
  </div> -->

  <div class="card"  id="tablaRutaCompleta">
    <div class="card-header">
      <h3 class="card-title">DataTable with default features</h3>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <table id="example1" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Fecha de Inicio </th>
            <th>Fecha de Finalizacion</th>
            <th>Direcion Inicial</th>
            <th>Direcion Final</th>
            <th>Distancia Recorrida</th>
            <th>Tiempo de Viaje</th>
            <th>Velocidad Maxima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fecha de Inicio </td>
            <td>Fecha de Finalizacion</td>
            <td>Direcion Inicial</td>
            <td>Direcion Final</td>
            <td>Distancia Recorrida</td>
            <td>Tiempo de Viaje</td>
            <td>Velocidad Maxima</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Fecha de Inicio </th>
            <th>Fecha de Finalizacion</th>
            <th>Direcion Inicial</th>
            <th>Direcion Final</th>
            <th>Distancia Recorrida</th>
            <th>Tiempo de Viaje</th>
            <th>Velocidad Maxima</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- /.card-body -->
  </div>
</div>
