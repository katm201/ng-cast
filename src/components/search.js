angular.module('video-player')
.component('search', {
  controller: function() {
    this.searchInput = '';
  },
  bindings: {
    onClick: '<',
    handleSearch: '<'
  },
  templateUrl: 'src/templates/search.html'
});
