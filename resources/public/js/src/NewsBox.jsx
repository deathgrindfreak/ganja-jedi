'use strict'

var React = require('react');

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
                            <label for="title">Title:</label>
                            <input className="form-control" name="title" onChange={this.onChange} value={this.state.title} placeholder="Title" />
                          </div>
                          <div className="inputGroup">
                            <label for="author">Author:</label>
                            <input className="form-control" name="author" onChange={this.onChange} value={this.state.author} placeholder="Author"/>
                          </div>
                          <div className="inputGroup">
                            <textarea className="form-control news-area" name="body" onChange={this.onChange} rows="5" value={this.state.body} placeholder="Message ..."></textarea>
                          </div>
                          <div className="right-button-wrapper">
                            <div className="right-button">
                              <button className="btn news-btn">Submit</button>
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