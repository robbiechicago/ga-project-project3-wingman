//set up application 
var mongoose    = require('mongoose')
var express     = require('express')
var app         = express()
var server      = require('http').createServer(app)
var port        = process.env.PORT || 3000
var morgan      = require('morgan')
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/wingman')

var Response = require('./models/response')
var User = require('./models/user')
var Question = require('./models/question')

var user1 = new User({
  name: 'Niall Wallace',
  username: 'CrocoNiall',
  password: 'Password12',
  langCode: 'en'
})

user1.save(function(err, airport) {
  if (err) console.log(err)
    console.log('user1 Saved');
})

var question1 = new Question({
  questionText: 'Are you happy?'

})

response1 = new Response({
  responseText: "This is a response"
})

response1.save(function(err, response) {
  if (err) console.log(err)
    console.log('response1 Saved');
})

response2 = new Response({
  responseText: "Happy Response"
})

response2.save(function(err, response) {
  if (err) console.log(err)
    console.log('response1 Saved');
})

question1.responses.push({
  responseText: 'Yes'
})

question1.responses.push({
  responseText: 'No'
})

question1.save(function(err, question) {
  if (err) console.log(err)
    console.log('question1 Saved');
})




//set view engine and define view directory 
app.set('view engine', 'ejs')
app.set('views', './views')

//loggin middlware (all requests)
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// serve static assets (js, css, image) from the public foldr
app.use(express.static(__dirname + '/public'))

//require routes
var routes = require('./config/routes');
app.use(routes);


//start server and listen on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})