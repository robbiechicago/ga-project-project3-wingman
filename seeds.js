var Response = require('./models/response')
var User = require('./models/user')
var Question = require('./models/question')

var user1 = new User({
  local:
  {
    username: 'rob',
    password: '$2a$08$boSocKqoq02aPgUyBnvpkOxcwC2z.UNfikT7NDAkt7EHosh9xsHi2'
  }
})

user1.save(function(err, airport) {
  if (err) console.log(err)
    console.log('user1 Saved');
})

// QUESTION 1
var question1 = new Question({
  questionName: 'compliment',
  questionText: 'YOU ARE VERY'
})

question1.responses.push({
  responseText: 'Thank you'
})

question1.responses.push({
  responseText: 'I\'m not interested, go away'
})

question1.save(function(err, question) {
  if (err) console.log(err)
    console.log('question1 Saved');
})

// QUESTION 2
var question2 = new Question({
  questionName: 'compliment',
  questionText: 'I LIKE YOUR'
})

question2.responses.push({
  responseText: 'Thank you'
})

question2.responses.push({
  responseText: 'Fuck off'
})

question2.save(function(err, question) {
  if (err) console.log(err)
    console.log('question2 Saved');
})

// QUESTION 3
var question3 = new Question({
  questionName: 'drink',
  questionText: 'SOMETHING TO DRINK?'
})

question3.responses.push({
  responseText: 'YES!'
})

question3.responses.push({
  responseText: 'NO THANKS'
})

question3.save(function(err, question) {
  if (err) console.log(err)
    console.log('question3 Saved');
})

// QUESTION 4 SMOKE
var question4 = new Question({
  questionName: 'smoke',
  questionText: 'WANT A CIGARETTE?'
})

question4.responses.push({
  responseText: 'YES!'
})

question4.responses.push({
  responseText: 'NO THANKS'
})

question4.save(function(err, question) {
  if (err) console.log(err)
    console.log('question4 Saved');
})

// QUESTION 5 DRINKTYPE
var question5 = new Question({
  questionName: 'drinkType',
  questionText: 'WHAT CAN I GET YOU?'
})

question5.responses.push({
  responseText: 'WINE'
})
question5.responses.push({
  responseText: 'BEER'
})
question5.responses.push({
  responseText: 'VODKA'
})
question5.responses.push({
  responseText: 'GIN'
})
question5.responses.push({
  responseText: 'COCKTAIL'
})
question5.responses.push({
  responseText: 'SODA'
})

question5.save(function(err, question) {
  if (err) console.log(err)
    console.log('question4 Saved');
})
