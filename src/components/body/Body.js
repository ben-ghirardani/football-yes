import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import teamNameEditor from '../team_name_editor/TeamNameEditor.js'
import './Body.css';

// sits inside Table with TableHeader
// accepts a single row of table data. 
class Body extends Component {

  constructor(props) {
    super(props);
    this.prepFixtureData = this.prepFixtureData.bind(this);
  }

  prepFixtureData () {
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
            <td className="position">{this.props.position}</td>
            <td className="link-to-fixtures"><Link to="/fixtures" onClick={() => this.prepFixtureData()}>{teamNameEditor(this.props.team)}</Link></td>
            <td className="played">{this.props.played}</td>
            <td className="won">{this.props.won}</td>
            <td className="draw">{this.props.draw}</td>
            <td className="lost">{this.props.lost}</td>
            <td className="gf">{this.props.gf}</td>
            <td className="ga">{this.props.ga}</td>
            <td className="gd">{this.props.gd}</td>
            <td className="points">{this.props.points}</td>
          </tr> 
        )
    }

}

export default Body;