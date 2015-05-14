/**
 * @jsx React.DOM
 */

var React = require('react'),
    request = require('superagent');

var Band = React.createClass({
  componentWillMount: function(){
    console.log("Band: " + this.props.band );
    this.setState({ band: this.props.band });
  },
  render: function() {
  	var self = this;
    if (!this.state.band) {
        return <div>Loading...</div>;
    } else {
      var topImage = {
        backgroundImage: 'url(' + self.state.band.meta.background_image.url + ')',
      };

      return (
        <div className="band_card">
        	<div className="band_top" style={topImage}>
        		<img className="band_name" src={self.state.band.meta.band_image.url} />
        	</div>
        	<div className="band_content">
        		<div className="info">
        			<p>{self.state.band.meta.genre}</p>
        			<p>{self.state.band.meta.record_label}</p>
        			<p>{self.state.band.meta.hometown}</p>
        			<p className="band_link"><a href={self.state.band.meta.url_link}>{self.state.band.meta.url_title}</a></p>
        		</div>
        		<div className="video">
              <div className="video-wrapper">
                <iframe src={self.state.band.meta.video_link} frameBorder="0" allowfullscreen></iframe>
              </div>
        		</div>
        		<div className="news">
        			<p>news</p>
        		</div>
        	</div>
        </div>
      )
    }
  }
});

module.exports = Band; 