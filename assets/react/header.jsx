/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Header = React.createClass({
	toggleLineup: function(){
		this.props.lineup();
	},

  render: function() {
    return (
      <div className="header">
      	<span onClick={this.toggleLineup} className="link">Lineup</span>
      </div>
    )
  }
});

module.exports = Header;