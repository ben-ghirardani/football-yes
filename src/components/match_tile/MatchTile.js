import React, { Component } from 'react';
import './MatchTile.css';

// does this need to be a class? Refactor to functional component.

export default class MatchTile extends Component {

  render() {
    return(
      <div className="match-tile">

        <div className="date">
          {this.props.date}
        </div>

        <div className="home-team"> 
          {this.props.homeTeam+" ("+this.props.homeHalfTimeScore+") "+this.props.homeFullTimeScore}
        </div>

        <div className="away-team"> 
          {this.props.awayTeam+" ("+this.props.awayHalfTimeScore+") "+this.props.awayFullTimeScore}
        </div>

      </div>
    )
  }

} 