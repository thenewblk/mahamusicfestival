/**
 * @jsx React.DOM
 */

var React = require('react');

var Footer = React.createClass({
	getInitialState: function() {
		return {windowWidth: window.innerWidth};
	},

	handleResize: function(e) {
		this.setState({windowWidth: window.innerWidth});
	},

	componentDidMount: function(){
		window.addEventListener('resize', this.handleResize);

	    var self = this;
	    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
			var controller = new ScrollMagic.Controller({ globalSceneOptions: {triggerHook: 0}});

	    controller.scrollTo(function (newpos) {
	      if(self.state.windowWidth > 480){
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 105, autoKill: false }, ease:Power1.easeOut});
	      } else {
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 50, autoKill: false }, ease:Power1.easeOut});
	      }
	    });

	    $(document).on("click", "a[href^='#']", function (e) {

	      var id = $(this).attr("href");
	      if ($(id).length > 0) {
	        e.preventDefault();

	        // trigger scroll
	        controller.scrollTo(id);
	        if(self.state.windowWidth <= 480){
	          self.props.close_top();
	        }

	        // if supported by the browser we can even update the URL.
	        // if (window.history && window.history.pushState) {
	        //   history.pushState("", document.title, id);
	        // }
	      }
	    });
	},
	render: function() {

		return (
			<div className="content-wrapper footer-section" id="footer">
				<div className="content-inner">
					<div className="footer-content">
						<div className="footer-column">
							<h3 className="footer-title">Connect</h3>
							<p className="link_title">Want to Play at Maha 2016</p>
							<a href="mailto:play@mahamusicfestival.com" className="footer_link email" target="_blank"><strong>play</strong>@mahamusicfestival.com</a>
							<p className="link_title">Lost & Found</p>
							<a href="mailto:lost@mahamusicfestival.com" className="footer_link email" target="_blank"><strong>lost</strong>@mahamusicfestival.com</a>
							<p className="link_title">General</p>
							<a href="mailto:info@mahamusicfestival.com" className="footer_link email" target="_blank"><strong>info</strong>@mahamusicfestival.com</a>
						</div>
						<div className="footer-column">
							<h3 className="footer-title">Press</h3>
							<a href="http://www.mahamusicfestival.com/press/" className="footer_link" target="_blank">Request a Press <br />or Photography Pass</a>
							<a href="http://www.mahamusicfestival.com/wp-content/themes/maha2015.v2.2/dist/Maha.Media.Toolkit.2015.zip" className="footer_link" target="_blank">Media Toolkit</a>
						</div>
						<div className="footer-column">
							<h3 className="footer-title">Get Involved</h3>
							<a href="http://www.shiftboard.com/MahaFestival" className="footer_link" target="_blank">Volunteer</a>
							<a href="#sponsors" className="footer_link" target="_blank">Become a Sponsor</a>
						</div>
						<div className="footer-column">
							<h3 className="footer-title">Newsletter Signup</h3>

							<div id="mc_embed_signup">
								<form action="//mahamusicfestival.us2.list-manage.com/subscribe/post?u=6492ff0ff4eaa019a43eedf50&amp;id=5942231c0f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
							    <div id="mc_embed_signup_scroll">
										<input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="1234@mail.com" required />
							    	<div className="lefty"><input type="text" name="b_6492ff0ff4eaa019a43eedf50_5942231c0f" tabindex="-1" value="" /></div>
							    	<div className="clear"><input type="submit" value="Sign up" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
							    </div>
								</form>
							</div>

						</div>
						<p className="copyright">©2015 All Rights Reserved | YFC, Inc. d/b/a The Maha Music Festival, PO Box 24173, Omaha, NE 68124</p>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Footer;
