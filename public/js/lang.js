$(document).ready(function() {
  console.log('Hello Niall')

})

//retrive local data, assign it to var
var wingman = JSON.parse(localStorage.getItem('wingman'))


function resetLocalVar(){
  wingman = {}
  localStorage.setItem('wingman', JSON.stringify(wingman))
}

function setLang(langCode){
  wingman.name = ''
  wingman.lang = langCode
  wingman.activity = []
  localStorage.setItem('wingman', JSON.stringify(wingman))

}

