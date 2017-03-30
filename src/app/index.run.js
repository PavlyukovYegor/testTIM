(function() {
  'use strict';

  angular
    .module('testTim')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
