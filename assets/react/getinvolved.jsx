/**
 * @jsx React.DOM
 */

var React = require('react');

var GetInvolved = React.createClass({  

	render: function() {


		return (
			<div className="content-wrapper getinvolved-section" id="getinvolved">
				<div className="content-inner">
					<div className="getinvolved-content-title">
						<img className="getinvolved_image" src="/wp-content/themes/maha2015.v2.2/dist/images/getinvolved.svg" />
						<p>There are a lot of ways to become a part of Maha. Apply to be a vendor or official member of the press here. Check back for more opportunities coming soon.</p>
					</div>
					<div className="getinvolved-content"> 
						<div className="ticket_wrap">
							<a href="http://www.mahamusicfestival.com/food-vendors/" className="ticket_link" target="_blank">Food Vendor</a>
						</div>
						<div className="ticket_wrap">
							<a href="http://www.mahamusicfestival.com/non-food-vendors/" className="ticket_link" target="_blank">Non Food Vendor</a>
						</div>
						<div className="ticket_wrap">
							<a href="http://www.mahamusicfestival.com/press/" className="ticket_link" target="_blank">Press</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = GetInvolved;