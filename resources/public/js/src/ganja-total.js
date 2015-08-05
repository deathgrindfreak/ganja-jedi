'use strict'

// Speed and media match for login dropdown
var dropdownSpeed = 200;
var mq = window.matchMedia("screen and (max-width: 768px)");

var aboutText = {
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
            <div>
              <div className="modal fade" id="news-modal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="news-form-box">
                      <div>
                      <button type="button" className="close-button" onClick={this.hideModal} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      </div>
                      <div className="modal-body">
                        <div className="news-form-box-title">
                          <h3 className="modal-title">New News Item</h3>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                          <div className="inputGroup">
                            <label htmlFor="title">Title:</label>
                            <input className="form-control" name="title" onChange={this.onChange} value={this.state.title} placeholder="Title" />
                          </div>
                          <div className="inputGroup">
                            <label htmlFor="author">Author:</label>
                            <input className="form-control" name="author" onChange={this.onChange} value={this.state.author} placeholder="Author"/>
                          </div>
                          <div className="inputGroup">
                            <textarea className="form-control news-area" name="body" onChange={this.onChange} rows="5" value={this.state.body} placeholder="Message ..."></textarea>
                          </div>
                          <div className="right-button-wrapper">
                            <div className="right-button">
                              <button className="btn news-btn orange-btn">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NewsList newsItems={this.state.items} />
            </div>
        );
    }
});

var NewsList = React.createClass({
    displayName: 'NewsList',
    render: function() {
        var createNewsItem = function(item, index) {
            return (
                <div className="news-section" key={index + item.title}>
                  <h3>{item.title}</h3>
                  <div className="news-content">
                    <p>{item.body}</p>
                    <br />
                    <p>{item.author}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
            );
        };
        return <div>{this.props.newsItems.map(createNewsItem)}</div>;
    }
});


// Edit box for editing page elements
var EditBox = React.createClass({
    displayName: 'EditBox',
    getInitialState: function() {
        return {
            isNormalMode: "true",
            body: this.props.text.initialBody
        };
    },
    onClick: function(e) {
        e.preventDefault();
        var normal = e.target.dataset.normal;
        this.setState({isNormalMode: normal});
    },
    onChange: function(e) {
        var itemChange = new Object();
        itemChange[e.target.name] = e.target.value;
        this.setState(itemChange);
    },
    editHeader: function() {
        if (this.state.isNormalMode === "true") {
            return <a onClick={this.onClick}
                      data-normal="false"
                      style={{float: 'right', cursor: 'pointer'}}>
                    [edit]
                   </a>;
        }
        return '';
    },
    bodyText: function() {

        if (this.state.isNormalMode === "true") {
            return (
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked(this.state.body)
                    }}
                  />
                </div>
            );
        } else {
            return (
                <div>
                    <textarea
                      name="body"
                      onChange={this.onChange}
                      rows="5"
                      style={{width: '250px'}}
                      value={this.state.body}>
                    </textarea>
                    <button data-normal="true" onClick={this.onClick}>
                        Submit
                    </button>
                </div>
            );
        }
    },
    render: function() {
        return (
            <div>
                <div style={{width: '130px'}}>
                    {this.editHeader()}
                    <h1>{this.props.text.title}</h1>
                </div>
                <div>
                    {this.bodyText()}
                </div>
            </div>
        );
    }
});

$(document).ready(function() {
    React.render(<NewsBox />, document.getElementById('news-box'));
    React.render(<EditBox text={this.aboutText} />, document.getElementById('edit-box'));
});
