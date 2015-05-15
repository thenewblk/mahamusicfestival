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

      var news = self.props.news.map(function(object){
        return <div className="news_item">
                  <h3 className="news_title"><a href={object.meta.link_url} target="_blank">{object.title}</a></h3>
                  <h5 className="news_source">{object.meta.source_name}</h5> 
                </div>;

      })

      return (
        <div className="band_card">
        	<div className="band_top" style={topImage}>
        		<img className="band_name" src={self.state.band.meta.band_image.url} />
        	</div>
        	<div className="band_content">
        		<div className="info">
        			{ self.state.band.meta.genre ? <p>{self.state.band.meta.genre}</p> : null }
        			{ self.state.band.meta.record_label ? <p>{self.state.band.meta.record_label}</p> : null }
        			{ self.state.band.meta.hometown ? <p>{self.state.band.meta.hometown}</p> : null }
        			{ (self.state.band.meta.url_link && self.state.band.meta.url_title) ? <p className="band_link"><a href={self.state.band.meta.url_link}>{self.state.band.meta.url_title}</a></p> : null }
        		</div>
            { self.state.band.meta.video_link ?
          		<div className="video">
                <div className="video-wrapper">
                  <iframe src={self.state.band.meta.video_link} frameBorder="0" allowfullscreen></iframe>
                </div>
          		</div>
            : null }
            { news ?
          		<div className="news">
          			{news}
          		</div>
            : null }
        	</div>
        </div>
      )
    }
  }
});

module.exports = Band; 