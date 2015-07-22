/**
 * @jsx React.DOM
 */

var React = require('react');

module.exports = React.createClass({
  componentWillMount: function(){
    // this.setState({ partner: this.props.partner });
  },
  render: function() {
  	var self = this;
    if (!self.props.partner) {
        return <div>Loading...</div>;
    } else {
      return (
        <div className="partner_card">
          <h2 className="partner_title" dangerouslySetInnerHTML={{__html: self.props.partner.title}}></h2>
        	<div className="partner_content">
      			{ self.props.partner.meta.who_we_are ?
              <div className="who_we_are">
                <h3>Who We Are</h3>
                <p dangerouslySetInnerHTML={{__html: self.props.partner.meta.who_we_are}}></p>
              </div>
            : null }
      			{ self.props.partner.meta.what_were_bringing_to_maha ?
              <div className="what_were_bringing_to_maha">
                <h3>Wha We're Bringing to Maha</h3>
                <p dangerouslySetInnerHTML={{__html: self.props.partner.meta.what_were_bringing_to_maha}}></p>
              </div>
            : null }
        	</div>
        </div>
      )
    }
  }
});
