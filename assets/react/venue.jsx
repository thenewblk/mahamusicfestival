/**
 * @jsx React.DOM
 */

var React = require('react');

var Venue = React.createClass({

	render: function() {
		var self = this;

		return (
			<div className="content-wrapper venue-section" id="venue">
				<div className="content-inner">

					<div className="venue-legend">
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-medical.svg" /> Nebraska Medicine First Aid + Security
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-water.svg" /> DiVentures Water Stations
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-atm.svg" /> ATM
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-merch.svg" /> Maha Merchandise
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-vip.svg" /> Broadmoor VIP Area
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-smoke.svg" /> Smoking Section
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-parking.svg" /> Parking
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-01.svg" /> Weitz Investment Management Stage
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-02.svg" /> Javlin Capital Stage
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-03.svg" /> Centris Federal Credit Union Community Village
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-04.svg" /> Drink
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-05.svg" /> Food
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-06.svg" /> Vendors
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-07.svg" /> Maha Money
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-08.svg" /> Porta Potty Village
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-09.svg" /> Aetna Volunteer Headquarters
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-10.svg" /> Mail Chimp Bike Corral
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-11.svg" /> Sponsor Alley
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-12.svg" /> Scott Data Phone Charging
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-13.svg" /> Chair Free Zone
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-14.svg" /> Rock Climbing Wall
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-15.svg" /> Game Truck
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-16.svg" /> ID Station
						</p>
						<p className="legend-item">
							<img className="item-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/icons-17.svg" /> Werner Wheel
						</p>

					</div>

					<div className="venue-images">
						<img className="venue-title" src="/wp-content/themes/maha2015.v2.2/dist/images/venue_orange.svg" />
						<img className="map-venue" src="/wp-content/themes/maha2015.v2.2/dist/images/map-venue.svg" />
						<img className="map-parking" src="/wp-content/themes/maha2015.v2.2/dist/images/map-parking.svg" />
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Venue;
