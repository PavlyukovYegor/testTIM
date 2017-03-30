'use strict';

angular.module('testTim').controller('CommentsController', function($scope, $uibModal, ComentStore) {
  var ctrl = this;
  ComentStore.loadData();
  // ctrl.data = [];
  ctrl.newSubItem = function(node) {
      var nodeData = node;
      // nodeData.nodes.push({
      //     id: nodeData.id * 10 + nodeData.nodes.length,
      //     title: nodeData.title + '.' + (nodeData.nodes.length + 1),
      //     nodes: []
      // });
      // console.log(nodeData);
      // console.log($scope.data);
  };
  // $scope.collapseAll = function() {
  //     $scope.$broadcast('collapseAll');
  // };
  // $scope.expandAll = function() {
  //     $scope.$broadcast('expandAll');
  // };

  ctrl.open = function(size, scope) {
    console.log(scope);
    var modalInstance = $uibModal.open({
      size: size,
      templateUrl: "app/main/modalWindow.html",
      // controller: function () {
      //   var $ctrl = this;
      //
      //   $ctrl.ok = function () {
      //     $ctrl.close({$value: $ctrl.selected.item});
      //   };
      // },
      controller: 'ModalInstanceController',
      controllerAs: 'contr',
      windowClass: "animates flipInY"
    });
  }
  this.data = ComentStore.data;
  console.log(this.data);
});
