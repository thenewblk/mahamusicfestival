/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent'),
    ScrollMagic = require('scrollmagic');

var Header = React.createClass({
	toggleLineup: function(){
		this.props.lineup();
	},
	toggleDonate: function(){
		// this.props.donate();
	},

	toggleTickets: function(){
		this.props.tickets();
	},
	toggleFestival: function(){
		// this.props.festival();
		console.log("festival")
	},

	componentDidMount: function(){
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
      		<img className="small_bird_logo" src="//localhost:3000/wp-content/themes/maha2015.v2.1/svg/bird_logo.svg" />
      		<span className="right_header">
	      		<span className="link" onClick={this.toggleTickets}>Tickets</span>
	      		<a href="https://www.omahagives24.org/index.php?section=organizations&action=newDonation&fwID=1106" className="link" target="_blank">Donate</a>
      		</span>
      	</div>
      </div>
    )
  }
});

module.exports = Header;