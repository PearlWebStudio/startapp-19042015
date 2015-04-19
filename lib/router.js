Router.configure({
    layoutTemplate: 'hall',
    loadingTemplate: 'splash',
});

Router.map(function() {

	// Auth
	this.route('intro', {
        path: '/'
    });

	this.route('signIn', {
        path: '/login'
    });

	this.route('signUp', {
        path: '/register'
    });

	this.route('forgotPassword', {
        path: '/recover-password'
    });

	this.route('resetPassword', {
        path: '/reset-password'
    });

});

// On before action
Router.onBeforeAction('loading');

// Plugins
Router.plugin('ensureSignedIn', {
    except: ['intro', 'signIn', 'signUp', 'forgotPassword', 'resetPassword']
});
