//set up application 
var express     = require('express')
var app         = express()
var server      = require('http').createServer(app)
var port        = process.env.PORT || 3000
var morgan      = require('morgan')


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



//start server and listen on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})