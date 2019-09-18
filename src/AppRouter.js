import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Table from './pages/table/Table';
import Matches from './pages/matches/Matches';

export default class AppRouter extends Component {

  render() {

    return (
      <Router>
        <>
          <Route path="/" exact render={() => <Table 
                                                standings={this.props.standings}
                                                updateCurrentTeam={this.props.updateCurrentTeam}  
                                              />} />
          <Route path="/matches/" render={() => <Matches
                                                  currentTeam={this.props.currentTeam} 
                                                  matches={this.props.matches}/>}
                                                />
        </>
      </Router>        
    )
  }

}