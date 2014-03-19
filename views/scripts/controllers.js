var artistsManagerControllers = angular.module('artistsManagerControllers', []);

function ArtistsListCtrl($scope, $rootScope, $http, artistFactory)
{
	$scope.selectedArtist = null;
	$scope.errors = new Object();
	$scope.errors.createNewArtist = new Array();

	$http.get('/metaData').
		success(function(data){
			$scope.metaData =  data;
  		}).
  		error (function(data, status, headers, config){
			alert ('error: ' + status)
  		});

	$scope.artists = artistFactory.getAll();
	$scope.artistsOrderProp = 'name';

	$scope.artistSelected = function (artist) {
		$scope.selectedArtist = artist; 
		$rootScope.$broadcast('artistSelected');
	};

	$scope.createNewArtist = function (artistName, artistImageUrl, newArtistGenreId) {
		validateCreateNewArtist(artistName, artistImageUrl, newArtistGenreId);
		if ($scope.errors.createNewArtist.length > 0)
		{
			return;
		}
		$scope.artists.push(artistFactory.create({ 
				name: artistName, 
				genreId: newArtistGenreId.id,
				imageUrl: artistImageUrl
			}));
	};

	validateCreateNewArtist = function(artistName, artistImageUrl, artistGenreId){
		$scope.errors.createNewArtist.length = 0;
		if (artistName == undefined || artistName == null)
		{
			$scope.errors.createNewArtist.push('Add a value to artist name field.');
		}
		if (artistGenreId == undefined || artistGenreId == null)
		{
			$scope.errors.createNewArtist.push('Select Genre for the new artist.');
		}
	};

	$scope.updateArtist = function (updatedArtistImageUrl) {
		var tmpSelectedArtist = $scope.selectedArtist;
		tmpSelectedArtist.imageUrl = updatedArtistImageUrl;

		artistFactory.update(tmpSelectedArtist);
	};

} 
artistsManagerControllers.controller('ArtistsListCtrl', ['$scope', '$rootScope', '$http', 'artistFactory', ArtistsListCtrl]);

function AlbumsListCtrl($scope, $http)
{
	$scope.$on('artistSelected', function() {
        
    });  

	$scope.getAlbumsForArtist = function () {
		alert('getAlbumsForArtist');
	};
}
artistsManagerControllers.controller('AlbumsListCtrl', ['$scope', '$http', AlbumsListCtrl]);