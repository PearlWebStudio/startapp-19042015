Template.layout.events(Segue.events);
Template.layout.helpers(Segue.helpers);

Template.layout.rendered = function () {
  var template = this;
  var slideout = new Slideout({
    'panel': template.$('#main').get(0),
    'menu': template.$('#menu').get(0),
    'padding': 256,
    'tolerance': 70
  });
    $('.toggle-menu').on('click', function() {
        slideout.toggle();
    });
}
