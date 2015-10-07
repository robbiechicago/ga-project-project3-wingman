console.log('Hello')

$(document).ready(function() {

  var endpoint = '../views/questions/.erb'

  function getQuestions() {
    $.ajax({
      url: endpoint
    })
  }
});