angular.module('video-player')
  .service('youTube', function() {
    this.search = function(term) {
      console.log(term);
    };
  });
