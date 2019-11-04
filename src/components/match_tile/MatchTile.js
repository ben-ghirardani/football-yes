import React, { Component } from 'react';

// does this need to be a class? Refactor to functional component.

export default class MatchTile extends Component {

  render() {
    return(
      <div className="match-tile">
        <div className="date">
          {this.props.date}
        </div>
        <div className="home-team">
          {this.props.homeTeam}
        </div>
        <div className="home-half-time-score">
          {this.props.homeHalfTimeScore}
        </div>
        <div className="home-full-time-score">
          {this.props.homeFullTimeScore}
        </div>
        <div className="away-team">
          {this.props.awayTeam}
        </div>
        <div className="away-half-time-score">
          {this.props.awayHalfTimeScore}
        </div>
        <div className="away-full-time-score">
          {this.props.homeFullTimeScore}
        </div>
      </div>
    )
  }

} 