angular.module('video-player', [])
.config(function($sceDelegateProvider, $locationProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});
