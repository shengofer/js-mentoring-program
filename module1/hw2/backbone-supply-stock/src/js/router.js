'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'views/NavigationView'
], function ($, _, Backbone, NavigationView) {

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home'
        },
        initialize: function (options) {
            var navigationView = new NavigationView();
            this.appView = options.view;
            this.appView.setViews(navigationView);
        }
    });

    return Router;
});