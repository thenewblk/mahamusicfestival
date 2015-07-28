/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');
    ScrollMagic = require('scrollmagic');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

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
	Footer = require('./footer.jsx'),
	OmahaGives = require('./omaha_gives.jsx'),
	InstagramFeed = require('./instagramfeed.jsx'),
	FoodVendors = require('./food_vendors.jsx'),
	Venue = require('./venue.jsx'),
	CommunityVillage = require('./new_communityvillage.jsx');

var Website = React.createClass({
	getInitialState: function(){
		return { body: false, menu: null, windowWidth: window.innerWidth, name: "" }
	},

	componentWillMount: function(){
    var self = this;
		var name = self.props.params.name;
    var partner_id = self.props.params.partner_id;
    if (name) {
      console.log("name: " + name);
      self.setState({name: name});
    }
    if (partner_id) {
      console.log("partner_id: " + partner_id);
      self.setState({partner_id: partner_id});
    }
	},

	componentDidMount: function(){
		var self = this;
		var controller = new ScrollMagic.Controller({ globalSceneOptions: {triggerHook: 0}});
	    var top = new ScrollMagic.Scene({
	                triggerElement: ".top-tape",
	                offset: 100
	            })
	            .setClassToggle("body", "orange-open")
	            .addTo(controller);

	    controller.scrollTo(function (newpos) {
	      if(self.state.windowWidth > 480){
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 105, autoKill:false }, ease:Power1.easeOut});
	      } else {
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 50, autoKill:false }, ease:Power1.easeOut});
	      }
	    });

	    if (self.state.name == "community-village") {
	    	controller.scrollTo('#community-village');
	    } else if (self.state.name == "fyi") {
	    	controller.scrollTo('#fyi');
	    }
	},

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
		var name = self.state.name;
    var partner_id = self.state.partner_id;

		if (body) {
			var body_class = "website topdrawer";
		} else {
			var body_class = "website";
		}
		return (
			<div className={body_class} ref="website">
				<Menu body={self.bodyClass} close_body={self.closeBody} open_body={self.openBody} open={ menu } clear_menu={ self.clearMenu } name={name} partner={partner_id} />
				<div className="orangebar">
					<div className="orange-wrapper">
						<img className="schnakel-black" src="/wp-content/themes/maha2015.v2.2/dist/images/schnakel-black.png" />
						<img className="orange-middle" src="/wp-content/themes/maha2015.v2.2/dist/images/schnackel-bar.png" />
					</div>
				</div>
				<TopSection open_menu={ self.setMenu } />
				<SummerSeries />
        <Venue />
        <FoodVendors />
        <CommunityVillage />
				<InstagramFeed />
				<FYI />
				<Sponsors />
				<Footer />
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

var App = React.createClass({
	contextTypes: {
	    router: React.PropTypes.func
	},
  render: function() {
    return  <RouteHandler />;
  }
});

var routes = (
  <Route handler={App} path="/">
    <Route path="/band/:name" handler={Website}/>
    <Route path="/partner/:partner_id" handler={Website}/>
    <Route path=":name" handler={Website}/>
    <DefaultRoute handler={Website} />
    <NotFoundRoute handler={Website} />
  </Route>
);

function hasClass(ele,cls) {
     return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

if(hasClass(document.body, "home")){
	// React.render(<Website />, document.body);
	Router.run(routes, Router.HistoryLocation, function (Handler) {
	  React.render(<Handler/>, document.body);
	});
}
