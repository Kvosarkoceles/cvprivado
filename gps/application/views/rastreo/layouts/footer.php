
<aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <strong>Copyright &copy; 2024 <a href="https://sarkoceles.com.mx">Sarkoceles</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.4.0
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

  <!-- <script>
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
  </script> -->

  <script>
    $(function() {
      $("#example1").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,
        "pageLength": 5,
        "searching": false,
        "scrollX": true
      })

      $("#example2").DataTable({
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
        "pageLength": 5,
        "searching": false,
        "scrollX": true
      })
      $("#example3").DataTable({
        "responsive": true,
        "lengthChange": false,
        "autoWidth": true,
        "pageLength": 5,
        "searching": false,
        "paging": false 
        
      })
      $("#example4").DataTable({
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