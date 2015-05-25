/**
 * @jsx React.DOM
 */

var React = require('react');

var TopSection = React.createClass({  
	buyTickets: function(){
		this.props.open_menu('tickets');
	},
	render: function() {


		return (
			<div className="content-wrapper top-section" id="top">
	    		<div className="video-container">
					<video id="video-background" className="video-wrap" poster="/wp-content/themes/maha2015.v2.2/dist/images/video.png" autoPlay muted loop >
						<source src="/wp-content/themes/maha2015.v2.2/video/video_shorter.mp4" type="video/mp4" />
						<source src="/wp-content/themes/maha2015.v2.2/video/video_shorter.webm" type="video/webm" />
					</video>
					<div className="video-overlay"></div>
				</div>
				<div className="content-inner">
					<div className="schnakel_logo_container">
						<div className="schnakel_logo_line"></div>
						<div className="schnakel_logo">
							<img className="schnakel_logo_image" src="/wp-content/themes/maha2015.v2.2/dist/images/schnakel1.png" />
							<span className="schnakel_presents">presents</span>
						</div>
						<div className="schnakel_logo_line"></div>
					</div>
					<img className="top-tape" src="/wp-content/themes/maha2015.v2.2/dist/images/top-tape.png" />
					<span className="top ticket button" onClick={this.buyTickets} >
						<img src="/wp-content/themes/maha2015.v2.2/dist/images/buytickets.svg" />
						<img src="/wp-content/themes/maha2015.v2.2/dist/images/underline_2.svg" />
					</span>
				</div>
			</div>
		)
	}
});


module.exports = TopSection;