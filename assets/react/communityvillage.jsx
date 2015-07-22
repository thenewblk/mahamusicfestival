/**
 * @jsx React.DOM
 */

var React = require('react');

var CommunityVillage = React.createClass({
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
			<div className="content-wrapper community-section" id="community-village">
				<div className="content-inner">
					<img className="community-village_image" src="/wp-content/themes/maha2015.v2.2/dist/images/communityvillage-orange.png" />
					<div className="cv-content">
						<p className="copy">Is your local non-profit organization looking for a fun way to engage with the community?  Do you have a creative idea for an interactive activity that you’d like to showcase at Maha?  Does your non-profit have an interest in providing a community service to the Maha attendee demographic?  Apply to be part of the Maha Music Festival Community Village!</p>
						<h3 className="cv-bold-center">NOW IN ITS FOURTH YEAR,</h3>
						<h3 className="cv-bold-center">THE COMMUNITY VILLAGE HAS BECOME AN</h3>
						<h3 className="cv-bold-center">IMPORTANT PART OF THE MAHA MUSIC FESTIVAL.</h3>
						<div className="cv-clearfix">
							<div className="cv-big-left">
								<h3>THINK BIG.</h3>
								<h3>THINK MESSY.</h3>
								<h3>THINK OUSIDE</h3>
								<h3>THE BOX.*</h3>
							</div>
							<div className="cv-right-copy">
								<p>Area non-profits have enhanced the Maha experience with engaging and interactive arts and crafts activities for Maha fans to enjoy.  And, the opportunity for each chosen Community Village participant to interact with the Maha audience has helped them spread their missions in a fun and unique way.</p>
								<p>New this year, in addition to traditional Community Village booth applications, we are expanding our scope to include applications from non-profits who have an idea for a valuable community service they’d like to provide for Maha fans.  These non-profits will not have tent space in Community Village, but a limited number of organizations will be selected and allowed to interact with Maha attendees.</p>
								<p>Space in Community Village is limited, so application is a competitive process - only the most creative ideas will be chosen.</p>
							</div>
						</div>
						<p className="cv-small">*Please don’t think about open flames, live animals, selling promotional items, raising money, or serving alcohol as part of your activity - those ideas are prohibited by Maha, Stinson Park, and law enforcement officials. </p>
						<div className="cv-buttons">
							<a href="http://www.mahamusicfestival.com/community-village-application/ " className="cv-button">APPLY FOR  <br />COMMUNITY VILLAGE BOOTH SPACE</a>
							<a href="http://www.mahamusicfestival.com/community-partners-application/" className="cv-button">APPLY TO PROVIDE <br />A COMMUNITY SERVICE (NO BOOTH)</a>
						</div>
						<p className="cv-small">- All Community Village applicants must be a designated 501(c)3 not for profit organization. No exceptions.  </p>
						<p className="cv-small">- The application window for Community Village will be open from June 1st through midnight on June 26th. Applications received after midnight on June 26th will not be considered.</p>
						<p className="cv-small">- Chosen organizations will be notified by the first week of July.  Maha is on Saturday, August 15th.  </p>
						<span onClick={self.toggleFaq} className={"cv-faq-button cv-button"+faq_class}> COMMUNITY VILLAGE FAQS: </span>

						<div className={"cv-faq-content"+faq_class}>
							<div className="cv-faq-left">
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">When does the application process to be part of Community Village begin and end?</h3>
									<p className="cv-faq-copy">The application window will open on June 1st, 2015 and remain open until midnight on June 26th.  Applications received after midnight on June 26th will not be considered.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">What is the difference between a Community Village booth participant application and a non-profit application to provide a community service at Maha?</h3>
									<p className="cv-faq-copy">Community Village applicants will be given complimentary tent space to provide a fun, interactive activity to Maha fans. Non-profits wishing to provide a community service at Maha will not be given tent space, but will be allowed to be on the premises to interact with Maha fans in order to provide their approved community service.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">Does it cost money to be part of Community Village?</h3>
									<p className="cv-faq-copy">No, thanks to a generous donation from Centris Federal Credit Union, there is no cost to the non-profits to have a booth at Maha.  Organizations are individually responsible for the cost of materials needed for their activities.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">What kinds of interactive activities are most popular with Maha fans?:</h3>
									<p className="cv-faq-copy">The booths that have the most traffic tend to be those that provide the fan with the opportunity for creative expression.  Past activities have included decorating a t-shirt, making a bag or jewelry.  Fans have also enjoyed participating in a Maha fan collective art project, taking photos, interactive social media opportunities, dancing, playing dress-up, etc.  Anything hands-on is usually most popular.  Your activity does not have to directly relate to your mission- it just has to be fun so you can draw the Maha fans in to your booth to tell them about your mission!</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">How many complimentary tickets will I receive for my organization to staff our booth?</h3>
									<p className="cv-faq-copy">Organizations will receive four complimentary tickets for participation in CV.  Additional tickets can be purchased at a discounted rate.  Each person staffing your booth will need to have their own ticket, tickets are non-transferrable.</p>
								</div> 
							</div>
							<div className="cv-faq-right">
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">What activities are allowed in Community Village?</h3>
									<p className="cv-faq-copy">The sky is the limit!  However, we cannot allow open flames, live animals, selling of your promotional items, raising money for your non-profit, or providing alcohol as part of your activity.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">I’ve heard some non-profits received a donation from Maha following the event, is this true?:</h3>
									<p className="cv-faq-copy">We hope so!  Maha is also a 501 (c) 3 not for profit organization that is only possible because of the generous support of our donors and ticket-buyers.  Maha’s goal isn’t to make money, it is to provide a fun and engaging experience for lovers of music, arts, and community.  If we are fortunate to have enough money left after all expenses have been paid, we will make a donation to our fellow non-profits who participated in the festival.  (the more tickets we sell, the more money we’ll have left - so, please help us promote Maha through your available channels!)</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">What are the hours of Community Village?</h3>
									<p className="cv-faq-copy">Community Village opens promptly at noon and will stay open until Maha officials release the organizations - usually around dusk (weather permitting).</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">When can my non-profit set up our booth?</h3>
									<p className="cv-faq-copy">Community Village booths can be set up any time after 10 a.m. on the morning of Maha. Set up must be complete and your activity ready for business by noon.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">Will tables and chairs be provided in our booth?</h3>
									<p className="cv-faq-copy">Yes, each organization will receive one table and four chairs. Requests for additional tables and chairs will be accommodated based on availability.</p>
								</div>
								<div className="cv-faq-item">
									<h3 className="cv-faq-title">I have a question that isn’t answered here:</h3>
									<p className="cv-faq-copy">Please email your question to <a href="mailto:community@mahamusicfestival.com">community@mahamusicfestival.com</a></p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
});

module.exports = CommunityVillage;
