angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function ($scope) {

    ...

  })
  .controller('chat', function ($scope) {
    $scope.chat.plugin(ChatEngineCore.plugin['chat-engine-typing-indicator']({ timeout: 5000 }));

    ...

    // when we get notified of a user typing
    $scope.chat.on('$typingIndicator.startTyping', (event) => {
      event.sender.isTyping = true;
    });

    // when we get notified a user stops typing
    $scope.chat.on('$typingIndicator.stopTyping', (event) => {
      event.sender.isTyping = false;
    });
  });
