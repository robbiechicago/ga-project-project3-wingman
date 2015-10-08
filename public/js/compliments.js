console.log('Hello')
var mainWindow = $('#compCont')
var presontationWindow = $('#presontation')
var complimentText
var translatedText
$(document).ready(function() {

  getQuestions();
  $('body').on('click', '.complimentLi', function(e) {
    var elem = $(this);
    console.log(elem[0].dataset.index);
    elem.removeClass("slideup");
    elem.addClass("current");
    $('.slideup').slideUp( "slow", function() {
      // Animation complete.
    });
    showTextBox();
  })

  setEventListeners()

});

function setEventListeners(){
  $("#inputSubmit").on('click', function(event){
    event.preventDefault()
     complimentText = $("#inputText").val()
    var complimentType = $(".current").html()
    console.log(complimentType+complimentText) 

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
      console.log(translatedText)
      appendTranlaslation(translatedText)
    })



  })
}


function appendTranlaslation(text){

  presontationWindow.html('')
  presontationWindow.append('<h1 id="response">'+ text +'</h1>')

}
  
function translateText(value1, value2){

  var temp = (value1 + ' ' + value2).split(' ')
  console.log(temp)
  var newText = temp.join('+')
  console.log('new Text = '+newText)


  return $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=ES&text=' + newText
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

function showTextBox() {
  console.log('show text box section');
  $(".hidden").fadeIn( "slow", function() {
    // Animation complete
  });
}

function appendCompliment(index, compliment) {
  console.log('append compliment section')
  $('ul#questions').append('<button class="slideup complimentLi complimentButton" data-index="' + index + '">' + compliment.questionText + '</button>');

};







