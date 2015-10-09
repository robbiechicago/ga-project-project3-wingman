$(document).ready(function() {
  console.log('This is the main page')

  $('#footer').on('click', function(){
    location.href = "/home";
    console.log("click!")
  })

})