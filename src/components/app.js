angular.module('video-player')
  .component('app', {
    // note: templateUrl is from the index.html, not the component
    templateUrl: './src/templates/app.html',
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchVideos = youTube.search.bind(this, (data) => {
        this.videos = data;
        this.selectVideo(data[0]);
      });
    }
  });
