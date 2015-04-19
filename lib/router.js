Router.configure({
    layoutTemplate: 'hall',
    loadingTemplate: 'splash',
});

Router.map(function() {
    this.route('intro', {
        path: '/'
    });
});

Router.onBeforeAction('loading');
