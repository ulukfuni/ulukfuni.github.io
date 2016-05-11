'use strict';
var myApp = angular.module('myApp', ['ui.router']);
  myApp.config(function($stateProvider) {
  $stateProvider
    .state('skills', {
      url: "/skills",
      onEnter: function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
      }
    })
    .state('experience', {
      url: "/experience",
      onEnter: function(){
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 2000);
      }
    });
  });
  myApp.controller('MainCtrl', function($http, $scope){
    this.hello = 'world';
    this.welcome = 'Hi My name is Viet Nguyen and I am an aspiring web developer based in Orlando, Florida. I like webby things and how words on a screen can turn into glorious things as you see here. Welcome to my page!';
    $http.get('js/json/experience.json').success(function(data) {
      $scope.experiences = data;
   });
  });