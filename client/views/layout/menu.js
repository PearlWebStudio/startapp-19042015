Template.menu.helpers({
	user: function() {
		return Meteor.user();
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
		}

});
