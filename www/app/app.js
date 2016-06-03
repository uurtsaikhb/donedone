angular.module('app', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('init', {
        url: '/',
        templateUrl: 'app/splash/splash.html'
      })

      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })

      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html'
      })

    $urlRouterProvider.otherwise('/');

  });
