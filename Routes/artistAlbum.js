var models = require('../models');
var ArtistAlbum = models.artistAlbum;
var Album = models.album;
var Artist = models.artist;

exports.getalbums_forartist = function(req, res) {
    ArtistAlbum.all({where: {artistId:req.params.artistid}})
      .success(function(artistsAlbums)
      {
        res.json(artistsAlbums);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.getartists_foralbum = function(req, res) {
    ArtistAlbum.all({where: {albumId:req.params.albumid}})
      .success(function(artistsAlbums)
      {
        res.json(artistsAlbums);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      })
};
exports.createartistalbum = function(req, res) {
  //console.log('artistId:'+req.params.artistid+', albumId:'+req.params.albumid);
  ArtistAlbum.create({artistId:req.params.artistid, albumId:req.params.albumid})
      .success(function(artistAlbum)
      {
        res.json(artistAlbum);
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      });  
};
exports.deleteartistalbum = function(req, res) {
  ArtistAlbum.find({where: {artistId:req.params.artistid, albumId:req.params.albumid}})
      .success(function(artistAlbum)
      {
        console.log('after find before destroy');
        artistAlbum.destroy();
      })
      .success(function(artistAlbum)
      {
        res.json(artistAlbum);  
      })
      .error(function(error){
        console.log(error);
        res.json(error);
      }); 
};