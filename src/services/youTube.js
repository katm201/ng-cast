const apiKey = window.YOUTUBE_API_KEY;

angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(callback, term) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: apiKey,
          maxResults: '5',
          part: 'snippet',
          q: term,
          type: ''
        }
      })
        .then((response) => {
          callback(response.data.items);
        })
        .catch((err) => { console.log(err); });
    };
  });
