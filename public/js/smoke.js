console.log('Hello Niall')
$(document).ready(function() {
  
  getQuestions();

});
  
  var endpoint = '/questions/type/smoke'

  function getQuestions() {
    $.ajax({
      url: endpoint,
      dataType: "json",
      method: "get"
    })
    .done(function(response) {
      var res1 = response
      console.log(response)

      $.each(response.question, function(index, question) {
        appendCompliment(question);
        appendResponses(question);
      })
    })
    .fail(function(response) {
      console.log(response)
    })
  }

function appendCompliment(question) {
  console.log('append question section')
 
  $('#questions').append('<h1>' + question.questionText + '</     h1>');


};

function appendResponses(question){
  $.each(question.responses, function(index, response){

  $('ul#responses').append('<li>' + response.responseText + '</li>');
  })

}










