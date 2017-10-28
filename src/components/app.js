angular.module('video-player')

.component('app', {
  controller: function() {
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.handleSelection = video => {
      console.log('registered click');
      this.currentVideo = video;
    };
  },
  templateUrl: '/src/templates/app.html'
});
