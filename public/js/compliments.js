console.log('Hello')
var mainWindow = $('#compCont')
var presontationWindow = $('#presontation')
var complimentText
var translatedText
$(document).ready(function() {

  getQuestions();
  $('body').on('click', '.complimentLi', function(e) {
    var elem = $(this);
    elem.removeClass("slideup");
    elem.addClass("current");
    $('.slideup').slideUp("slow")
    showTextBox();
  })

  setEventListeners()

});

function showTextBox() {
  console.log('show text box section');
  $(".hidden").fadeIn( "slow")
}

function setEventListeners(){

  $("#inputSubmit").on('click', function(event){
    event.preventDefault()
     complimentText = $("#inputText").val()
    var complimentType = $(".current").html()
    presontationWindow.prepend('<h1 id="response">'+ complimentType+ ' ' +complimentText +'</h1>')
    mainWindow.slideUp()
    presontationWindow.slideDown('slow')
  })

  $('#translate').on('click', function(){
    var complimentType = $(".current").html()
    translatedResponse = translateText(complimentType, complimentText)
    var translatedText = '';
    translatedResponse.done(function(response) {
      translatedText = response.text[0]
      appendTranlaslation(translatedText)
    })
  })

  $('#dance').on('click', function(e){
    mainWindow.slideUp()
    staticTranslate('Your dancing is', 'amazing!')
    presontationWindow.slideDown('slow')
  }) 
  $('#eyes').on('click', function(e){
    mainWindow.slideUp()
    staticTranslate('beautiful', 'eyes!')
    presontationWindow.slideDown('slow')
  })
  $('#clothes').on('click', function(e){
    mainWindow.slideUp()
    staticTranslate('i like your', 'outfit!')
    presontationWindow.slideDown('slow')
  }) 
  $('#perfect').on('click', function(e){
    mainWindow.slideUp()
    staticTranslate('you are very', 'sexy!')
    presontationWindow.slideDown('slow')
  })  



}


function staticTranslate(text, text2) {
  translatedResponse = translateText(text, text2)
  translatedResponse.done(function(response) {
    translatedText = response.text[0]
    appendTranlaslation(translatedText)
  })
}  

function translateText(value1, value2){
  var temp = (value1 + ' ' + value2).split(' ')
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


var endpoint = '/questions/type/compliment'

function getQuestions() {
  $.ajax({
    url: endpoint,
    dataType: "json",
    method: "get"
  })
  .done(function(response) {
    $.each(response.question, function(index, compliment) {
      appendCompliment(index, compliment);
    })
  })
  .fail(function(err) {
    console.log(err);
  })
}

function appendTranlaslation(text){

  presontationWindow.html('')
  presontationWindow.append('<h1 id="response">'+ text +'</h1>')

}

function appendCompliment(index, compliment) {
  $('ul#questions').append('<button class="slideup complimentLi complimentButton" data-index="' + index + '">' + compliment.questionText + '</button>');

};







