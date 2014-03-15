var models = require('../models');
var Album = models.album;

exports.getalbums = function(req, res) {
    Album.all()
      .success(function(albums)
      {
        res.json(albums);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.getalbum = function(req, res) {
    Album.find({where: {id:req.params.albumId}})
      .success(function(album)
      {
        res.json(album);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.createalbum = function(req, res) {
  Album.create(req.body)
      .success(function(album)
      {
        res.json(album);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      });  
};
exports.updatealbum = function(req, res) {
  Album.find({where: {id:req.params.albumId}})
      .success(function(album)
      {
        if (album)
        {

        album.updateAttributes({
          name: req.body.name,
          frontImageUrl: req.body.frontImageUrl,
          backImageUrl: req.body.backImageUrl,
          description: req.body.description
        })
      }
      })
      .success(function(album)
      {
        res.json(album);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};
exports.deletealbum = function(req, res) {
  Album.find({where: {id:req.params.albumId}})
      .success(function(album)
      {
        if (album)
        {
          album.destroy();
        }
      })
      .success(function(album)
      {
        res.json(album);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};