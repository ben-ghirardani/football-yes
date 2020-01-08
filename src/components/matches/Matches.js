import React, {Component} from 'react';
import MatchTile from '../match_tile/MatchTile.js'
import utcDateConvert from '../utcDateConvert/utcDateConvert.js';
import './Matches.css';

// change name to fixtures? to match routing.

export default class Matches extends Component {

  // use localStorage for teamMatches data to allow refresh on fixtures page
  teamMatches = this.props.accessStoredTeamMatches()

  render () {
    return (
      <div className="matches">
        <h1>Fixtures: {this.props.currentTeam}</h1>
        {
          this.teamMatches.map(function(match){
            return <MatchTile
                      key={match.id}
                      date={utcDateConvert(match.utcDate)}
                      homeTeam={match.homeTeam.name}
                      homeHalfTimeScore={match.score.halfTime.homeTeam}
                      homeFullTimeScore={match.score.fullTime.homeTeam}
                      awayTeam={match.awayTeam.name}
                      awayHalfTimeScore={match.score.halfTime.awayTeam}
                      awayFullTimeScore={match.score.fullTime.awayTeam}
                    />
          })
        }
      </div>
    ) 
  }

}