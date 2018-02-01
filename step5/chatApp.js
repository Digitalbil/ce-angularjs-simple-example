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
      $scope.chat.plugin(ChatEngineCore.plugin['chat-engine-online-user-search']({ prop: 'state.username' }));
    });

    $scope.search = function () {
      let found = $scope.chat.onlineUserSearch.search($scope.mySearch);

      // hide every user
      for(let uuid in $scope.chat.users) {
        $scope.chat.users[uuid].hideWhileSearch = true;
      }

      // show all found users
      for(let i in found) {
        $scope.chat.users[found[i].uuid].hideWhileSearch = false;
      }
    }
  });
