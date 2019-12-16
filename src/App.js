import React, { Component } from 'react';
import authToken from './AuthToken';
import Loading from './components/loading/Loading';
import MainPage from './components/main_page/MainPage.js'
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        currentTeam: null,
        currentTeamID: null,
        teamMatches: null,
        error: false,
        loading: true,
        matches: null,
        standings: null,
      }
      this.fetchStandings = this.fetchStandings.bind(this);
      this.fetchMatches = this.fetchMatches.bind(this);
      this.updateCurrentTeam = this.updateCurrentTeam.bind(this);
      this.pullFixtureList = this.pullFixtureList.bind(this);
      this.updateTeamMatches = this.updateTeamMatches.bind(this);
      this.setLocalState = this.setLocalState.bind(this);
  }

  componentDidMount() {
    // call setLocalState here, with the below functions passed to them
    // this.fetchStandings();
    this.setLocalState(this.fetchStandings());
    this.fetchMatches();
  }

  // componentWillUnmount() {
    // getting the following error when refreshing Matches. 
    // Warning: Can't perform a React state update on an unmounted component. 
    // This is a no-op, but it indicates a memory leak in your application. 
    // To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
  // }


  // re-factor fetch to add state to local state, so that a refresh on the fixtures page can call on that state (currently 
  // getting an error as state is null on refresh). Clear local storage on componentWillUnmount? 


    // ERROR HANDLING!
    // refactor to return the data, not setState, or return "error". Pass either data or "error" to another function, setState happens
    // there, render is based on this. So this.state.standings would = "error" or 'data'.
  fetchStandings() {
    fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({standings: data, loading: false}))
      .catch(error => this.setState({ error: false }));
  }  

  fetchMatches() {
    fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}} )
      .then(response => response.json())
      .then(data => this.setState({matches: data, loading: false}))
      .catch(error => this.setState({error: false}))
  }

  // callback for fetching then updating local state, gets passed the fetch request, uses the result to populate local state
  setLocalState(fetchRequest) {
    // if the fetch request is passed, does that mean it resolves before the rest of the function is accessed? 
    // if so, can I refer to state in the function safe in the knowledge that either data will be there or errors will be flagged?
    // need to call the fetchRequest straight away, so setLocalState(fetchMatches()) { function things }

    // below is still not working, refactor fetch to return the data, then use another function to use that returned data and seState 
    console.log("from setLocal - ", this.state.loading)
  }

  updateCurrentTeam(team, id) {
    this.setState({currentTeam: team});
    this.setState({currentTeamID: id})
  }

  pullFixtureList(teamID, matches) {
    let teamMatches = [];
    matches.forEach(match => {
      if(match.homeTeam.id === teamID || match.awayTeam.id === teamID) {
        teamMatches.push(match);
      }
    });
    console.log("home & away matches - ", teamMatches);
    return teamMatches
  }

  updateTeamMatches(matches) {
    this.setState({teamMatches: matches})
  }

  render() {
    return (
      <div className="app">
        {
          this.state.loading ? <Loading/> : 
          <MainPage
            standings={this.state.standings}
            updateCurrentTeam={this.updateCurrentTeam}
            currentTeam={this.state.currentTeam}
            currentTeamID={this.state.currentTeamID}
            matches={this.state.matches}
            pullFixtureList={this.pullFixtureList}
            updateTeamMatches={this.updateTeamMatches}
            teamMatches={this.state.teamMatches}
          />
        }
      </div>
    )
    }

}

