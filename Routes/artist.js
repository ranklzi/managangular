var models = require('../models');
var Artist = models.artist;

exports.getartists = function(req, res) {
    Artist.all()
      .success(function(artists)
      {
        res.json(artists);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })  
};
exports.getartist = function(req, res) {
    Artist.find({where: {id:req.params.artistId}})
      .success(function(artists)
      {
        res.json(artists);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.createartist = function(req, res) {
  Artist.create(req.body)
      .success(function(artist)
      {
        res.json(artist);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      });  
};
exports.updateartist = function(req, res) {
  Artist.find({where: {id:req.params.artistId}})
      .success(function(artist)
      {
        artist.updateAttributes({
          name: req.body.name,
          genreId: req.body.genreId
        })
      })
      .success(function(artist)
      {
        res.json(artist);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};
exports.deleteartist = function(req, res) {
  Artist.find({where: {id:req.params.artistId}})
      .success(function(artist)
      {
        artist.destroy();
      })
      .success(function(artist)
      {
        res.json(artist);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};