/**
 * @jsx React.DOM
 */

var React = require('react'),
		CVList = require('./cv_list.jsx');

module.exports = React.createClass({
	getInitialState: function(){
		return { faq: false }
	},

	toggleFaq: function(){
		this.setState({ faq: !this.state.faq })
	},

	render: function() {
		var self = this;
		var faq = self.state.faq;
		var faq_class = "";
		if( faq ) {
			var faq_class = " opened";
		}

		return (
			<div className="community-section" id="community-village">
				<div className="community-header">
					<div className="content-wrapper" >
						<div className="content-inner">
							<img className="community-village_centris" src="/wp-content/themes/maha2015.v2.2/dist/images/centris_presents.png" />
							<img className="community-village_image" src="/wp-content/themes/maha2015.v2.2/dist/images/communityvillage-white.png" />
							<p>Now in its fourth year, the Community Village has become a fundamental part of Maha Music Festival. Arts, crafts, and rock 'n roll—it's like it was meant to be. Discover a new interest, express yourself through song and dance, and leave your mark on one of the collective art projects. It's all brought to you by this dedicated, imaginative group of Omaha non-profits. Get to know the movers and shakers in your neighborhood.</p>
						</div>
					</div>
				</div>
				<div className="content-wrapper" >
					<div className="content-inner">
						<div className="cv-content">
							<CVList />
						</div>
					</div>
				</div>
			</div>
		)
	}
});
