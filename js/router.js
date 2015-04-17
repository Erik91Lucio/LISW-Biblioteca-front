/**
 * @author Erik
 */
define([ 'app', 'signupView', 'loginView', 'presentationView' ], function(app,
		SignupView, LoginView, PresentationView) {
	var router = Backbone.Router.extend({
		initialize : function() {
		},
		routes : {
			'':'index',
			'sign' : 'signup',
			'log' : 'login',
			'books' : 'listBooks'
		},
		show : function(view, args) {
			if (app.debug)
				console.log('Router, mostrar vista');
			$('#content').html(view.$el);
		},
		index : function() {
			this.show(new PresentationView());
		},
		signup : function() {
			this.show(new SignupView());
		},
		login : function() {
			this.show(new LoginView());
		},
		listBooks : function() {
			this.show(new ListBooksView());
		}
	});
	return router;
});