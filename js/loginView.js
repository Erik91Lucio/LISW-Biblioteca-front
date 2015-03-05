/**
 * @author Erik
 */
define(['app', 'userModel', 'text!templates/login.html'], 
	function(app, UserModel, loginTemplate) {
		var loginView = Backbone.View.extend({
			initialize : function() {
				if(app.debug) console.log('Vista login creada');
				this.render();
			},
			events: {
				'click #login': 'login'
			},
			login: function() {
				var user = new UserModel({name: $('#name').val(), password: $('#pass').val()});
				if(app.debug) console.log('loginView.signup: Usuario -> ' + JSON.stringify(user.toJSON()));
				//Llamar al servidor para comprobar datos
			},
			render: function() {
				this.$el.html(loginTemplate);
			}
		});
		return loginView;
	});