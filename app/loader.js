require.config({
	paths: {
		'jquery':         '../assets/javascript/lib/jquery/jquery',
		'underscore':     '../assets/javascript/lib/underscore/underscore-min',
		'backbone':       '../assets/javascript/lib/backbone/backbone',

		'text':           '../assets/javascript/lib/require/text',
		'templates': 	  '../app/templates'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
	}
});

require([
	'router',
	'views/appView'
], function(AppRouter, AppView) {
	AppRouter.initialize();
	var appView = new AppView();
	appView.render();
});

