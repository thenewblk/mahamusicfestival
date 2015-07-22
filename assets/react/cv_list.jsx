/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Router = require('react-router');
var Navigation = require('react-router').Navigation;

var	Partner = require('./partner.jsx');

module.exports = React.createClass({

	getInitialState: function(){
		return { partners: [] };
	},
	openPartner: function(clicked_partner) {
    console.log("openPartner: " + clicked_partner);
		var current_partner = this.state.partners.filter(function(partner){
			return partner.title == clicked_partner;
		});

		this.setState({current_partner: current_partner[0]});
	},

	closePartner: function(){
		this.setState({current_partner: null});
	},

	toggleLineup: function(){
		this.props.cv_list();
	},


	componentWillMount: function(){
		var self = this;
		self.loadPartners();
	},

	loadPartners: function(){
		var self = this;
	    request
	      .get('http://www.mahamusicfestival.com/wp-json/posts')
	      .query('type[]=cv_partner&filter[posts_per_page]=-1')
	      .end(function(err, res) {
			if (res.ok) {
				var partners = res.body;

				self.setState({partners: partners});

			} else {
				console.log('Oh no! error ' + res.text);
			}
	      }.bind(self));
	},

	  prevPartner: function(){
	  	var self = this;
	  	var current_partner = self.state.current_partner;
	  	var index = self.state.partners.indexOf(current_partner);
	  	if (index == 0) {
	  		var new_partner = self.state.partners.length-1;
	  	} else {
	  		var new_partner = index - 1;
	  	}
	  	self.openPartner(self.state.partners[new_partner].title);
	  },

	  nextPartner: function(){
	  	var self = this;
	  	var current_partner = self.state.current_partner;
      var index = self.state.partners.indexOf(current_partner);
	  	if (index == self.state.partners.length-1) {
	  		var new_partner = 0;
	  	} else {
	  		var new_partner = index + 1;
	  	}
	  	self.openPartner(self.state.partners[new_partner].title);
	  },

  render: function() {
  	var self = this;
    var partners = self.state.partners.map(function(object){
      return <h4 className="cv_partner_link" onClick={self.openPartner.bind(this, object.title)} dangerouslySetInnerHTML={{__html: object.title}}></h4>
    });

  	if (self.state.current_partner) {
  		var current_partner = self.state.current_partner;

  		return (
  			<div className="cv_list_container">
  				<div className="cv_list_controller">
  					<span className="previous_band" onClick={self.prevPartner}>
  						<svg x="0px" y="0px" viewBox="0 0 22.3 10.9" enable-background="new 0 0 22.3 10.9" >
  							<g>
  								<path d="M0,5.4c0,0.2,10.8,5.8,11.2,5.4c0.4-0.4,0.2-10.7,0-10.9"/>
  								<path d="M22.1,0c-0.2-0.2-11.2,5.2-11.2,5.4c0,0.2,10.8,5.8,11.2,5.4C22.5,10.5,22.2,0.2,22.1,0"/>
  							</g>
  						</svg>
  					</span>
  					<span className="close_band" onClick={self.closePartner}>×</span>
  					<span className="next_band" onClick={self.nextPartner}>
  						<svg x="0px" y="0px" viewBox="0 0 19.2 9.4" enable-background="new 0 0 19.2 9.4" >
  							<g>
  								<path d="M9.6,0c0.2-0.2,9.6,4.5,9.6,4.7s-9.3,5-9.6,4.7C9.2,9,9.4,0.2,9.6,0z"/>
  								<path d="M0.2,0c0.2-0.2,9.6,4.5,9.6,4.7s-9.3,5-9.6,4.7C-0.1,9,0,0.2,0.2,0z"/>
  							</g>
  						</svg>
  					</span>
  				</div>
  		  	<Partner partner={current_partner} key={current_partner.title}  />
  	  	</div>
    		)
  	} else {
  	    return (
  	    	<div className="cv_list">
  				    {partners}
  			</div>
  	    )
  	}
  }
});
