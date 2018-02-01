angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function($scope) {
    $scope.ChatEngine.connect(new Date().getTime(), {}, 'auth-key');

    $scope.ChatEngine.on('$.ready', (data) => {
      $scope.me = data.me;
      $scope.me.plugin(ChatEngineCore.plugin['chat-engine-random-username']($scope.ChatEngine.global));

      // when I get a private invit
      $scope.me.direct.on('$.invite', (payload) => {
        let chat = new $scope.ChatEngine.Chat(payload.data.channel);
        chat.onAny((a,b) => {
          console.log(a);
        });
        // create a new chat and render it in DOM
        $scope.chats.push(chat);
      });

      // bind chat to updates
      ...
    });

      ...
  });
