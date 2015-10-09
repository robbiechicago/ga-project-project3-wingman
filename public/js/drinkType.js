console.log('Hello Niall')
var wingman = JSON.parse(localStorage.getItem('wingman'))
$(document).ready(function() {
  getQuestions();

  $('body').on('click', '.responseLi', function(e) {
    var elem = $(this);
    var container = $('#responses')
    var presontation = $('#presontation')
    var drink = (elem[0].dataset.origional)
    presontation.append('<h1>' + wingman.name + ' would like a ' + drink + '</h1>')
    container.slideUp()
    presontation.slideDown()



  })
  
});
  var wingman = JSON.parse(localStorage.getItem('wingman'))
  var endpoint = '/questions/type/drinkType'

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
  // $('#questions').append('<h1 id="response">'+ text +'</h1>')

}
  
function translateText(value1){
  console.log(value1)
  var temp = (value1).split(' ')
  console.log(temp)
  var newText = temp.join('+')
  console.log('new Text = '+newText)
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
 
  $('#questions').append('<h1>' + question.questionText + '</     h1>');


};

function appendResponses(question){
  $.each(question.responses, function(index, response){
        var origionalText = question.responses[index].responseText
        translatedResponse = translateText(question.responses[index].responseText)

        var translatedText = '';
        translatedResponse.done(function(response) {

        translatedText = response.text[0]
        console.log(translatedText)
        appendResponsesTranslated(translatedText, index, origionalText)
      })

  })

}
function appendResponsesTranslated(text, index, origionalText){

    $('ul#responses').append('<button class="responseLi drink-circle" data-origional="' + origionalText +'" data-drinkType="' + text + '"id=' + index + '>' + text + '</button>');
}

function setLocalDataEvent(){

  eventText = 'You bought' + wingman.name + 'a drink'
  wingman.activity.push(eventText) 
  localStorage.setItem('wingman', JSON.stringify(wingman))


}










