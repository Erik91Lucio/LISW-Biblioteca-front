/**
 * @author Erik
 */
require(['app', 'router'], 
		function(app, Router) {

			$.ajaxSetup({cache : false});
			//$(document).on('ready', startApp); 
			//function startApp() {
				app.router = new Router();
				var hasPushstate = !!(window.history && history.pushState);
				if (hasPushstate) {
					Backbone.history.start({pushState : true, root : '/alex'});
				} else {
					Backbone.history.start();
				}
				app.router.navigate('', {trigger : true, replace : false});
			//}
		});