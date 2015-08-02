'use strict'

var React = require('react');

// Edit box for editing page elements
module.exports = React.createClass({
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