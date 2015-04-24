Template.userProfile.helpers({
    pageTitle: function() {
        return Session.get('pageTitle');
    },
    username: function () {
		var user = Meteor.user();
		var name = '';
		  if (user && user.profile && user.profile.name) {
			name = user.profile.name;
		  }
		  else if (user && user.username) {
			name = user.username;
		  }
		  return name;

		},
	bio: function () {
		var user = Meteor.user();
		var bio = '';
		if (user && user.profile && user.profile.bio) {
			bio = user.profile.bio;
		}
		return bio;
	}

});

AutoForm.debug()
