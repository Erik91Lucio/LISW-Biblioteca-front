/**
 * @author Erik
 * @version 1
 * 
 * Configuración de módulos y sus dependencias
 * Require -> v2.1.15
 * jQuery -> v2.1.3
 * Underscore -> v1.7.0
 * Backbone -> v1.1.2
 * Bootstrap -> v3.3.2
 * Text -> v2.0.12
 */
require.config({
	baseUrl: 'js/',
	paths: {
		'jquery': 'libs/jQuery',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'text': 'libs/text'
	},
	shim: {
		'underscore': { exports  : '_' },
        'backbone': { deps : ['underscore', 'jquery'], exports : 'Backbone' },
        'bootstrap': { deps : ['jquery'], exports : 'Bootstrap' }
	}
});
require(['main']);