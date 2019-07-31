import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './body.css'

// sits inside Table with Header
// accepts a single row of table data. 
export default class Body extends Component {

  constructor(props) {
    super(props);
    this.goToFixtures = this.goToFixtures.bind(this);
  }

  // needs to populate state in App with team identifier, when rendering Matches use this identifier to pull fixtures for that team
  goToFixtures () {
    let team = this.props.team
    console.log(team)
  }

  render() {
        return(
            <tr>
                <td>{this.props.position}</td>
                <td>{this.props.team}</td>
                <td>{this.props.played}</td>
                <td>{this.props.won}</td>
                <td>{this.props.drawn}</td>
                <td>{this.props.lost}</td>
                <td>{this.props.gf}</td>
                <td>{this.props.ga}</td>
                <td>{this.props.gd}</td>
                <td>{this.props.points}</td>

                {/* create an onClick for below. Takes team details, populates state, opens fixtures list with that team's details */}
                <td
                  onClick={this.goToFixtures}
                >go</td>
            </tr>
        )
    }

}

                // <Link to="/matches/"><td>Go</td></Link>