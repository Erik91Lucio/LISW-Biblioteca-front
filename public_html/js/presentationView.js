/**
 * @author Erik
 */
define([ 'app', 'text!templates/publichome.html'/*, 'text!templates/privatehome.html'*/ ],
		function(app, publicHomeTemplate /*, privateHomeTemplate*/) {
			var presentationView = Backbone.View.extend({
				initialize : function() {
					if(app.debug) console.log('Vista creada');
					this.render();
					//app.session.on('change: loggedIn', this.render);
				},
				events: {
					'click #login-btn': 'loginView',
					'click #signup-btn': 'signupView'
				},
				signupView: function() {
					app.router.navigate('sign', {
						trigger : true,
						replace : false
					});
				},
				loginView:function() {
					app.router.navigate('log', {
						trigger : true,
						replace : false
					});
				},
				render : function() {
					//if (!app.session.loggedIn) {
						this.$el.html(publicHomeTemplate);
					//} else {
					//	this.$el.html(privateHomeTemplate);
					//}
				}
			});
			return presentationView;
		});