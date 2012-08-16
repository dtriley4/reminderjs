define([
       'jquery',
       'underscore',
       'backbone'
], function($, _, Backbone){
	var AppRouter = Backbone.Router.extend({

		routes: {
			''             : 'index',
		},

		index: function(){
		},


	});

	var initialize = function() {
		var router;
		router = new AppRouter();
		console.log('AppRouter Initialize');
		Backbone.history.start();
	}

	return {
		initialize: initialize
	};

});

