/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Header = require('./header.jsx'),
	Band = require('./band.jsx'),
	Lineup = require('./lineup.jsx');

var TopMenu = React.createClass({  
	getInitialState: function(){
		return { lineup: false };
	},

	componentWillMount: function(){
	},

	toggleLineup: function() {
		this.setState({lineup: !this.state.lineup})
	},

	render: function() {
		var self = this;

		return (
			<div className="top-menu">
				<Header lineup={self.toggleLineup} />

				{ self.state.lineup ? <Lineup lineup={self.toggleLineup}/> : null }

			</div>
		)
	}
});

React.render(<TopMenu />, document.getElementById('content')); 