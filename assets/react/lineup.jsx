/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var	Band = require('./band.jsx');

var Lineup = React.createClass({
	getInitialState: function(){
		return { bands: [] };
	},
	openBand: function(clicked_band) {
		console.log("clicked_band: " + clicked_band);
		var current_band = this.state.bands.filter(function(band){
			return band.title == clicked_band;
		});
		console.log("current_band: " + current_band[0]);
		this.setState({current_band: current_band[0]});
	}, 

	closeBand: function(){
		this.setState({current_band: null});
	},

	toggleLineup: function(){
		this.props.lineup();
	},
	
	
	componentWillMount: function(){
		this.loadBands();
	},
	
	loadBands: function(){
		var self = this;
	    request
	      .get('/wp-json/posts')
	      .query({ type: 'band' })
	      .end(function(err, res) {
			if (res.ok) {
				var bands = res.body;

				self.setState({bands: bands});

			} else {
				console.log('Oh no! error ' + res.text);
			}
	      }.bind(self));  
	},


  render: function() {
  	var self = this;
	if (self.state.current_band) {
		var current_band = self.state.current_band;
		console.log("current_band: " + current_band);
		return (
			<div className="top_container">
				<span className="close_band" onClick={self.closeBand}>close</span>
		  		<Band band={current_band} />
	  		</div>
  		)
	} else {
	    return (
	    	<div className="top_container">
	    		<span className="close_lineup" onClick={self.toggleLineup}>close</span>
				<div className="lineup">
					<div className="left_lineup">
						<img onClick={self.openBand.bind(this, "Modest Mouse")} className="band modestmouse" src="/wp-content/themes/maha2015.v2.1/svg/modestmouse.svg" />
						<img className="band purityring" src="/wp-content/themes/maha2015.v2.1/svg/purityring.svg" />
						<img className="band always" src="/wp-content/themes/maha2015.v2.1/svg/alvvays.svg" />
						<img className="band thegoodlife" src="/wp-content/themes/maha2015.v2.1/svg/thegoodlife.svg" />
						<img className="band speedyortiz" src="/wp-content/themes/maha2015.v2.1/svg/speedyortiz.svg" />
						<img className="band allyounggirls" src="/wp-content/themes/maha2015.v2.1/svg/allyounggirls.svg" />
					</div>
					<div className="right_lineup">
						<img className="band atmosphere" src="/wp-content/themes/maha2015.v2.1/svg/atmosphere.svg" />
						<img className="band wavves" src="/wp-content/themes/maha2015.v2.1/svg/wavves.svg" />
						<img className="band thejayhawks" src="/wp-content/themes/maha2015.v2.1/svg/thejayhawks.svg" />
						<img className="band exhex" src="/wp-content/themes/maha2015.v2.1/svg/exhex.svg" />
						<img className="band freakabout" src="/wp-content/themes/maha2015.v2.1/svg/freakabout.svg" />
						<img className="band both" src="/wp-content/themes/maha2015.v2.1/svg/both.svg" />
					</div>
				</div>
			</div>
	    )
	}
  }
});

module.exports = Lineup; 