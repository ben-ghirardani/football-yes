import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Table from './pages/table/Table';
import Matches from './pages/matches/Matches';
import Analysis from './pages/analysis/Analysis';

export default class AppRouter extends Component {

  render() {

    return (
      <Router>
        <>
          <Route path="/" exact render={() => <Table standings={this.props.standings}/>} />
          <Route path="/matches/" render={() => <Matches matches={this.props.matches}/>}/>
          <Route path="/analysis/" render={() => <Analysis /> } />
        </>
      </Router>        
    )
  }

}