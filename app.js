//set up application 
var mongoose    = require('mongoose')
var express     = require('express')
var app         = express()
var server      = require('http').createServer(app)
var port        = process.env.PORT || 3000
var morgan      = require('morgan')
var passport     = require('passport');
var flash        = require('connect-flash');

mongoose.connect('mongodb://localhost/wingman')

app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
require('./config/passport')(passport);

var Response = require('./models/response')
var User = require('./models/user')
var Question = require('./models/question')

var user1 = new User({
  name: 'Niall Wallace',
  username: ' ',
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

question1.resonses.push({
  responseText: 'Yes'
})

question1.resonses.push({
  responseText: 'No'
})

question1.save(function(err, airport) {
  if (err) console.log(err)
    console.log('question1 Saved');
})




//set view engine and define view directory 
app.set('view engine', 'ejs')
app.set('views', './views')

//loggin middlware (all requests)
app.use(morgan('dev'))

// serve static assets (js, css, image) from the public foldr
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('index')
})

app.get('/login', function(req, res){
  res.render('login')
})

app.get('/secretroom', function(req, res){
  res.render('secretroom')
})

//start server and listen on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})