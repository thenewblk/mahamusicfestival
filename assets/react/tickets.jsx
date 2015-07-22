/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Tickets = React.createClass({
	toggleTickets: function(){
		this.props.tickets();
	},

    render: function() {
	  	var self = this;
      if ( self.props.partner ) {
        return (
		    	<div className="tickets_container">
		    		<span className="close_band" onClick={self.toggleTickets}>×</span>
  					<div className="tickets_wrap">
  						<a href={"http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=4383595&partner_id="+self.props.partner} className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/50.svg" /> General Admission</a>
  						<a href={"http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=6262115&partner_id="+self.props.partner} className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/175.svg" /> Broadmoor​ VIP Package</a>
  					</div>
  				</div>
		    )
      } else {
		    return (
		    	<div className="tickets_container">
		    		<span className="close_band" onClick={self.toggleTickets}>×</span>
  					<div className="tickets_wrap">
  						<a href="http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=4383595&partner_id=376" className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/50.svg" /> General Admission</a>
  						<a href="http://www.etix.com/ticket/online/performanceSearch.jsp?performance_id=6262115&partner_id=376"className="ticket_link" target="_blank"><img className="price" src="/wp-content/themes/maha2015.v2.2/dist/images/175.svg" /> Broadmoor​ VIP Package</a>
  					</div>
  				</div>
		    )
      }
    }
});

module.exports = Tickets;
