$(document).ready(function() {
  console.log('go js loaded')

  $('.go-circle').on('click', function(){
    location.href = "/getName";
  })

  $('.stop-circle').on('click', function(){
    location.href = "/logout";
  })

})
