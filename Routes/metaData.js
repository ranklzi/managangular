var models = require('../models');
var Genre = models.genre;

exports.getMetaData = function(req, res) {
	metaData = new Object();
  Genre.all()
    .success(function(genres)
    {
    	metaData.genres = genres;
      res.json(metaData);
    })
    .error(function(error){
      console.log(error);
      res.json(error);
    });
};