// Set title and subtitle values
Template.navAuth.helpers({
	pageTitle: function() {
		return Session.get('pageTitle');
	},

	returnTo: function() {
		return Session.get('returnTo');
}

});
