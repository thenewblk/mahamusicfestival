/**
 * @jsx React.DOM
 */

var React = require('react'),
  request = require('superagent');

var Router = require('react-router');
var Navigation = require('react-router').Navigation;


module.exports = React.createClass({
  getInitialState: function(){
    return { food: [], drink: [], more: [] };
  },


  componentWillMount: function(){
    var self = this;
    self.loadFood();
    self.loadDrink();
    self.loadMore();
  },

  loadFood: function(){
    var self = this;
      request
        .get('http://www.mahamusicfestival.com/wp-json/posts')
        .query('type[]=food_vendor&filter[posts_per_page]=-1')
        .end(function(err, res) {
      if (res.ok) {
        var food = res.body;

        self.setState({food: food});

      } else {
        console.log('Oh no! error ' + res.text);
      }
        }.bind(self));
  },

  loadDrink: function(){
    var self = this;
      request
        .get('http://www.mahamusicfestival.com/wp-json/posts')
        .query('type[]=drink_vendor&filter[posts_per_page]=-1')
        .end(function(err, res) {
      if (res.ok) {
        var drink = res.body;

        self.setState({drink: drink});

      } else {
        console.log('Oh no! error ' + res.text);
      }
        }.bind(self));
  },

  loadMore: function(){
    var self = this;
      request
        .get('http://www.mahamusicfestival.com/wp-json/posts')
        .query('type[]=more_vendor&filter[posts_per_page]=-1')
        .end(function(err, res) {
      if (res.ok) {
        var more = res.body;

        self.setState({more: more});

      } else {
        console.log('Oh no! error ' + res.text);
      }
        }.bind(self));
  },

	render: function() {
		var self = this;
    var food = self.state.food.map(function(object){
      return <a href={object.meta.link}><h4 className="vendor_link" dangerouslySetInnerHTML={{__html: object.title}}></h4></a>
    });

    var drink = self.state.drink.map(function(object){
      return <a href={object.meta.link}><h4 className="vendor_link" dangerouslySetInnerHTML={{__html: object.title}}></h4></a>
    });

    var more = self.state.more.map(function(object){
      return <a href={object.meta.link}><h4 className="vendor_link" dangerouslySetInnerHTML={{__html: object.title}}></h4></a>
    });

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
                <div className="vendors">
                  <div className="vendor_list">
                    <h4 className="vendor_title">Food</h4>
                    {food}
                  </div>
                  <div className="vendor_list">
                    <h4 className="vendor_title">Drink</h4>
                    {drink}
                  </div>
                  <div className="vendor_list">
                    <h4 className="vendor_title">More</h4>
                    {more}
                  </div>
                </div>
  						</div>
  					</div>
  				</div>
  			</div>
  		)
	}
});
