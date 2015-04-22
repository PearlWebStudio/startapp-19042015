Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);

if (Meteor.isClient) {

//	Template.layout.events({
//    'click #open': function () {
//      $("#my-menu").trigger("open.mm");
//    },
//    'click #close': function () {
//      $("#my-menu").trigger("close.mm");
//    }
//  });

  Template.layout.rendered = function() {
    $("#my-menu").mmenu({
      classes: "mm-black",
        // mm-white mm-black mm-light
//   		header: {
//            add: true,
//            content: ""
//         },
//      counters: true,
//         footer: {
//            add: true,
//            content: "{{> signOut}}"
//         },
      offCanvas: {
            position  : "left",
            //zposition : "front"
         },
      onClick: {
          blockUI: false,
          close: true,
          preventDefault: false,
          setSelected: true
      }
    },{
        //transitionDuration: 100  // does not seem to work
    });
    var API = $("#my-menu").data( "mmenu" );

      $("#menu").click(function() {
         API.open();
      });
  };
}
