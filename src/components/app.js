angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.$onInit = function () {
      youTube.search('', this.searchResults); 
    };

    this.currentVideo = {};
    this.videos = [];
    youTube.search('', this.searchResults);
    this.selectVideo = video => {
      this.currentVideo = video;
    };
    this.appSearch = youTube.search;
    this.searchResults = data => {
      this.videos = data.items;
      this.currentVideo = data.items[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
