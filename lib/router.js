Router.configure({
    layoutTemplate: 'hall',
    loadingTemplate: 'splash',
});

Router.map(function() {

	// Auth
	this.route('intro', {
        path: '/',
    });

	this.route('login', {
        path: '/login',
		after: function () {
			Session.set('pageTitle', 'Sign In');
			Session.set('returnTo', '/');
		}
    });

	this.route('signInEmail', {
        path: '/login/email',
		after: function () {
			Session.set('pageTitle', 'Sign In With Email');
			Session.set('returnTo', '/login');
		}
    });

	this.route('forgotPassword', {
        path: '/recover-account',
		after: function () {
			Session.set('pageTitle', 'Recover Your Account');
			Session.set('returnTo', '/login/email');
		}
    });

	this.route('resetPassword', {
        path: '/reset-password',
		after: function () {
			Session.set('pageTitle', 'Reset Your Password');
			Session.set('returnTo', '/');
		}
    });

	this.route('register', {
        path: '/register',
		after: function () {
			Session.set('pageTitle', 'Register');
			Session.set('returnTo', '/');
		}
    });

	this.route('createNewAccount', {
        path: '/new-account',
		after: function () {
			Session.set('pageTitle', 'Create A New Account');
			Session.set('returnTo', '/register');
		}
    });

	this.route('terms', {
        path: '/terms',
		after: function () {
			Session.set('pageTitle', 'Terms of Service');
			Session.set('returnTo', '/new-account');
		}
    });

	// Dashboard
	this.route('dashboard', {
        path: '/dashboard',
		layoutTemplate: 'layout',
    });

	this.route('userProfile', {
        path: '/dashboard/profile',
		layoutTemplate: 'layout',
    });

	this.route('settings', {
        path: '/dashboard/settings',
		layoutTemplate: 'layout',
		after: function () {
			Session.set('pageTitle', 'Edit Your profile');
			Session.set('returnTo', '/dashboard/profile');
		}
    });

	// Settings
//	this.route('editProfile', {
//        path: '/dashboard/settings/edit-profile',
//		layoutTemplate: 'settings',
////		after: function () {
////			Session.set('pageTitle', 'Edit Your profile');
////			Session.set('returnTo', '/dashboard/profile');
////		}
//    });

});

// On before action
Router.onBeforeAction('loading');

// Plugins
Router.plugin('ensureSignedIn', {
    except: ['intro', 'login', 'signInEmail', 'register', 'forgotPassword', 'createNewAccount', 'terms']
});
