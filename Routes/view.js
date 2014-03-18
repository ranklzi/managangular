var jade = require('jade');
var models = require('../models');
var Artist = models.artist;

exports.index = function(req, res) {
	res.render('index.jade');
}
exports.partials = function(req, res) {
	console.log(req.params.name);
	res.render('./partials/' + req.params.name + '.jade');
}
exports.scripts = function(req, res) {
	res.sendfile('./views/scripts/' + req.params.name);
}
exports.images = function(req, res) {
	res.sendfile('./views/images/' + req.params.name);
}
exports.styles = function(req, res) {
  res.sendfile('./views/styles/' + req.params.name);
}