angular.module('video-player')

.component('search', {
  bindings: {
    onClick: '<',
    handleSearch: '<'
  },
  templateUrl: 'src/templates/search.html'
});
