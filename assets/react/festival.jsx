/**
 * @jsx React.DOM
 */

var React = require('react'),
    ScrollMagic = require('scrollmagic'),
    request = require('superagent');

var Festival = React.createClass({
	getInitialState: function() {
		return {windowWidth: window.innerWidth};
	},
	toggleFestival: function(){
		this.props.festival();
	},

	handleResize: function(e) {
		this.setState({windowWidth: window.innerWidth});
	},

	componentDidMount: function(){
		window.addEventListener('resize', this.handleResize);

	    var self = this;
	    var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
			var controller = new ScrollMagic.Controller({ globalSceneOptions: {triggerHook: 0}});
	    var top = new ScrollMagic.Scene({
	                triggerElement: "#top",
	                offset: 1
	            })
	            .setClassToggle("body", "scrolled")
	            .addTo(controller);

	    controller.scrollTo(function (newpos) {
	      if(self.state.windowWidth > 480){
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 105, autoKill: false }, ease:Power1.easeOut});
	      } else {
	        TweenMax.to(window, 1.5, {scrollTo: {y: newpos - 50, autoKill: false }, ease:Power1.easeOut});
	      }
	    });

	    $(document).on("click", "a[href^='#']", function (e) {
	      console.log("Festival Click");

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
	  	var self = this;
		    return (
		    	<div className="tickets_container">
		    		<span className="close_band" onClick={self.toggleFestival}>×</span>
					<div className="festival_wrap">
						<a href="#about" className="scroll-link about">
							<img src="/wp-content/themes/maha2015.v2.2/dist/images/story.svg" />
						</a>
						<a href="#venue" className="scroll-link venue">
							<img src="/wp-content/themes/maha2015.v2.2/dist/images/venue_white.svg" />
						</a>
						<a href="#fyi" className="scroll-link fyi">
							<img src="/wp-content/themes/maha2015.v2.2/assets/images/fyi.svg" />
						</a>
						<a href="#sponsors" className="scroll-link sponsors">
							<img src="/wp-content/themes/maha2015.v2.2/svg/sponsors.svg" />
						</a>
            <a href="#community-village" className="scroll-link community-village">
							<img src="/wp-content/themes/maha2015.v2.2/dist/images/communityvillage-white.png" />
						</a>
					</div>
				</div>
		    )
    }
});

module.exports = Festival;
