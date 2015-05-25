/**
 * @jsx React.DOM
 */

var React = require('react');

var OmahaGives = React.createClass({  

	render: function() {


		return (
			<div className="omaha_gives_slide">
				<div className="wrapper">
					<span className="close_button">×</span>
					<div className="container">
						<div className="row">
							<div className="left_image">
								<img src="/wp-content/themes/maha2015.v2.2/dist/images/donate_slide.png" />
							</div>
							<div className="right_content">
								<p><strong>Maha gets bigger and better every year because of big-hearted donations, large and small.</strong></p>
								<p>In their third year as Maha’s presenting sponsor, Schnackel Engineers will match 1/3 of every donation through Omaha Gives! up to $10,000.</p>
								<p>This means your $15 gift turns to $20!</p>
								<p>Your $60 gift turns to $80!</p>
								<p>Your $150 gift turns to $200! </p>
								<p>Schedule your donation NOW and Maha earns additional bonus dollars and prizes on May 20! </p>
								<p>*The minimum gift is $10.</p>
							</div>
						</div>
						<a className="gives_donate_button" target='_blank' href="https://www.omahagives24.org/index.php?section=organizations&action=newDonation&fwID=1106"><img src="/wp-content/themes/maha2015.v2.2/dist/images/donate_omaha_gives.png" /></a>
					</div>
				</div>
			</div>
		) 
	}
});


module.exports = OmahaGives;