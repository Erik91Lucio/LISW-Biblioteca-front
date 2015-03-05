/**
 * @author Erik
 */
define(['app', 'userModel', 'text!templates/signup.html'], 
	function(app, UserModel, sigupTemplate) {
		var sigupView = Backbone.View.extend({
			initialize : function() {
				if(app.debug) console.log('Vista signup creada');
				this.render();
			},
			events: {
				'click #signup': 'signup'
			},
			signup: function() {
				//Coger datos de usuario y guardarlos
				if($('#pass').val() === $('#pass1').val()) {
					var user = new UserModel({name: $('#name').val(), lastname: $('#lastname').val(), 
						email: $('#email').val(), password: $('#pass').val()});
					if(app.debug) console.log('signupView.signup: Usuario -> ' + JSON.stringify(user.toJSON()));				
				} else {
					if(app.debug) console.log('signupView.signup: No coiciden las contraseñas');
				}
			},
			render: function() {
				this.$el.html(sigupTemplate);
			}
		});
		return sigupView;
	});