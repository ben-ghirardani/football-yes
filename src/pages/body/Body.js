import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
// import teamNameEditor from '.../TeamNameEditor';
import './body.css'

// sits inside Table with Header
// accepts a single row of table data. 
export default class Body extends Component {

  constructor(props) {
    super(props);
    this.goToFixtures = this.goToFixtures.bind(this);
    this.teamNameEditor = this.teamNameEditor.bind(this);
  }

  // needs to populate state in App with team identifier, when rendering Matches use this identifier to pull fixtures for that team
  goToFixtures () {
    let team = this.props.team
    console.log(team)
  }

  teamNameEditor (name) {
    let firstEdit = name.replace("AFC ", "");
    let secondEdit = firstEdit.replace(" FC", "");
    return secondEdit;
  }

  render() {
        return(
            <tr 
              className="table-row"
              onClick={this.goToFixtures}
            >
                <td>{this.props.position}</td>
                <td>{this.teamNameEditor(this.props.team)}</td>
                <td>{this.props.played}</td>
                <td>{this.props.won}</td>
                <td>{this.props.drawn}</td>
                <td>{this.props.lost}</td>
                <td>{this.props.gf}</td>
                <td>{this.props.ga}</td>
                <td>{this.props.gd}</td>
                <td>{this.props.points}</td>
            </tr>
        )
    }

}

                // <Link to="/matches/"><td>Go</td></Link>