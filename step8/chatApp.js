angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function($scope) {

    ...

  })
  .controller('chat', function($scope) {
    // every chat has a list of messages
    $scope.messages = [];

    // send a message using the messageDraft input
    $scope.sendMessage = function () {
      $scope.chat.emit('message', { text: $scope.newMessage });
      $scope.newMessage = '';
    };

    // when this chat gets a message
    $scope.chat.on('message', function(payload) {
      // if the last message was sent from the same user
      payload.sameUser = $scope.messages.length > 0 && payload.sender.uuid == $scope.messages[$scope.messages.length - 1].sender.uuid;

      // if this message was sent by this client
      payload.isSelf = payload.sender.uuid == $scope.me.uuid;

      // add the message to the array
      $scope.messages.push(payload);
    });
  });
