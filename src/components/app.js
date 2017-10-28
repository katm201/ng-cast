angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.selectVideo = video => {
      this.currentVideo = video;
    };
    this.appSearch = youTube.search;
    this.handleSearch = data => {
      this.videos = data.items;
      this.currentVideo = data.items[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
