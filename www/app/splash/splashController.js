(function () {
   angular.module('app')
     .controller('SplashCtrl', function ($scope, $state) {

       $scope.text = "This is splash screen.";

       setTimeout(function () {
          $state.go('home');
       }, 3000)
     })
})();
