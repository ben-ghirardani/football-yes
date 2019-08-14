import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './body.css'

// sits inside Table with Header
// accepts a single row of table data. 
class Body extends Component {

  constructor(props) {
    super(props);
    this.goToFixtures = this.goToFixtures.bind(this);
    this.teamNameEditor = this.teamNameEditor.bind(this);
  }

  // using react-router-dom, import withRouter, wrap the export of class in withRouter, 
  // can then call .push on the history object
  // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
  goToFixtures () {
    let team = this.props.team
    console.log(team)
    this.props.history.push("/matches");
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

export default withRouter(Body);