'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/NavigationView',
    'views/SignupView',
    'views/loginView',
    'views/HomeView',
    'models/UserModel'
], function ($, _, Backbone, NavigationView,SignupView, LoginView, HomeView, UserModel) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home',
            'signup': 'signup',
            'login': 'login'
        },
        initialize: function (options) {
            var navigationView = new NavigationView();
            navigationView.render();
            this.appView = options.view;
        },

        home: function () {
            var homeView = new HomeView();
            this.appView.setViews(homeView);
        },

        signup: function () {
            var signupView = new SignupView({
                model: new UserModel()
            });
            this.appView.setViews(signupView);
        },

        login: function () {
            var createLoginView = new LoginView();
            this.appView.setViews(createLoginView);
        }
    });

    return Router;
});