/**
 *@author Erik 
 */
define(['jquery', 'underscore', 'backbone','bootstrap', 'text!templates/alert.html'],
		function($, _, Backbone, Bootstrap, alertTemplate) {
			var app = {
					server: 'urlServer', //ruta hacia el servidor
					templateAlert: _.template(alertTemplate), 
					showAlert: function(title, text, type) {
						$('#header-alert').removeClass("alert-danger alert-warning alert-success alert-info");
						$('#header-alert').addClass(type);
						$('#header-alert').html(this.templateAlert({tl: title, tx: text}));
						setTimeout(function() {
							$('#header-alert').hide();
						}, 10000);
					},
					debug: true //Para mostrar console.log al depurar
			};
			return app;
		});