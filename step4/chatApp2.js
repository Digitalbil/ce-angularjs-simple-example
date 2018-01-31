angular.module('chatApp', ['open-chat-framework'])
  .run(['$rootScope', 'ngChatEngine', function($rootScope, ngChatEngine) {

    ...

  }])
  .controller('chatAppController', function($scope) {
    $scope.ChatEngine.connect(new Date().getTime(), {}, 'auth-key');

    $scope.ChatEngine.on('$.ready', (data) => {
      $scope.me = data.me;

      $scope.me.plugin(ChatEngineCore.plugin['chat-engine-random-username']($scope.ChatEngine.global));

      // bind chat to updates
      $scope.chat = $scope.ChatEngine.global;
    });
  });
