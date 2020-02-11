import React, { Component } from 'react';
import Table from '../table/Table.js'
import Matches from '../matches/Matches.js';
import { Route} from 'react-router-dom';
import './CentreDiv.css'

// does CentreDiv need to be its own component? Can this styling be part of main page?

export default class CentreDiv extends Component {

  render() {
    return(
      <div className="centre-div">
        {/* <Router> */}
          <>
            <Route path="/" exact render=
              {() => 
                <Table
                  standings={this.props.standings}
                  updateCurrentTeam={this.props.updateCurrentTeam} 
                  getTeamStoredMatches={this.props.getTeamStoredMatches}
                  currentTeam={this.props.currentTeam}
                  currentTeamID={this.props.currentTeamID}
                  matches={this.props.matches}
                  updateTeamMatches={this.props.updateTeamMatches}
                />
              }
            />
            <Route path="/fixtures/" render=
              {() => 
                <Matches
                  currentTeam={this.props.currentTeam} 
                  currentTeamID={this.props.currentTeamID}
                  matches={this.props.matches}
                  accessStoredTeamMatches={this.props.accessStoredTeamMatches}
                />
              }
            />
          </>
        {/* </Router> */}
      </div>
    )
  }

}