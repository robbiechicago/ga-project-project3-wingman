$(document).ready(function() {
  console.log('Home js loaded')

  $('#smoke').on('click', function(){
    location.href = "/smoke";
  })

  $('#compliment').on('click', function(){
    location.href = "/compliment";
  })

  $('#bye').on('click', function(){
    location.href = "/go";
  })
  
  $('#drink').on('click', function(){
    location.href = "/drink";
  })


})