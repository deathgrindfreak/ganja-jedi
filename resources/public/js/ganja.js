$(document).ready(function() {
    $("a.login-dropdown-toggle").click(function(event) {
        event.preventDefault();
        var dropdown = $("div.login-dropdown");

        if (dropdown.is(":visible")) {
            dropdown.slideUp(200);
        } else {
            dropdown.slideDown(200);
        }
    });
});
