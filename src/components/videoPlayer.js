angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function() {
    this.autoplay = 0;
    this.toggleAutoplay = function() {
      this.autoplay ? this.autoplay = 0 : this.autoplay = 1;
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
