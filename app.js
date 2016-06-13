//set up application 
var mongoose    = require('mongoose')
var express     = require('express')
var app         = express()
var server      = require('http').createServer(app)
var port        = process.env.PORT || 3000
var morgan      = require('morgan')
var cookieParser = require('cookie-parser')
var passport    = require('passport');
var flash       = require('connect-flash');
var bodyParser  = require('body-parser');
var ejsLayouts  = require('express-ejs-layouts')
var session = require('express-session')


//un-commentto run seed file. 
// require('./seeds.js')

mongoose.connect('mongodb://localhost/wingman')

app.use(session({secret: "wingman-session"}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);
app.use(cookieParser())

app.use(function(req, res, next) {
  global.user = req.user;
  next();
})


//set view engine and define view directory 
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.set('views', './views')

//loggin middlware (all requests)
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// serve static assets (js, css, image) from the public foldr
app.use(express.static(__dirname + '/public'))


var routes = require('./config/routes');
app.use(routes);



//start server and listen on defined port 
server.listen(port, function(){
  console.log('Server has been started on port %s ...', port)
})