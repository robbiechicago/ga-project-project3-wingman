var passport     = require("passport")
var mongoose     = require('mongoose')
var User         = mongoose.model('User');

// SHOW
function getUser(req, res) {
  var id = req.params.id;
  Response.find({_id: id}, function(error, response) {
    if(error) res.json({message: 'Could not find response b/c:' + error});

    res.json({response: response});
  });
}



module.exports = {
  getResponse: getResponse
}