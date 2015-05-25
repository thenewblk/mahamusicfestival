/**
 * @jsx React.DOM
 */

var React = require('react'),
	util = require('util'),
    request = require('superagent'),
	Instafeed = require('../scripts/instafeed.js');
 
var InstagramFeed = React.createClass({  
	getInitialState: function(){
		return {feed:{}, blocked: [], instagrams: []}
	},
	componentDidMount: function(){
		this.loadBlockedUsers();
	},

	loadBlockedUsers: function(){
	    var self = this;
	      request
	        .get('http://www.mahamusicfestival.com/wp-json/posts')
	        .query('type[]=blocked_instagram&filter[posts_per_page]=-1')
	        .end(function(err, res) {
		      if (res.ok) {
		        var res = res.body;
		        console.log(res);
		        self.setState({blocked: res});
		        var blockedUsernames = self.state.blocked.map(function(object){
		        	return object.title;
		        });

		        self.getInstagrams(blockedUsernames);

		      } else {
		        console.log('Oh no! error ' + res.text);
		      }
		        }.bind(self));  
	},

	getInstagrams: function(blockedUsernames){
		var self = this;
	    var feed = new Instafeed({
	        get: 'tagged',
	        tagName: 'maha2015',
	        limit: 50,
	        sortBy: 'most-recent',
	        resolution: 'low_resolution',
	        clientId: '433456dd30b845a6a936e70ea82c29da',
	        template: 	'<a class="instagram" href="{{link}}" target="_blank"><span class="top" style="background-image: url({{image}})"></span><span class="bottom" style="background-image: url({{image}})"></span></a>',
	        success: function(object) {
        		// self.setState({ feed: object, instagrams: object.data });
        	},
        	filter: function(image){

				for (var i=0; i<blockedUsernames.length; i++) {
					if (image.user.username === blockedUsernames[i]) {
						return false;
					}
				}

				return true;
	        },

	    });

	    feed.run();
	},

	render: function() {

		var self = this;

		// var instagrams = self.state.instagrams.map(function(instagram){
		// 	console.log('instagram.user.username: ' + instagram.user.username);
		// 	var bkd_img = {
		// 		backgroundImage: "url('" + instagram.images.low_resolution.url + "')"
		// 	}; 
		// 	return 	<div className="instagram">
		// 				<span className="top" style={bkd_img}></span>
		// 				<span className="bottom" style={bkd_img}></span>
		// 			</div>
		// });
 
		return (
			<div className="content-wrapper instagram-section">
				<div className="instagrams" id="instafeed">
				</div>
				<div className="maha-inner">
					<img className="hashtag" src="/wp-content/themes/maha2015.v2.2/dist/images/hashtag.svg" />
					<img className="instagram-icon" src="/wp-content/themes/maha2015.v2.2/dist/images/instagram-06.svg" />
				</div>
				<span className="maha-border left"></span>
				<span className="maha-border right"></span>
			</div>
		)
	}
});


module.exports = InstagramFeed;