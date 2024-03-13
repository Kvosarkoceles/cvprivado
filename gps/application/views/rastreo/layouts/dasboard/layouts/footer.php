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
<script src="<?php echo base_url(); ?>base/leafletjs/leaflet.js"></script>
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
<script src="<?php echo base_url(); ?>base/script/datos/viajes.js"></script>
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