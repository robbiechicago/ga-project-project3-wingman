$(document).ready(function() {
  console.log('go js loaded')

  $('.go-circle').on('click', function(){
    location.href = "/home";
  })

  $('.stop-circle').on('click', function(){
    location.href = "/logout";
  })

})
