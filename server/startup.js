Meteor.startup(function() {

	  // user roles
	  var roles = ['banned', 'active', 'master', 'admin']

	  // this will fail if the roles package isn't installed
	  if(Meteor.roles.find().count() === 0) {
		roles.map(function(role) {
		  Roles.createRole(role)
		})
	  }

    if (Meteor.users.find().count() === 0) {
        var users = [{
            name: "admin",
			username: "admin",
            email: "admin@test.com",
            roles: ['admin']
        }, {
            name: "user",
			username: "user",
            email: "user@test.com",
            roles: ['active']
        }, {
            name: "master",
			username: "master",
            email: "master@test.com",
            roles: ['master']
        }, ];

        _.each(users, function(user) {
            var id;

            id = Accounts.createUser({
                name: user.name,
				username: user.username,
				email: user.email,
                password: "password",
            });

            if (user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles, Roles.GLOBAL_GROUP);
            }

        });
    }

});

