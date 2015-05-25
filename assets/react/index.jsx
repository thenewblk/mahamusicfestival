/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');
    ScrollMagic = require('scrollmagic');

var Header = require('./header.jsx'),
	Band = require('./band.jsx'),
	Lineup = require('./lineup.jsx'),
	Tickets = require('./tickets.jsx'),
	Festival = require('./festival.jsx'),
	TopSection = require('./topsection.jsx'),
	SummerSeries = require('./summerseries.jsx'),
	FYI = require('./fyi.jsx'),
	Sponsors = require('./sponsors.jsx'),
	Menu = require('./menu.jsx'),
	GetInvolved = require('./getinvolved.jsx'),
	OmahaGives = require('./omaha_gives.jsx'),
	InstagramFeed = require('./instagramfeed.jsx');

var Website = React.createClass({  
	getInitialState: function(){
		return { body: false, menu: null, windowWidth: window.innerWidth }
	},
	componentDidMount: function(){
		// window.addEventListener('scroll', this.handleScroll);
		// window.addEventListener('resize', this.handleResize);

		var controller = new ScrollMagic.Controller({ globalSceneOptions: {triggerHook: 0}});
	    var top = new ScrollMagic.Scene({
	                triggerElement: ".top-tape",
	                offset: 100 
	            })
	            .setClassToggle("body", "orange-open")
	            .addTo(controller);  
	},

	// handleResize: function(e) {
	// 	this.setState({windowWidth: window.innerWidth});
	// },

	// handleScroll: function(event) {
		// var self = this;
		// var node = React.findDOMNode(self.refs.website);
		// console.log("node: " + JSON.stringify(node)); 
		// console.log("node.scrollTop: " + node.scrollTop);
		// console.log("node.scrollHeight: " + node.scrollHeight);
		// console.log("$(document).scrollTop(): " + $(document).scrollTop());

		// if (self.state.windowWidth > 480) {

		// 	this.setState({menu: 'scrolled'});  
		// }
	// }, 

	bodyClass: function(){
		this.setState({body: !this.state.body});
	},

	openBody: function(){
		this.setState({body: true});
	},

	closeBody: function(){
		this.setState({body: false});
	},

	setMenu: function(string){
		this.setState({menu: string}); 
	},

	clearMenu: function(){
		this.setState({menu: null});
	},
 
	render: function() {
		var self = this;
		var body = self.state.body;

		var menu = self.state.menu;

		if (body) {
			var body_class = "website topdrawer";
		} else {
			var body_class = "website";
		}
		return (
			<div className={body_class} ref="website">
				<Menu body={self.bodyClass} close_body={self.closeBody} open_body={self.openBody} open={ menu } clear_menu={ self.clearMenu }/>
				<div className="orangebar">
					<div className="orange-wrapper">
						<img className="schnakel-black" src="/wp-content/themes/maha2015.v2.2/dist/images/schnakel-black.png" />
						<img className="orange-middle" src="/wp-content/themes/maha2015.v2.2/dist/images/schnackel-bar.png" />
					</div>
				</div>
				<TopSection open_menu={ self.setMenu } />
				<SummerSeries />
				<InstagramFeed />
				<FYI />
				<Sponsors />
				<GetInvolved />
				<div className="social">
					<a href="https://twitter.com/mahafestival" target="_blank" className="link"><img src="/wp-content/themes/maha2015.v2.2/dist/images/twitter-04.svg" /></a>
					<a href="https://www.facebook.com/MahaMusicFestival" target="_blank" className="link"><img src="/wp-content/themes/maha2015.v2.2/dist/images/facebook-05.svg" /></a>
					<a href="https://instagram.com/mahamusicfest/" target="_blank" className="link"><img src="/wp-content/themes/maha2015.v2.2/dist/images/instagram-06.svg" /></a>
					<a href="mailto:info@mahamusicfestival.com" target="_blank" className="link"><img src="/wp-content/themes/maha2015.v2.2/dist/images/mail-07.svg" /></a>
				</div>
			</div>
		)
	}
});

function hasClass(ele,cls) {
     return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

if(hasClass(document.body, "home")){
	React.render(<Website />, document.body);
}