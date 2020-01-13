import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import teamNameEditor from '../team_name_editor/TeamNameEditor.js'
import './Body.css';

// sits inside Table with TableHeader
// accepts a single row of table data. 
class Body extends Component {

  constructor(props) {
    super(props);
    this.goToFixtures = this.goToFixtures.bind(this);
    // this.teamNameEditor = this.teamNameEditor.bind(this);
  }

  // using react-router-dom, import withRouter, wrap the export of class in withRouter, 
  // can then call .push on the history object
  // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4

  // *** applies to v5? ***

  goToFixtures () {
    let team = this.props.team
    let id = this.props.id
    let matches = localStorage.getItem("matches");
    let parsedMatches = JSON.parse(matches)
    this.props.updateCurrentTeam(team, id);
    this.props.updateTeamMatches(this.props.getTeamStoredMatches(id, parsedMatches))
    this.props.history.push("/fixtures");
  }

  render() {
        return(
          <tr
            onClick={this.goToFixtures}
          >
            <td className="left-table">{this.props.position}</td>
            <td>{teamNameEditor(this.props.team)}</td>
            <td>{this.props.played}</td>
            <td>{this.props.won}</td>
            <td>{this.props.draw}</td>
            <td>{this.props.lost}</td>
            <td>{this.props.gf}</td>
            <td>{this.props.ga}</td>
            <td>{this.props.gd}</td>
            <td className="right-table">{this.props.points}</td>
          </tr> 
        )
    }

}

export default withRouter(Body);