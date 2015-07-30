/**
 * @jsx React.DOM
 */

var React = require('react'),
  request = require('superagent');

var Router = require('react-router');
var Navigation = require('react-router').Navigation;


module.exports = React.createClass({
  getInitialState: function(){
    return { partners: [] };
  },


  componentWillMount: function(){
    var self = this;
    self.loadPartners();
  },

  loadPartners: function(){
    var self = this;
      request
        .get('http://www.mahamusicfestival.com/wp-json/posts')
        .query('type[]=food_partner&filter[posts_per_page]=-1')
        .end(function(err, res) {
      if (res.ok) {
        var partners = res.body;

        self.setState({partners: partners});

      } else {
        console.log('Oh no! error ' + res.text);
      }
        }.bind(self));
  },

	render: function() {
		var self = this;
    var partners = self.state.partners.map(function(object){
      return <a href={object.meta.link}><h4 className="cv_partner_link" dangerouslySetInnerHTML={{__html: object.title}}></h4></a>
    });
    if (partners.length) {
  		return (
  			<div className="community-section" id="food_vendors">
  				<div className="community-header food_vendor_header">
  					<div className="content-wrapper" >
  						<div className="content-inner">
  							<h1 className="food_vendor_title">FOOD, DRINK & MORE</h1>
  						</div>
  					</div>
  				</div>
  				<div className="content-wrapper" >
  					<div className="content-inner">
  						<div className="cv-content">
                <div className="cv_list">
                    {partners}
                </div>
  						</div>
  					</div>
  				</div>
  			</div>
  		)
    } else {
      return (null)
    }
	}
});
