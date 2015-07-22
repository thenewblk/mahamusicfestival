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
						<p><strong>The musical chimes of summer </strong> set our hearts a-flutter and our bare feet a-movin’. That’s just facts. Can you hear that last school bell ringing? The one before the doors burst open and we all stampede out into an impromptu end credits dance sequence from an 80s teen movie? Hey, where’d these wacky props come from? Who’s the guy in the gorilla suit? How did we all know when to bust out the same breakdancing move? Who cares? Because that’s the janglin’ of keys you just heard, keys to a cherry red Camaro that are somehow dangling from your fingertips. Don't ask questions, just slide into the driver’s seat, pop in the cassette, crank the volume, roll down the windows, and hit the gas in one fluid motion. Because summer is here, good people, and this is the soundtrack.</p>
					</div>
					<div className="lineup-video">
						<div className="video-wrapper">
							<iframe src="https://player.vimeo.com/video/124767658?color=ee5a4f&title=0&byline=0&portrait=0" width="853" height="480" frameBorder="0" allowFullScreen></iframe>
						</div>
					</div>
					<div className="about-wrapper">
						<img src="/wp-content/themes/maha2015.v2.2/dist/images/themahastory.svg" />
						<p>Our story really begins with the story of Omaha. This is an under-the-radar kind of place, a hard-working river town in the American heartland. As the great poet Carl Sandburg once described it: "Omaha, the roughneck, feeds armies, eats and swears from a dirty face. Omaha works to get the world a breakfast." Home to a blossoming creative community, including a nationally-recognized independent music scene, Omaha has also been working hard to bring the world a generous helping of art, ideas, and innovation. In 2008, a group of young professionals came together with a collective realization: Omaha needs its own music festival. Maha was born and, we're very pleased to say, the community has rallied behind it. Showcasing emerging local artists and pulling in big national acts, the nonprofit Maha Music Festival continues to grow steadily each year. Basking in the late summer glow, Maha has drawn music fans from 32 states and counting. Our vision is to push beyond the parameters of a traditional music festival and continue to attract fans from all over the country, while celebrating the local community–the people and what they do, what they create and build, and the causes they champion.</p>
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
