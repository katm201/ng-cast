angular.module('video-player')
  .component('search', {
    templateUrl: './src/templates/search.html',
    bindings: {
      searchVideos: '<',
    },
    controller: function() {
      this.term = '';
      this.handleSubmit = () => {
        this.searchVideos(this.term);
        this.term = '';
      };
    }
  });
