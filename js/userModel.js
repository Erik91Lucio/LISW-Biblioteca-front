/**
 *@author Erik 
 */
define(['app'], function(app) {
	var userModel = Backbone.Model.extend({
	       initialize: function(){
                },
                defaults: {
        	       id: 0,
        	       name: '',
        	       lastname: '',
        	       email: '',
        	       password: '',
        	       role: 'Cliente' /* CLiente, bibliotecario*/
                }
	});
	return userModel;
});