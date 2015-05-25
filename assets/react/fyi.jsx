/**
 * @jsx React.DOM
 */

var React = require('react');

var FYI = React.createClass({  

	render: function() {


		return (
			<div className="content-wrapper fyi-section" id="fyi">
				<div className="content-inner">
					<div className="fyi-content-title">
						<img className="fyi_left" src="/wp-content/themes/maha2015.v2.2/dist/images/doodle-left.svg" />
						<img className="fyi_image" src="/wp-content/themes/maha2015.v2.2/dist/images/fyi.svg" />
						<img className="fyi_right" src="/wp-content/themes/maha2015.v2.2/dist/images/doodle-right.svg" />
					</div>
					<div className="fyi-content">
						<div className="fyi-left">
							<div className="fyi-item">
								<h3 className="fyi-title">WHAT IS THE MAHA MUSIC FESTIVAL?</h3>
								<p className="fyi-copy">Maha is a day-long nonprofit music festival on Saturday, August 15, 2015, bringing together national, regional and local indie and rock artists for a day of food, community and, of course, music.</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">WHERE CAN I PARK?</h3>
								<p className="fyi-copy">Aksarben Village has reserved FREE a parking garage and large parking lot for the exclusive use of Maha attendees so there will be plenty of space for everyone!</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">WHAT IS WEATHER LIKE IN MID-AUGUST?</h3>
								<p className="fyi-copy">The average high temperature in Omaha in August is 85 degrees with light humidity and light winds. We recommend you bring sun block, even if it’s a little overcast early in the day. Midwest weather is known for its quick shifts!</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">What if it rains?</h3>
								<p className="fyi-copy">Maha will continue rain or shine.  No refunds.</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">Can I bring my kids?</h3>
								<p className="fyi-copy">Yes, anyone with a ticket is welcome to join the fun. All ages are welcome and children ages 10 and under do not need a ticket as long as they are accompanied by a paying adult! Things might get a bit rowdy up front, and as a general rule, the area directly in front of the stage is rarely kid-friendly. However, there’s plenty of space for everyone in much calmer areas.</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">What can I bring?</h3>
								<p className="fyi-copy">Lawn chairs and blankets are allowed, tents are not. Sunscreen, sunglasses, hats and/or visors are suggested to let you enjoy the day without any sun-related discomfort. We reserve the right to inspect all bags, purses, backpacks, etc. before allowing entry to the Festival. And, no, couches are not allowed. Seriously.</p>
							</div>
						</div>
						<div className="fyi-right">
							<div className="fyi-item">
								<h3 className="fyi-title">Can I bring a cooler?</h3>
								<p className="fyi-copy">You can not. No outside food or drink is allowed…except for one factory-sealed water bottle. See below.</p>
							</div>
							<div className="fyi-item">
								<h3 className="fyi-title">Water Bottles</h3>
								<p className="fyi-copy">You may bring in one empty water bottle per person. We offer a water refill station in the park. When you arrive if you have one, sealed, packaged water bottle, that’s fine too. If it’s not sealed we ask you empty it before entering the park.</p>
							</div>							
							<div className="fyi-item">
								<h3 className="fyi-title">What food and drink will be available?</h3>
								<p className="fyi-copy">There will be a wide variety of local food & drink.</p>
							</div>							
							<div className="fyi-item">
								<h3 className="fyi-title">Will cameras or recorders be allowed?</h3>
								<p className="fyi-copy">Small or disposable cameras will be allowed. Professional cameras will NOT be allowed. Essentially, if it has a removable lens, it’s a no go. Video and audio recording are NOT allowed.</p>
							</div>							
							<div className="fyi-item">
								<h3 className="fyi-title">What about event security?</h3>
								<p className="fyi-copy">Event security will be located throughout the grounds for the entire duration of the event. If you have an emergency, find a staff person with a radio, go to an information or medical tent, or tell one of the security personnel.</p>
							</div>							
							<div className="fyi-item">
								<h3 className="fyi-title">I’m from out of town, where can I stay?</h3>
								<p className="fyi-copy">Omaha is a very friendly town. You can probably find someone willing to share a floor with you. If you’d prefer more private accommodations, Maha has negotiated “Maha Rates” with the Aksarben Marriott. It’s a short walk to the festival from here. <a target="_blank" href="http:/www.marriott.com/hotels/travel/omawt-courtyard-omaha-aksarben-village/">Marriott Web Page Here</a></p>
							</div>

							<img className="boombox" src="/wp-content/themes/maha2015.v2.2/assets/images/boombox.png" />
								

						</div>
					</div>
					
				</div>
			</div>
		)
	}
});

module.exports = FYI;