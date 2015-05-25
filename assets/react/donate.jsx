/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Donate = React.createClass({
	toggleDonate: function(){
		this.props.donate();
	},
	
    render: function() {
	  	var self = this;
		    return (
		    	<div className="donate_container">
		    		
					<div className="donate_wrap">
						<span className="close_donate" onClick={self.toggleDonate}>×</span>
						<a href="http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=4383595&partner_id=376" className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/50.svg" /> General Admission</a>
						<a href="http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=6262115&partner_id=376" className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/175.svg" /> Broadmoor​ VIP Package</a>
					</div>
				</div>
		    )
    }
});

module.exports = Donate; 