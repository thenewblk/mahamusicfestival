/**
 * @jsx React.DOM
 */

var React = require('react'),
		FoodList = require('./food_list.jsx');

module.exports = React.createClass({

	render: function() {
		var self = this;

		return (
			<div className="community-section" id="food_vendors">
				<div className="community-header food_vendor_header">
					<div className="content-wrapper" >
						<div className="content-inner">
							<h1 className="food_vendor_title">FOOD, DRINK & MORE</h1>
						</div>
					</div>
				</div>
				<div className="content-wrapper" >
					<div className="content-inner">
						<div className="cv-content">
							<FoodList />
						</div>
					</div>
				</div>
			</div>
		)
	}
});
