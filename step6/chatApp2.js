angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function($scope) {
    $scope.ChatEngine.connect(new Date().getTime(), {}, 'auth-key');

    ...

    // create a new chat
    $scope.newChat = function(user) {
      // define a channel
      let chat = new Date().getTime();
      // create a new chat with that channel
      let newChat = new $scope.ChatEngine.Chat(chat);
      // we need to auth ourselves before we can invite others
      newChat.on('$.connected', () => {
        // this fires a private invite to the user
        newChat.invite(user);
        // add the chat to the list
        $scope.chats.push(newChat);
      });
    };
  });
