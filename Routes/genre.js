var models = require('../models');
var Genre = models.genre;

exports.getgenres = function(req, res) {
    Genre.all()
      .success(function(genres)
      {
        res.json(genres);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })  
};
exports.getgenre = function(req, res) {
    Genre.find({where: {id:req.params.genreId}})
      .success(function(genres)
      {
        res.json(genres);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.creategenre = function(req, res) {
  Genre.create(req.body)
      .success(function(genre)
      {
        res.json(genre);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      });  
};
exports.updategenre = function(req, res) {
  Genre.find({where: {id:req.params.genreId}})
      .success(function(genre)
      {
        genre.updateAttributes({
          name: req.body.name
        })
      })
      .success(function(genre)
      {
        res.json(genre);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};
exports.deletegenre = function(req, res) {
  Genre.find({where: {id:req.params.genreId}})
      .success(function(genre)
      {
        genre.destroy();
      })
      .success(function(genre)
      {
        res.json(genre);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};

