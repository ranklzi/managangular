var artistsManagerServices = angular.module('artistsManagerServices', ['ngResource']);
artistsManagerServices.factory('artistFactory', ['$resource', function($resource, $rootScope) {
	var resource = $resource('/artists/:artistId', {}, {
		getAll: {method:'GET', isArray:true},
		get: {method:'GET', params:{artistId:''}},
      	create: {method:'POST'},
      	update: {method:'PUT', params:{artistId:'@id'}}
	});
	var artistsService = {};
	artistsService.getAll = function(){
		return resource.getAll();
	};
	artistsService.get = function(param){
		return resource.get(param);
	};
	artistsService.create = function(input){
		return resource.create(input);
	};
	artistsService.update = function(input){
		return resource.update(input);
	};

	return artistsService;
}]);