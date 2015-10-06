var Response = require('../models/response');


// INDEX
function getAll(req, res) {
  Response.find(function(error, responses) {
    if(error) res.json({message: 'Could not find any questions'});

    res.json({response: responses});
  });
}


// CREATE
function createResponse(req, res) {
  console.log('in POST');
  console.log('body:', req.body);
  console.log(req)
  var response = new Response(req.body);

  response.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate response b/c:' + error});
    console.log(response);
    res.json(response);
  });
}

// SHOW
function getResponse(req, res) {
  var id = req.params.id;

  Response.findById({_id: id}, function(error, response) {
    if(error) res.json({message: 'Could not find response b/c:' + error});

    res.json({response: response});
  });
}


// UPDATE 
function updateResponse(req, res) {
  var id = req.params.id;

    Response.findById({_id: id}, function(error, response) {
    if(error) res.json({message: 'Could not find response b/c:' + error});

    if(req.body.responseText) response.responseText = req.body.responseText;

    response.save(function(error) {
      if(error) res.json({messsage: 'Could not update response b/c:' + error});
      console.log(response)
      res.json({message: 'response successfully updated'});
    });
  });
}

// DELETE
function removeResponse(req, res) {
  var id = req.params.id;

  Response.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete response b/c:' + error});

    res.json({message: 'Response successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createResponse: createResponse,
  getResponse: getResponse,
  updateResponse: updateResponse,
  removeResponse: removeResponse
}