console.log('Hello')

$(document).ready(function() {

  
  console.log(endpoint)
  getQuestions();

});
  
  var endpoint = '/questions/type/compliment'

  function getQuestions() {
    $.ajax({
      url: endpoint,
      dataType: "json",
      method: "get"
    })
    .done(function(response) {
            var res1 = response

      console.log(response)
      $.each(response.question, function(index, compliment) {
        appendCompliment(compliment);
      })
    })
    .fail(function(response) {
      console.log(response)
    })
    .always(function(response) {

      console.log(response)
    })
  }

function appendCompliment(compliment) {
  console.log('append compliment section')
  $('ul#questions').append('<li>' + compliment.questionText + '</li>');
};