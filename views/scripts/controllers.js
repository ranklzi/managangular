var artistsManagerControllers = angular.module('artistsManagerControllers', []);

function ArtistsListCtrl($scope, $http)
{
	$scope.selectedArtist = null;

	$http.get('/metaData').
		success(function(data){
			$scope.metaData =  data;
			console.dir(data);
  		}).
  		error (function(data, status, headers, config){
			alert ('error: ' + status)
  		});

	$http.get('/artists').
		success(function(data){
			$scope.artists =  data;
  		}).
  		error (function(data, status, headers, config){
			alert ('error: ' + status)
  		});
	$scope.artistsOrderProp = 'name';


	$scope.getAlbums = function (artist) {
		$scope.selectedArtist = artist; 
	};

	$scope.createNewArtist = function (artistName, artistImageUrl) {
		$http.post('/artists', 
			{ 
				name: artistName, 
				genreId: 60,
				imageUrl: artistImageUrl
			}).
			success(function(data){
				$scope.artists.push(data);
			}).
			error (function(data, status, headers, config){
				alert ('error: ' + status)
  			});
	};

	$scope.updateArtist = function (updatedArtistImageUrl) {
		var tmpSelectedArtist = $scope.selectedArtist;
		tmpSelectedArtist.imageUrl = updatedArtistImageUrl;
		$http.put('/artists/' + tmpSelectedArtist.id, tmpSelectedArtist 
			).
			success(function(data){
				alert('updated');
			}).
			error (function(data, status, headers, config){
				alert ('error: ' + status)
  			});
	};

} 
artistsManagerControllers.controller('ArtistsListCtrl', ['$scope', '$http', ArtistsListCtrl]);


