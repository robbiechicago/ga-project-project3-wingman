console.log('Hello')
var mainWindow = $('#compCont')
var presontationWindow = $('#presontation')


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
    var complimentText = $("#inputText").val()
    var complimentType = $(".current").html()
    console.log(complimentType+complimentText) 

    presontationWindow.append('<h1>'+ complimentType+ ' ' +complimentText +'</h1>')
    mainWindow.slideUp()
    presontationWindow.slideDown('slow')

  })
}
  
function translateText(value1, value2){

  var temp = (value1 + ' ' + value2).split(' ')
  var newText = temp.join('+')
  console.log(newText)
  var translatedText
  // var translatedText = $.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=HE&text=' + newText)

  // console.log(translatedText)
  // return translatedText

    translatedText = $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=HE&text=' + newText,
    dataType: "json",
    method: "get"
    })
    .done(function(response) {
      return response
      console.log(response)
    })

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
  $('ul#questions').append('<li class="slideup complimentLi" data-index="' + index + '">' + compliment.questionText + '</li>');
};







