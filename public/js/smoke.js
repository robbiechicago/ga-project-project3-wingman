console.log('Hello Niall')
var wingman = JSON.parse(localStorage.getItem('wingman'))

$(document).ready(function() {
  
  getQuestions();

  $('body').on('click', '#0', function(e){
    $('#smokeCont').slideUp()
    $('#presontation').append('<h1>'+ wingman.name + ' SAID YES</h1>')
    $('#presontation').slideDown()
  })

  $('body').on('click', '#1', function(e){
    location.href = "/home";
  })

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

      $.each(response.question, function(index, question) {8
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
  $('#questions').append('<h1 id="response">'+ text +'</h1>')

}
  
function translateText(value1){
  console.log(value1)
  var temp = (value1).split(' ')
  console.log(temp)
  var newText = temp.join('+')
  console.log('new Text = '+newText)
  var langCode 
  if(JSON.parse(localStorage.getItem('wingman')).lang) {
    langCode = JSON.parse(localStorage.getItem('wingman')).lang
    console.log('language set to: ' +langCode)
  }


  return $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=' + langCode + '&text=' + newText
    });
}

function appendCompliment(question) {
  console.log('append question section')
 
  $('#questions').append('<h1>' + question.questionText + '</h1>');


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
    $('ul#responses').append('<button class="responseLi ans-circle" id=' + index + '>' + text + '</button>');
}










