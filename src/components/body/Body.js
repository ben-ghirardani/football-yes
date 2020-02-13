import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import teamNameEditor from '../team_name_editor/TeamNameEditor.js'
import './Body.css';

// sits inside Table with TableHeader
// accepts a single row of table data. 
class Body extends Component {

  constructor(props) {
    super(props);
    this.goToFixtures = this.goToFixtures.bind(this);
  }

  goToFixtures () {
    let team = this.props.team
    let id = this.props.id
    let matches = localStorage.getItem("matches");
    let parsedMatches = JSON.parse(matches)
    this.props.updateCurrentTeam(team, id);
    this.props.updateTeamMatches(this.props.getTeamStoredMatches(id, parsedMatches))
  }

  render() {
        return(
          <tr>
            <td className="left-table">{this.props.position}</td>
            <td className="td"> <Link to="/fixtures" onClick={() => this.goToFixtures()}>{teamNameEditor(this.props.team)}</Link> </td>
            <td className="td">{this.props.played}</td>
            <td className="td">{this.props.won}</td>
            <td className="td">{this.props.draw}</td>
            <td className="td">{this.props.lost}</td>
            <td className="td">{this.props.gf}</td>
            <td className="td">{this.props.ga}</td>
            <td className="td">{this.props.gd}</td>
            <td className="right-table">{this.props.points}</td>
          </tr> 
        )
    }

}

export default Body;