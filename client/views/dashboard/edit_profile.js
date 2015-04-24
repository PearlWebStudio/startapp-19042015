AutoForm.addHooks(['editProfile'], {
	after: {
        update: function(error, result) {
            if (error) {
               $.notify("Error", {style: 'error', position:"bottom center"});
            } else {
                $.notify("Profile Updated", {style: 'success', position:"bottom center"});
            }
        },
	}
});

AutoForm.debug()

Template.editProfile.rendered = function () {
	$('.checkbox').removeClass('checkbox').addClass('togglebutton togglebutton-material-deep-orange');
	$.material.init();

}

