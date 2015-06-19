define([
    "app",
    'text!../../templates/loginTemplate.html'
], function(app, loginTemplate ){

    var LoginView = Backbone.View.extend({
        el: $('.main-container'),
 /*       initialize: function () {
           // _.bindAll(this);

            // Listen for session logged_in state changes and re-render
          //  app.session.on("change:logged_in", this.render);
        },*/

        events: {
            'click #login-btn'                      : 'onLoginAttempt',
            'click #signup-btn'                     : 'onSignupAttempt',
            'keyup #login-password-input'           : 'onPasswordKeyup',
            'keyup #signup-password-confirm-input'  : 'onConfirmPasswordKeyup'
        },

    /*    // Allow enter press to trigger login
        onPasswordKeyup: function(evt){
            var k = evt.keyCode || evt.which;

            if (k == 13 && $('#login-password-input').val() === ''){
                evt.preventDefault();    // prevent enter-press submit when input is empty
            } else if(k == 13){
                evt.preventDefault();
                this.onLoginAttempt();
                return false;
            }
        },

        // Allow enter press to trigger signup
        onConfirmPasswordKeyup: function(evt){
            var k = evt.keyCode || evt.which;

            if (k == 13 && $('#confirm-password-input').val() === ''){
                evt.preventDefault();   // prevent enter-press submit when input is empty
            } else if(k == 13){
                evt.preventDefault();
                this.onSignupAttempt();
                return false;
            }
        },*/


        render:function () {
          /*  if(app.session.get('logged_in')) this.template = _.template(LoggedInPageTpl);
            else this.template = _.template(LoginPageTpl);*/
            this.$el.empty();
            this.template = _.template(loginTemplate);
            var appuser =     {
                id: 100500,
                    username: 'qw',
                    name: 'qw',
                    email: 'qw@com.en'
            };
            var html =  this.template({ user: appuser });
           // this.$el.html(this.template({ user: appuser }));
           // this.$el.append(html);
            this.$el.html(html);
            return this;
        }

    });

    return LoginView;
});

