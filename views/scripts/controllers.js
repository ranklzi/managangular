var artistsManagerControllers = angular.module('artistsManagerControllers', []);

function ArtistsListCtrl($scope, $http)
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

	$scope.createNewArtist = function (artistName, artistImageUrl, newArtistGenreId) {
		validateCreateNewArtist(artistName, artistImageUrl, newArtistGenreId);
		if ($scope.errors.createNewArtist.length > 0)
		{
			return;
		}

		$http.post('/artists', 
			{ 
				name: artistName, 
				genreId: newArtistGenreId.id,
				imageUrl: artistImageUrl
			}).
			success(function(data){
				$scope.artists.push(data);
			}).
			error (function(data, status, headers, config){
				alert ('error: ' + status)
  			});
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


