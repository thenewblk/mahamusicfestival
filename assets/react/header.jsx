/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent'),
    ScrollMagic = require('scrollmagic'),
    TweenMax = require('../scripts/tweenmax.js');

require('../scripts/scrollTo.js');

var Header = React.createClass({
  getInitialState: function() {
    return {windowWidth: window.innerWidth};
  },

	toggleLineup: function(){
		this.props.lineup();
	},
	toggleDonate: function(){},

	toggleTickets: function(){
		this.props.tickets();
	},
	toggleFestival: function(){
		this.props.festival();
	},

  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },

	componentDidMount: function(){
    window.addEventListener('resize', this.handleResize);
    var self = this;
    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
		var controller = new ScrollMagic.Controller({ globalSceneOptions: {triggerHook: 0}});
    var top = new ScrollMagic.Scene({
                triggerElement: "#top",
                offset: 1
            })
            .setClassToggle("body", "scrolled")
            .addTo(controller);

	},

  render: function() {
    return (
      <div className="header">
      	<div className="header_container">
      		<span className="left_header">
	      		<span onClick={this.toggleFestival} className="link">Festival</span>
	      		<span onClick={this.toggleLineup} className="link">Lineup</span>
      		</span>
      		<img className="small_bird_logo" src="/wp-content/themes/maha2015.v2.2/dist/images/bird_logo.svg" />
      		<span className="right_header">
	      		<span className="link" onClick={this.toggleTickets}>Tickets</span>
	      		<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DQB5Y344TCR84" className="link" target="_blank">Donate</a>
      		</span>
          <span className="mobile_header">
            <span onClick={this.toggleFestival} className="link">Festival</span>
            <span onClick={this.toggleLineup} className="link">Lineup</span>
            <span className="link" onClick={this.toggleTickets}>Tickets</span>
          </span>
      	</div>
      </div>
    )
  }
});

module.exports = Header;
