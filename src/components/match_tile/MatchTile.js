import React, { Component } from 'react';
import teamNameEditor from '../team_name_editor/TeamNameEditor.js'
import './MatchTile.css';

export default class MatchTile extends Component {

  constructor(props) {
    super(props);
    this.scoreCheck = this.scoreCheck.bind(this);
  }

  scoreCheck(score) {
    if(score === null) {
      return ""
    } else {
      return score
    }
  }

  render() {
    return(
      <div className="match-tile">

        <div className="date">
          {this.props.date}
        </div>

        <br></br>

        <div className="teams-and-scores"> 
          {
            teamNameEditor(this.props.homeTeam)+" ("+this.scoreCheck(this.props.homeHalfTimeScore)+") "+this.scoreCheck(this.props.homeFullTimeScore) +
            " - " +
            teamNameEditor(this.props.awayTeam)+" ("+this.scoreCheck(this.props.awayHalfTimeScore)+") "+this.scoreCheck(this.props.awayFullTimeScore)
          }
        </div>

      </div>
    )
  }

}