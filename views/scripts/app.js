var artistsManagerApp = angular.module('artistsManagerApp', [
  'artistsManagerControllers'
]);

// var artistsManagerApp = angular.module('artistsManagerApp', [
//   'ngRoute',
//   'artistsManagerControllers'
// ]);

// artistsManagerApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/artists', {
//         templateUrl: 'views/partials/artistsView',
//         controller: 'ArtistsListCtrl'
//       }).
//       when('/artistalbum/artist/:artistId', {
//         templateUrl: 'views/partials/albumsView',
//         controller: 'AlbumsListCtrl'
//        }).
//        otherwise({
//          redirectTo: '/artists'
//        });
//   }]);