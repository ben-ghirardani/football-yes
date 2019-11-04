import React, {Component} from 'react';
import MatchTile from '../match_tile/MatchTile.js'
import utcDateConvert from '../utcDateConvert/utcDateConvert.js';

export default class Matches extends Component {

  render () {
    return (
      <>
        {
          this.props.teamMatches.map(function(match){
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
      </>
    ) 
  }

}