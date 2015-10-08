$(document).ready(function() {
  console.log('Hello Niall')
  translateNameQuestion()


  $('#inputSubmit').on('click', function(e){
    e.preventDefault()
    setLocalName($('#inputText').val())
  })

})

var langCode = JSON.parse(localStorage.getItem('wingman')).lang
function translateNameQuestion(){
  translatedText = translateText('WHAT IS YOUR NAME?')

  translatedText.done(function(response){
    console.log(response)
    $('#nameQuestion').append('<h1>' + response.text[0] + '</h1>') 
  })

}

var wingman = JSON.parse(localStorage.getItem('wingman'))

function setLocalName(name){
  wingman.name = name
  localStorage.setItem('wingman', JSON.stringify(wingman))
  location.href = "/home";
}

function translateText(value1){

  var temp = (value1).split(' ')
  var newText = temp.join('+')

  var langCode 
  if(JSON.parse(localStorage.getItem('wingman')).lang) {
    langCode = JSON.parse(localStorage.getItem('wingman')).lang
    console.log('language set to: ' +langCode)
  }


  return $.ajax({
    url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20151005T100356Z.3c97f274db97659e.4f6d68f66d7e6855016e1fa832b97841210a0e43&lang=' + langCode + '&text=' + newText
    });
}