console.log('Hello Niall')
$(document).ready(function() {
  $.ajax({
    url: endpoint,
    dataType: "json",
    method: "get"
  })
  .done(function(response) {
    var res1 = response
    console.log(response)

    // $.each(response.question, function(index, question) {8

    })
  })

})