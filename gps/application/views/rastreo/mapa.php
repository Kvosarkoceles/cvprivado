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
  @media only screen and (max-height: 800px) {
    #mapid {
      background-color: #ffffff;
      height: 650px;
      /* Ajusta la altura del mapa para dispositivos móviles */
    }

    #tablaUltimaPosicion {
      background-color: #31373d;
      /* height: 650px; */
      /* Ajusta la altura del mapa para dispositivos móviles */
    }


    
  }

  #tablaUltimaPosicion {
      background-color: #31373d;
      /* height: 480px; */
      /* Ajusta la altura del mapa para dispositivos móviles */
    }
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
  <div id="tablaUltimaPosicion">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Ultima Posicion</h3>
      </div>
      <div class="card-body">
        <table id="example1" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Fecha</th>    
              <th>Ultimo Evento</th>            
              <th>Direcion</th>
              <th>Velocidad</th>
              <th>Odometro</th>
              <th>Ignicion</th>
              <th>Origen</th>
              <th>Satelites</th>
              <th>Bateria</th>
            </tr>
          </thead>
          <tbody>           
          </tbody>         
        </table>
        <div class="col-sm text-right"> <!-- Alineación a la derecha -->
          <button id="boton3" type="button" class="btn btn-sm btn-primary" onclick="cerrarTabla(1)">Cerrar</button> <!-- Clase btn-sm para hacerlo pequeño -->
        </div>

      </div>
    </div>
  </div>

  <div id="tablaRuta">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Ruta</h3>
      </div>
      <div class="card-body">
        <table id="example2" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Fecha</th>    
              <th>Evento</th>            
              <th>Direcion</th>
              <th>Velocidad</th>
              <th>Odometro</th>
              <th>Ignicion</th>
              <th>Origen</th>
              <th>Satelites</th>
              <th>Bateria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="fechaUltimaPosicion">Fecha de Inicio </td>   
              <td id="eventoUltimaPosicion">Evento</td>           
              <td id="direccionUltimaPosicion">Direcion</td>
              <td id="velocidadUltimaPosicion">Velocidad</td>
              <td id="odometroUltimaPosicion">Odometro</td>
              <td id="ignicionUltimaPosicion">Ignicion</td>
              <td id="origenUltimaPosicion">Origen</td>
              <td id="satelitesUltimaPosicion">Satelites</td>
              <td id="bateriaUltimaPosicion">Bateria</td>

            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Fecha</th>      
              <th>Evento</th>    
              <th>Direcion</th>
              <th>Velocidad</th>
              <th>Odometro</th>
              <th>Ignicion</th>
              <th>Origen</th>
              <th>Satelites</th>
              <th>Bateria</th>
            </tr>
          </tfoot>
        </table>
        <div class="col-sm text-right"> <!-- Alineación a la derecha -->
          <button id="boton3" type="button" class="btn btn-sm btn-primary" onclick="cerrarTabla(2)">Cerrar</button> <!-- Clase btn-sm para hacerlo pequeño -->
        </div>

      </div>
    </div>
  </div>

</div>