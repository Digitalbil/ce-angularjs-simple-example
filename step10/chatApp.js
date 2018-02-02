angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function ($scope) {

    ...

  })
  .controller('chat', function ($scope) {

    ...

    // find an user name from global list
    $scope.searchFromGlobal = function () {
      if($scope.mySearchFromGlobal) {
        $scope.users = $scope.ChatEngine.global.onlineUserSearch.search($scope.mySearchFromGlobal);
      } else {
        $scope.users = [];
      }
    };

    // invite to user to join
    $scope.invite = function (user) {
      $scope.chat.invite(user);
    };
  });
