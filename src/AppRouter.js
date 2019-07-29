import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from './pages/table/Table';
import Matches from './pages/matches/Matches';
import Analysis from './pages/analysis/Analysis';

export default class AppRouter extends Component {

  render() {

    return (
      <Router>
        <>
            <nav className="nav">
              <div className="link-div">
                <Link className="table-link" to="/">Table</Link>
              </div>
              <div className="link-div">
                <Link to="/matches/">Matches</Link>
              </div>
              <div className="link-div">
                <Link to="/analysis/">Analysis</Link>
              </div>
            </nav>    

          <Route path="/" exact render={() => <Table standings={this.props.standings}/>} />

          {/* can I have a ternery statement here? If state is!null render component, else fetch data */}

          <Route path="/matches/" render={() => <Matches />}/>
          <Route path="/analysis/" render={() => <Analysis /> } />
        </>
      </Router>        
    )
  }

}