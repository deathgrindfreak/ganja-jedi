/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/resources/public/js/build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict'

	var React = __webpack_require__(1);
	var NewsBox = __webpack_require__(2);
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

	React.render(React.createElement(NewsBox, null), document.getElementById('news-box'));
	//React.render(<EditBox text={this.aboutText} />, document.getElementById('edit-box'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/** @jsx React.DOM */'use strict'

	var React = __webpack_require__(1);

	// News box for front page
	module.export = React.createClass({
	    displayName: 'NewsBox',
	    getInitialState: function() {
	        return {
	            items: [],
	            title: '',
	            author: '',
	            body: '',
	            date: ''
	        };
	    },
	    onChange: function(e) {
	        var newsInput = new Object();
	        newsInput[e.target.name] = e.target.value;
	        this.setState(newsInput);
	    },
	    getTodaysDate: function() {
	        var months = [
	            "January", "February", "March", "April", "May", "June", "July",
	            "August", "September", "October", "November", "December"
	        ];
	        var today = new Date();
	        var day = today.getDate();
	        var monthInd = today.getMonth();
	        var year = today.getFullYear();
	        return months[monthInd] + ", " + day + " " + year;
	    },
	    handleSubmit: function(e) {
	        e.preventDefault();
	        var newItem = this.state.items;
	        newItem.unshift({
	            title: this.state.title,
	            author: this.state.author,
	            body: this.state.body,
	            date: this.getTodaysDate()
	        });
	        this.setState({
	            items: newItem,
	            title: '',
	            author: '',
	            body: '',
	            date: ''
	        });
	        $('#news-modal').modal('hide');
	    },
	    hideModal: function(e) {
	        e.preventDefault();
	        $('#news-modal').modal('hide');
	    },
	    render: function() {
	        return (
	            React.createElement("div", null, 
	              React.createElement("div", {className: "modal fade", id: "news-modal"}, 
	                React.createElement("div", {className: "modal-dialog"}, 
	                  React.createElement("div", {className: "modal-content"}, 
	                    React.createElement("div", {className: "news-form-box"}, 
	                      React.createElement("div", null, 
	                      React.createElement("button", {type: "button", className: "close-button", onClick: this.hideModal, "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×"))
	                      ), 
	                      React.createElement("div", {className: "modal-body"}, 
	                        React.createElement("div", {className: "news-form-box-title"}, 
	                          React.createElement("h3", {className: "modal-title"}, "New News Item")
	                        ), 
	                        React.createElement("form", {onSubmit: this.handleSubmit}, 
	                          React.createElement("div", {className: "inputGroup"}, 
	                            React.createElement("label", {for: "title"}, "Title:"), 
	                            React.createElement("input", {className: "form-control", name: "title", onChange: this.onChange, value: this.state.title, placeholder: "Title"})
	                          ), 
	                          React.createElement("div", {className: "inputGroup"}, 
	                            React.createElement("label", {for: "author"}, "Author:"), 
	                            React.createElement("input", {className: "form-control", name: "author", onChange: this.onChange, value: this.state.author, placeholder: "Author"})
	                          ), 
	                          React.createElement("div", {className: "inputGroup"}, 
	                            React.createElement("textarea", {className: "form-control news-area", name: "body", onChange: this.onChange, rows: "5", value: this.state.body, placeholder: "Message ..."})
	                          ), 
	                          React.createElement("div", {className: "right-button-wrapper"}, 
	                            React.createElement("div", {className: "right-button"}, 
	                              React.createElement("button", {className: "btn news-btn"}, "Submit")
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ), 
	              React.createElement(NewsList, {newsItems: this.state.items})
	            )
	        );
	    }
	});

	var NewsList = React.createClass({
	    displayName: 'NewsList',
	    render: function() {
	        var createNewsItem = function(item, index) {
	            return (
	                React.createElement("div", {className: "news-section", key: index + item.title}, 
	                  React.createElement("h3", null, item.title), 
	                  React.createElement("div", {className: "news-content"}, 
	                    React.createElement("p", null, item.body), 
	                    React.createElement("br", null), 
	                    React.createElement("p", null, item.author), 
	                    React.createElement("p", null, item.date)
	                  )
	                )
	            );
	        };
	        return React.createElement("div", null, this.props.newsItems.map(createNewsItem));
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);