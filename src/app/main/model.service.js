angular.module("testTim").factory("ComentStore", function($http, Restangular) {
  return {
    data: [],
    loadData: function() {
      // this.data = $http.get("http://localhost:3012/result").then(function (res) {
      //   this.data = res.data;
      //   console.log(this.data);
      //   return this.data
      // })
      this.data = Restangular.all('result').getList().$object;
      console.log(this.data);
    },
  }
})
