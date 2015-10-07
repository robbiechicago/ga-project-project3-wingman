console.log('Hello')

$(document).ready(function() {

  getQuestions();
  $('body').on('click', '.complimentLi', function(e) {
    var elem = $(this);
    console.log(elem[0].dataset.index);
    elem.removeClass("slideup");
    $('.slideup').slideUp( "slow", function() {
      // Animation complete.
    });
    showTextBox();
  })

});
  
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

// function appendResponses (index, compliment) {
//   console.log('append responses section')
//   $('ul#questions').append('<li class="slideup complimentLi" data-index="' + index + '">' + compliment.questionText + '</li>');
// }

function appendCompliment(index, compliment) {
  console.log('append compliment section')
  $('ul#questions').append('<li class="slideup complimentLi" data-index="' + index + '">' + compliment.questionText + '</li>');
};







