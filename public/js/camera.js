$(document).ready(function() {
  console.log('Rendered Camera JS')
  
  Webcam.set({
      width: 400,
      height: 300,
      dest_width: 640,
      dest_height: 480,
      image_format: 'jpeg',
      jpeg_quality: 90,
      force_flash: false,
      flip_horiz: true,
      fps: 45
  });

  Webcam.attach( '#my_camera' );


})

function take_snapshot() {
  $('#my_camera').hide()
    Webcam.snap( function(data_uri) {
        document.getElementById('my_result').innerHTML = '<img src="'+data_uri+'"/>';
    } );
}