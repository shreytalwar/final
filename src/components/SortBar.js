var React = require('react');
var SortBarSelection= require('./SortBarSelection');

var SortBar = React.createClass({
  viewChanged: function(view) {
    this.props.viewChanged(view)
  },
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <SortBarSelection view="latest" title="Latest Releases" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <SortBarSelection view="alpha" title="A-Z" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <SortBarSelection view="map" title="Where to Watch" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <li className="nav-text pull-right">{this.props.movieCount} movies</li>
        </ul>
        </div>
      </div>
    )
  }
})

module.exports = SortBar;
