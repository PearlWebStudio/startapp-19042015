$.notify.addStyle('success', {
    html: "<div><span data-notify-text/></div>",
    classes: {
        base: {
            "white-space": "nowrap",
            "background-color": "#DFF0D8",
			"color": "#3C763D",
            "padding": "10px 20px",
			"border-radius": "4px",
        },
    },
});

$.notify.addStyle('error', {
    html: "<div><span data-notify-text/></div>",
    classes: {
        base: {
            "white-space": "nowrap",
            "background-color": "#F2DEDE",
			"color": "#A94442",
            "padding": "10px 20px",
			"border-radius": "4px",
        },
    }
});

$.notify.addStyle('delete', {
  html:
    "<div>" +
      "<div class='clearfix'>" +
        "<div class='title' data-notify-html='title'/>" +
        "<div class='buttons'>" +
          "<a href='#' class='btn btn-danger'>Cancel</a>" +
        "</div>" +
      "</div>" +
    "</div>",
    classes: {
        base: {
            "white-space": "nowrap",
            "background-color": "#F2DEDE",
			"color": "#A94442",
            "padding": "10px 20px",
			"border-radius": "4px",
        },
    }
});
