console.log('Hello Niall')
$(document).ready(function() {
    $('body').on('click', '.responseLi', function(e) {
    var elem = $(this);

    console.log($(this)[0].id)
    $('.slideup').slideUp( "slow", function() {
      // Animation complete.
    });

  })
  getQuestions();

  $('body').on('click', '#0', function(e) {
    location.href = "/drinkType";
  })
  $('body').on('click', '#1', function(e) {
    location.href = "/home";
  })

});
  
  var endpoint = '/questions/type/drink'

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
        // appendCompliment(question);
        translatedResponse = translateText(question.questionText)


        var translatedText = '';
        translatedResponse.done(function(response) {

          translatedText = response.text[0]
          console.log(translatedText)
          appendTranlaslation(translatedText)
          appendResponses(question)
    })
      })
    })
    .fail(function(response) {
      console.log(response)
    })
  }


function appendTranlaslation(text){

  $('#questions').html('')
  $('#questions').append('<h1 class='+response+'id="response">'+ text +'</h1>')

}
  
function translateText(value1){
  console.log(value1)
  var temp = (value1).split(' ')
  console.log(temp)
  var newText = temp.join('+')
  console.log('new Text = '+newText)


  return $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=EN&text=' + newText
    });
}

function appendCompliment(question) {
  console.log('append question section')
 
  $('#questions').append('<h1>' + question.questionText + '</     h1>');


};

function appendResponses(question){
  $.each(question.responses, function(index, response){

        translatedResponse = translateText(question.responses[index].responseText)

        var translatedText = '';
        translatedResponse.done(function(response) {

        translatedText = response.text[0]
        console.log(translatedText)
        appendResponsesTranslated(translatedText, index)
      })

  })

}
function appendResponsesTranslated(text, index){
    $('ul#responses').append('<li class="responseLi" id=' + index + '>' + text + '</li>');
}










