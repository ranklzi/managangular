 
var nconf = require('nconf');
var express = require('express');
var genre = require('./Routes/genre.js');
var artist = require('./Routes/artist.js');
var artistAlbum = require('./Routes/artistAlbum.js');
var album = require('./Routes/album.js');
var view = require('./Routes/view.js');
var metaData = require('./Routes/metaData.js');
var db = require('./models'); 
var path = require('path'); 

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//app.use(express.bodyParser());
app.use(express.favicon());
app.use(express.logger('dev'));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//set path to static files
app.use(express.static(__dirname + '/../public'));
// Handle Errors gracefully
app.use(function(err, req, res, next) {
	if(!err) return next();
	console.log(err.stack);
	res.json({error: true});
});

nconf.file('./Configuration/settings.json');

//Views 
app.get('/', view.index);
app.get('/views/partials/:name', view.partials);
app.get('/views/scripts/:name', view.scripts);
app.get('/images/:name', view.images);
app.get('/styles/:name', view.styles);

//REST actions
app.get('/metaData', metaData.getMetaData);

app.get('/genres', genre.getgenres);
app.get('/genres/:genreId', genre.getgenre);
app.post('/genres', genre.creategenre);
app.put('/genres/:genreId', genre.updategenre);
app.delete('/genres/:genreId', genre.deletegenre);

app.get('/artists', artist.getartists);
app.get('/artists/:artistId', artist.getartist);
app.post('/artists', artist.createartist);
app.put('/artists/:artistId', artist.updateartist);
app.delete('/artists/:artistId', artist.deleteartist);

app.get('/albums', album.getalbums);
app.get('/albums/:albumId', album.getalbum);
app.post('/albums', album.createalbum);
app.put('/albums/:albumId', album.updatealbum);
app.delete('/albums/:albumId', album.deletealbum);

app.get('/artistalbum/artist/:artistid', artistAlbum.getalbums_forartist);
app.get('/artistalbum/album/:albumid', artistAlbum.getartists_foralbum);
app.post('/artistalbum/artist/:artistid/album/:albumid', artistAlbum.createartistalbum);
app.delete('/artistalbum/artist/:artistid/album/:albumid', artistAlbum.deleteartistalbum);

var port = process.env.PORT || nconf.get('port');

db.sequelize.sync().complete(function(err) {
  if (err) {
  	console.log(err);
    throw err
  } else {
  	console.log('sequelize completed');
      app.listen(port, function(){
      console.log('Express server listening on port ' + nconf.get('port'));
    });
  }
});