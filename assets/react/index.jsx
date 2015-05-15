/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Header = require('./header.jsx'),
	Band = require('./band.jsx'),
	Lineup = require('./lineup.jsx'),
	Tickets = require('./tickets.jsx');


var TopMenu = React.createClass({  
	getInitialState: function(){
		return { lineup: false, tickets: false, content: null };
	},

	componentWillMount: function(){
	},

	componentDidMount: function(){
		window.addEventListener('scroll', this.handleScroll);
	},

	handleScroll: function(event) {
		this.setState({content: null, lineup: false, tickets: false})
	},

	toggleLineup: function() {
		var self = this;
		if ( self.state.lineup ) {
			var content = null;
			self.setState({lineup: false, content: content})
		} else {
			var content = <Lineup lineup={self.toggleLineup}/>;
			self.setState({lineup: true, content: content, tickets: false})
		}
	},

	toggleTickets: function() {
		var self = this;
		if ( self.state.tickets ) {
			var content = null;
			self.setState({tickets: false, content: content})
		} else {
			var content = <Tickets tickets={self.toggleTickets}/>;
			self.setState({tickets: true, content: content, lineup: false})
		}
	},

	render: function() {
		var self = this;

		var content = self.state.content;
		if (content) {
			var content_class = "top_container";
		} else {
			var content_class = "top_container hidden";
		}

		return (
			<div className="top-menu">
				<Header lineup={self.toggleLineup} tickets={self.toggleTickets} />

				<div className={content_class}>{ content }</div>

			</div>
		)
	}
});


var Sponsors = React.createClass({  
	getInitialState: function(){
		return { sponsors: [] };
	},

	componentWillMount: function(){
		this.loadSponsors();
	},

	loadSponsors: function(){
	    var self = this;
	      request
	        .get('http://www.mahamusicfestival.com/wp-json/posts')
	        .query('type[]=sponsor&filter[posts_per_page]=-1')
	        .end(function(err, res) {
	      if (res.ok) {
	        var sponsors = res.body;
	        console.log(sponsors);
	        self.setState({sponsors: sponsors});

	      } else {
	        console.log('Oh no! error ' + res.text);
	      }
	        }.bind(self));  
	  },

	render: function() {
		var self = this;

		var sponsors = self.state.sponsors.map(function(object){
			return <img className="spimage" src={object.meta.image.url} />
		});

		var tier = [];
		for (var i=1; i < 8; i++) {
			tier[i] = self.state.sponsors.filter(function(object){
				return object.meta.tier == i.toString();
			});
		}

		var sponsors = [];
		for (var i=1; i < 8; i++) {
			sponsors[i] = tier[i].map(function(object){
				return <img className="spimage" src={object.meta.image.url} />
			});
		}

		return (
			<div className="sponsors_list">
				<img className="sponsors_title" src="/wp-content/themes/maha2015.v2.1/svg/sponsors.svg" />
					<p className="sponsors_copy">We`re grateful to our partners who make Maha possible. To join this mix and support the party that makes Omaha proud, contact us at <a href="mailto:sponsor@mahamusicfestival.com">sponsor@mahamusicfestival.com</a>. </p>
				<div className="sponsors_tier">{ sponsors[1] }</div>
				<div className="sponsors_tier">{ sponsors[2] }</div>
				<div className="sponsors_tier">{ sponsors[3] }</div>
				<div className="sponsors_tier">{ sponsors[4] }</div>
				<div className="sponsors_tier">{ sponsors[5] }</div>
				<div className="sponsors_tier">{ sponsors[6] }</div>
				<div className="sponsors_tier">{ sponsors[7] }</div>
			</div>
		)
	}
});

React.render(<TopMenu />, document.getElementById('menu')); 

React.render(<Sponsors />, document.getElementById('sponsors')); 