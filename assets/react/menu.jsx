/**
 * @jsx React.DOM
 */

var React = require('react'),
	Header = require('./header.jsx'),
	Lineup = require('./lineup.jsx'),
	Tickets = require('./tickets.jsx'),
	Festival = require('./festival.jsx');

var Router = require('react-router');

var bandSlugList = [
		"modest-mouse",
		"atmosphere",
		"purity-ring",
		"wavves",
		"alvvays",
		"ex-hex",
		"the-jayhawks",
		"the-good-life",
		"speedy-ortiz",
		"freakabout",
		"all-young-girls-are-machine-guns",
		"both"
	];


var Menu = React.createClass({
	getInitialState: function(){
		return { lineup: false, tickets: false, festival: false, content: null, windowWidth: window.innerWidth, opened_at: null};
	},

	componentWillMount: function(){
		var self = this;
		var name = self.props.name;

		var index = bandSlugList.indexOf(name);
		if (bandSlugList.indexOf(name) > -1) {
			self.toggleLineup(index);
		}
	},

	componentDidMount: function(){
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleResize);
	},

	componentWillReceiveProps: function(nextProps){
		var self = this;

		if (nextProps.open == 'tickets') {
			self.toggleTickets();
			self.props.clear_menu();
		}
		if (nextProps.open == 'scrolled') {
			self.props.close_body();
			self.setState({content: null, lineup: false, tickets: false, festival: false});
			self.props.clear_menu();
		}

	},

	handleResize: function(e) {
		this.setState({windowWidth: window.innerWidth});
	},

	handleScroll: function(event) {
		var self = this;
		var doc_top = $(document).scrollTop();
		var scroll_diff = self.state.opened_at - doc_top;
		if ((self.state.windowWidth > 480) && (Math.abs(scroll_diff) > 100)) {
			self.props.close_body();
			self.setState({content: null, lineup: false, tickets: false, festival: false});
			self.setState({ opened_at: null});
			// window.location.href = "/#/";
		}
	},

	closeTop: function(){
		var self = this;
		self.props.close_body();
		self.setState({content: null, lineup: false, tickets: false, festival: false})
	},

	toggleLineup: function(band) {
		var self = this;
		if ( self.state.lineup ) {
			var content = null;
			self.setState({lineup: false, content: content})
			self.props.close_body();
		} else {
			if ( !self.state.content ) {
				self.props.open_body();
			}
			var content = <Lineup lineup={self.toggleLineup} band={band}/>;
			self.setState({lineup: true, content: content, tickets: false, festival: false, opened_at: $(document).scrollTop()})
		}
	},

	toggleTickets: function() {
		var self = this;
		var partner = self.props.partner;
		if ( self.state.tickets ) {
			var content = null;
			self.props.close_body();
			self.setState({tickets: false, content: content})
		} else {
			if ( !self.state.content ) {
				self.props.open_body();
			}
			var content = <Tickets tickets={self.toggleTickets} partner={partner}/>;
			self.setState({tickets: true, content: content, lineup: false, festival: false, opened_at: $(document).scrollTop()})
		}
	},

	toggleFestival: function() {
		var self = this;
		if ( self.state.festival ) {
			var content = null;
			self.props.close_body();
			self.setState({festival: false, content: content})
		} else {
			if ( !self.state.content ) {
				self.props.open_body();
			}
			var content = <Festival festival={self.toggleFestival} close_top={self.closeTop}/>;
			self.setState({festival: true, content: content, lineup: false, tickets: false, opened_at: $(document).scrollTop()})
		}
	},

	toggleTop: function(){
		this.props.body();
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
			<div className="top-menu" ref="menu">
				<Header lineup={self.toggleLineup} tickets={self.toggleTickets} festival={self.toggleFestival} close_top={self.closeTop} />

				<div className={content_class}>{ content }</div>


			</div>
		)
	}
});

module.exports = Menu;
