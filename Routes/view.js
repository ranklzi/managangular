var jade = require('jade');
var models = require('../models');
var Artist = models.artist;

exports.index = function(req, res) {
	Artist.all()
      .success(function(resArtists)
      {
      	res.render('index.jade', {artists: resArtists});
      })
      // .success(function(artists)
      // {
      //   res.json(artists);
      // })
      .error(function(error){
        console.log(error);
        res.json(error);
      });  

	//res.render('index.jade', {artists: 'Franz Enzenhofer'});
}

exports.partials = function(req, res) {
	console.log(req.params.name);
	res.sendfile('./views/' + req.params.name);
}
exports.scripts = function(req, res) {
	res.sendfile('./views/scripts/' + req.params.name);
}
exports.images = function(req, res) {
	res.sendfile('./views/images/' + req.params.name);
}