// does CentreDiv need to be its own component? Can this styling be part of main page?

import React, { Component } from 'react';
import Table from '../table/Table.js'
import Matches from '../matches/Matches.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './CentreDiv.css'

export default class OpaqueDiv extends Component {

  render() {
    return(
      <div className="centre-div">
        <Router>
          <>
            <Route path="/" exact render=
              {() => 
                <Table
                  standings={this.props.standings}
                  updateCurrentTeam={this.props.updateCurrentTeam} 
                />
              }
            />
            <Route path="/fixtures/" render=
              {() => 
                <Matches
                  currentTeam={this.props.currentTeam} 
                  matches={this.props.matches}
                />
              }
            />
          </>
        </Router>
      </div>
    )
  }

}