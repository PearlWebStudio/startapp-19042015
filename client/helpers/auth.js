Template.signOut.events({
  'click #signOut': function(e, t) {

    Meteor.logout(function() {
      	Router.go('/')
    });

    return false;
  }
});

AccountsTemplates.configureRoute('signIn', {
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/dashboard');
    }
});
