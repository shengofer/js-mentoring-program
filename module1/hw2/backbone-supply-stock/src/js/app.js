'use strict';
require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        text: '../vendor/requirejs-text/text'
    }
});
define([
  'backbone',
  'views/app',
  'router'
], function (Backbone, AppView, Router) {

    var appView = new AppView();
    var router = new Router({view: appView});
    Backbone.history.start();

});