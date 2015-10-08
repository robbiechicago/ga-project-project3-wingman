$(document).ready(function() {
  console.log('Hello Niall')
  resetLocalVar()
})

$('.icon').on('click', function(e){
  setLang($(this)[0].dataset.lang)
  location.href = "/go";
})

//retrive local data, assign it to var
var wingman = JSON.parse(localStorage.getItem('wingman'))

//resets local data to empty object
function resetLocalVar(){
  wingman = {}
  localStorage.setItem('wingman', JSON.stringify(wingman))
}

//sets language code within 'WINGMAN' local data
function setLang(langCode){
  wingman.name = ''
  wingman.lang = langCode
  wingman.activity = []
  localStorage.setItem('wingman', JSON.stringify(wingman))

}

