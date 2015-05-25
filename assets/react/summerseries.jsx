/**
 * @jsx React.DOM
 */

var React = require('react');


var SummerSeries = React.createClass({  

	render: function() {
		return (
			<div className="content-wrapper summer-series-section" id="about">
				<div className="content-inner">
					<div className="about-wrapper">
						<img src="/wp-content/themes/maha2015.v2.2/dist/images/themahastory.svg" />
						<p>The Maha Music Festival was formed in 2008 as a nonprofit organization by a group of area professionals interested in leveraging the vibrancy and national prestige of the local independent music scene to bring the Omaha area a new community event. Due to careful oversight by a dedicated board of directors, the hard work of over 300 volunteers, and collaboration with over 20 other nonprofits, Maha has been woven into the fabric of summer in Omaha. The festival is attended by music lovers from 32 states, and attendance surpassed 7000 in 2014. Past headliners include Death Cab for Cutie, The Flaming Lips, Garbage, Spoon, and Desaparecidos.</p>
					</div>
					<div className="lineup-video">
						<div className="video-wrapper">
							<iframe src="https://player.vimeo.com/video/124767658?color=ee5a4f&title=0&byline=0&portrait=0" width="853" height="480" frameBorder="0" allowFullScreen></iframe>
						</div>
					</div>
					<div className="summer-series-wrapper">
						<div className="summercontent-title">
							<img src="/wp-content/themes/maha2015.v2.2/dist/images/summer_series_1.svg" /> 
						</div>
						<div className="summer-content">
							<div className="summer-section">
								<img src="/wp-content/themes/maha2015.v2.2/assets/images/omaha-gives.png" />
								<p>WEDS. MAY 20 8PM</p>
								<p>SLOWDOWN</p>
								<p className="small">PERFORMANCES BY</p>
								<p>ORENDA FINK </p>
								<p>MCCARTHY TRENCHING </p>
								<p>SUPER GHOST </p>
								<p>LOUDER THAN A BOMB</p>
								<p>OPERA OMAHA</p>
								<span className="series-links">
									<a target="_blank" href="https://www.omahagives24.org/index.php?section=organizations&action=newDonation&fwID=1106" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/icon_www-link.svg" />
									</a>
									<a target="_blank" href="https://www.facebook.com/events/390317657828521/" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/facebook-05.svg" />
									</a>
								</span>
							</div>
							<div className="summer-section">
								<img src="/wp-content/themes/maha2015.v2.2/dist/images/mini_maha.svg" />
								<p>SAT. MAY 30  7PM</p>
								<p>RIVER’S EDGE PARK</p>
								<p>COUNCIL BLUFFS</p>
								<p className="small">PERFORMANCES BY</p>
								<p>BEN KWELLER</p>
								<p>THE DODOS</p>
								<p>OKETO</p>
								<span className="series-links">
									<a target="_blank" href="http://loessfest.com/events/mini-maha/" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/icon_www-link.svg" />
									</a>
									<a target="_blank" href="https://www.facebook.com/events/841600469212612/" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/facebook-05.svg" />
									</a>
								</span>
							</div>
							<div className="summer-section">
								<img src="/wp-content/themes/maha2015.v2.2/assets/images/bridge-beats.png" />
								<p>SAT. AUG 7  6PM</p>
								<p>BOB KERREY</p>
								<p>PEDESTRIAN BRIDGE</p>
								<p className="small">PERFORMANCES BY</p>
								<p>ALL YOUNG GIRLS</p>
								<p>ARE MACHINE GUNS</p>
								<p>KAIT BERRECKMAN</p>
								<p>CJ MILLS</p>
								<span className="series-links">
									<a target="_blank" href="http://www.bridgebeats.com/schedule" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/icon_www-link.svg" />
									</a>
									<a target="_blank" href="https://www.facebook.com/events/841600469212612/" className="series-link">
										<img src="/wp-content/themes/maha2015.v2.2/dist/images/facebook-05.svg" />
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = SummerSeries;