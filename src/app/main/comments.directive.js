// angular.module("testTim").directive('answer', function(){
//   return {
//     restrict: 'EA',
//     scope: {
//       answer: "="
//     },
//     template: '<ol ng-model="answer" <div class="col-md-12 view-answer"> <div class="col-md-12"> <small><b>{{node.username}}</b></small> <small><b>{{node.date}}</b></small> <small><b>{{node.mail}}</b></small> <small><b>{{node.homepage}}</b></small> </div> <div class="col-md-7 text"> {{node.text}} </div> <div class="col-md-5"> <img src="{{node.image}}" class="image" alt=""> </div> <div class="col-md-8"> <button class="btn btn-default btn-answer" ng-click="newSubItem(node.id)">Reply</button> </div> </div> <li ng-repeat="node in answer.nodes" answer="node.nodes"> </li> </ol>',
//   }
//   console.log(answer);
// })