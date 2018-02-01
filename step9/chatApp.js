angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function ($scope) {

    ...

  })
  .controller('chat', function ($scope) {

    ...

    // leave a chatroom and remove from global chat list
    $scope.leave = function (index) {
      $scope.chat.leave();
      $scope.chats.splice(index, 1);
    };
  });
