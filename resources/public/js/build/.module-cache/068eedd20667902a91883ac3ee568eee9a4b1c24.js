// Speed and media match for login dropdown
var dropdownSpeed = 200;
var mq = window.matchMedia("screen and (max-width: 768px)");

$(function() {
    var alterDropdown = function() {
        if (mq.matches) {
            var drop = $("div.login-dropdown-normal").html();
            $("div.login-dropdown-normal").empty();
            $("div.login-dropdown-mobile").append(drop);
            dropdownSpeed = 350;
        } else {
            var dropm = $("div.login-dropdown-mobile").html();
            $("div.login-dropdown-mobile").empty();
            $("div.login-dropdown-normal").append(dropm);
            dropdownSpeed = 200;
        }
    };

    // alter the layout at startup
    alterDropdown();

    // Check if media query is activated
    mq.addListener(function(changed) {
        alterDropdown();
    });

    $("a.login-dropdown-toggle").click(function(event) {
        event.preventDefault();
        var dropdown = $("div.login-dropdown");

        if (dropdown.is(":visible")) {
            dropdown.slideUp(dropdownSpeed);
        } else {
            dropdown.slideDown(dropdownSpeed);
        }
    });
});

// $(function() {
//     // Ajax for register page
//     $('.reg-button').click(function() {
//         // Array for the inputs
//         var formInputs = new Array();
//         // Get the form name
//         var form = $(this).parent().attr('id');
//         $('#' + form + ' input').each(function() {
//             // Get the input value
//             var inputVal = $(this).val();
//             // Get the input name
//             var inputName = $(this).attr('name');
//             // Add to the array
//             formInputs[inputName] = inputVal;
//         });
//         $.ajax({
//             url: '/register',
//             type: 'POST',
//             data: {
//                 inputs: formInputs;
//             },
//             success: function(data) {
//             }
//         });
//     });
// });
