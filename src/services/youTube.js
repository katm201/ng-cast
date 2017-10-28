angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        type: 'video',
        part: 'snippet',
        maxResults: 5
      }
    })
    .then(function successCallback (data) { 
      console.log('success! ', data); 
    }, 
    function errorCallback(error) {
      console.log('error! ', error);
    });
  };
});
