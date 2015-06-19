'use strict';
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var UserModel = Backbone.Model.extend({

        initialize: function(){
         //   _.bindAll(this);
        },

        defaults: {
            id: 0,
            username: '',
            name: '',
            email: '',
            password: ''
        },

        validateEmail: function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validate: function (attrs) {
            var errors = [];
            if (!$.trim(attrs.name)) {
                errors.push({name: 'username', message: 'Please enter the username field.'});
            }
            if (!$.trim(attrs.phone)) {
                errors.push({name: 'password', message: 'Please enter the password field.'});
            }
            if (!$.trim(attrs.email) || !this.validateEmail(attrs.email)) {
                errors.push({name: 'email', message: 'Please enter the valid email field.'});
            }
            return errors.length > 0 ? errors : false;
        }

    });
    
    return UserModel;
});

