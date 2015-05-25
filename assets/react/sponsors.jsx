var React = require('react'),
    request = require('superagent');

var Sponsors = React.createClass({  
	getInitialState: function(){
		return { sponsors: [] };
	},

	componentWillMount: function(){
		this.loadSponsors();
	},

	loadSponsors: function(){
	    var self = this;
	      request
	        .get('http://www.mahamusicfestival.com/wp-json/posts')
	        .query('type[]=sponsor&filter[posts_per_page]=-1')
	        .end(function(err, res) {
	      if (res.ok) {
	        var sponsors = res.body;
	        console.log(sponsors);
	        self.setState({sponsors: sponsors});

	      } else {
	        console.log('Oh no! error ' + res.text);
	      }
	        }.bind(self));  
	  },

	render: function() {
		var self = this;

		var sponsors = self.state.sponsors.map(function(object){
			return <img className="spimage" src={object.meta.image.url} />
		});

		var tier = [];
		for (var i=1; i < 8; i++) {
			tier[i] = self.state.sponsors.filter(function(object){
				return object.meta.tier == i.toString();
			});
		}

		var sponsors = [];
		for (var i=1; i < 8; i++) {
			sponsors[i] = tier[i].map(function(object){
				return <a href={object.meta.link} target="_blank"><img className="spimage" src={object.meta.image.url} /></a>
			});
		}

		return (
			<div className="content-wrapper sponsor-section" id="sponsors">
				<div className="content-inner">
					<div className="sponsors_list">
						<img className="sponsors_title" src="/wp-content/themes/maha2015.v2.2/dist/images/sponsors.svg" />
							<p className="sponsors_copy">We're grateful to our partners who make Maha possible. To join this mix and support the party that makes Omaha proud, contact us at <a href="mailto:sponsor@mahamusicfestival.com">sponsor@mahamusicfestival.com</a>. </p>
						<div className="sponsors_tier">{ sponsors[1] }</div>
						<div className="sponsors_tier">{ sponsors[2] }</div>
						<div className="sponsors_tier">{ sponsors[3] }</div>
						<div className="sponsors_tier">{ sponsors[4] }</div>
						<div className="sponsors_tier">{ sponsors[5] }</div>
						<div className="sponsors_tier media-title">Production & Media</div>
						<div className="sponsors_tier">{ sponsors[6] }</div>
						<div className="sponsors_tier">{ sponsors[7] }</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Sponsors;