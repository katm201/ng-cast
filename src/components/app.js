angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.selectVideo = video => {
      this.currentVideo = video;
    };
    this.search = youTube.search;
  },
  templateUrl: 'src/templates/app.html'
});
