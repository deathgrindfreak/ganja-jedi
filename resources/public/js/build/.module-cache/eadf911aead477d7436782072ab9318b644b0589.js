'use strict'

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


// News box for front page
var NewsBox = React.createClass({
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


// // Edit box for editing page elements
// var EditBox = React.createClass({
//     displayName: 'EditBox',
//     getInitialState: function() {
//         return {
//             isNormalMode: "true",
//             body: this.props.text.initialBody
//         };
//     },
//     onClick: function(e) {
//         e.preventDefault();
//         var normal = e.target.dataset.normal;
//         this.setState({isNormalMode: normal});
//     },
//     onChange: function(e) {
//         var itemChange = new Object();
//         itemChange[e.target.name] = e.target.value;
//         this.setState(itemChange);
//     },
//     editHeader: function() {
//         if (this.state.isNormalMode === "true") {
//             return <a onClick={this.onClick}
//                       data-normal="false"
//                       style={{float: 'right', cursor: 'pointer'}}>
//                     [edit]
//                    </a>;
//         }
//         return '';
//     },
//     bodyText: function() {

//         if (this.state.isNormalMode === "true") {
//             return (
//                 <div>
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: marked(this.state.body)
//                     }}
//                   />
//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <textarea
//                       name="body"
//                       onChange={this.onChange}
//                       rows="5"
//                       style={{width: '250px'}}
//                       value={this.state.body}>
//                     </textarea>
//                     <button data-normal="true" onClick={this.onClick}>
//                         Submit
//                     </button>
//                 </div>
//             );
//         }
//     },
//     render: function() {
//         return (
//             <div>
//                 <div style={{width: '130px'}}>
//                     {this.editHeader()}
//                     <h1>{this.props.text.title}</h1>
//                 </div>
//                 <div>
//                     {this.bodyText()}
//                 </div>
//             </div>
//         );
//     }
// });

React.render(React.createElement(NewsBox, null), document.getElementById('news-box'));
//React.render(<EditBox text={this.aboutText} />, document.getElementById('edit-box'));

