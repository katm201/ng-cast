angular.module('video-player')
  .component('app', {
    // note: templateUrl is from the index.html, not the component
    templateUrl: './src/templates/app.html',
    controller: function() {
      this.videos = window.exampleVideoData;
    }
  });
