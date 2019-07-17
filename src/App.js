import React, { Component } from 'react';
import authToken from './AuthToken';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Analysis from './pages/analysis/Analysis.js';
// import Matches from './pages/matches/Matches';
// import Table from './pages/table/Table';
import Loading from './pages/loading/Loading';
import AppRouter from './AppRouter';
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        standings: null,
        teams: null,
        matches: null,
        loading: true,
        error: false,
      }
        // this.fetchStandings = this.fetchStandings.bind(this);
        // this.fetchTeams = this.fetchTeams.bind(this);
        // this.fetchMatches = this.fetchMatches.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}});
    const data = await response.json();
    this.setState({standings: data, loading: false});
    // this.setState({loading: true});
    // this.fetchStandings();
    // this.fetchTeams();
    // this.fetchMatches();
  }

  // add a console log to notify when data has been fetched, to keep an eye on how it's working?
  // fetchStandings() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({standings: data, loading: false}))
  //     .catch(error => this.setState({ error: false }));
  // }		
  
  // fetchTeams() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/teams`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({teams: data}))
  //     .catch(error => this.setState({ error: false }));
  // }		
  
  // fetchMatches() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({matches: data}))
  //     .catch(error => this.setState({ error: false }));
  // }

  render() {
    return (
      // seperate file for the routes -> <Routes/>? Avoids having to style the App file.

      <>
        {this.state.loading ? <Loading/> : <AppRouter standings={this.state.standings}/>}
      </>

      // <Router>
      //   <>
      //       <nav className="nav">
      //         <div className="link-div">
      //           <Link className="table-link" to="/">Table</Link>
      //         </div>
      //         <div className="link-div">
      //           <Link to="/matches/">Matches</Link>
      //         </div>
      //         <div className="link-div">
      //           <Link to="/analysis/">Analysis</Link>
      //         </div>
      //       </nav>    

      //     <Route path="/" exact render={() => <Table  />} />
      //     <Route path="/matches/" render={() => <Matches matches={this.state.matches} />}/>
      //     <Route path="/analysis/" render={() => <Analysis /> } />
      //   </>
      // </Router>        
    )
  }

}

// standings={this.state.standings}