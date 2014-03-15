var nconf = require('nconf');
nconf.file('./Configuration/settings.json');

var Sequelize = require('sequelize');

// initialize database connection
var sequelize = new Sequelize(nconf.get('connectionString'), 
  { dialect : 'postgres',
  omitNull: true
}
);

// load models
var models = [
  'genre',
  'artist',
  'album',
  'artistAlbum'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  m.genre.belongsTo(m.artist);
  //m.User.hasMany(m.PhoneNumber);
})(module.exports);

// export connection
console.log(models.artist);
module.exports.sequelize = sequelize;