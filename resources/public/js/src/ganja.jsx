'use strict'

var React = require('react');
var NewsBox = require('./NewsBox');
//var EditBox = require('./EditBox');

// Speed and media match for login dropdown
var dropdownSpeed = 200;
var mq = window.matchMedia("screen and (max-width: 768px)");

var aboutText = {
    title: 'About',
    initialBody: 'We’re a very friendly family clan that is fortunate to have a loyal core of members.' +
                 'We’re very laid back, and ask those who opt in to war to take it very seriously.' +
                 'We love ganja, but it is not a requirement for membership.' +
                 'We’re all chill here.'
};

// Dropdown for login
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

React.render(<NewsBox />, document.getElementById('news-box'));
//React.render(<EditBox text={this.aboutText} />, document.getElementById('edit-box'));
