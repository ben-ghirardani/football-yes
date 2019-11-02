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
        teams: null,
      }
      this.fetchStandings = this.fetchStandings.bind(this);
      this.fetchMatches = this.fetchMatches.bind(this);
      this.fetchTeams = this.fetchTeams.bind(this);
      this.updateCurrentTeam = this.updateCurrentTeam.bind(this);
      this.pullFixtureList = this.pullFixtureList.bind(this);
      this.updateTeamMatches = this.updateTeamMatches.bind(this);
  }

  componentDidMount() {
    this.fetchStandings();
    this.fetchMatches();
    this.fetchTeams();
  }

    // ERROR HANDLING!
    // destructure the results before updating state? Or just only pass what i need?
  async fetchStandings() {
    if (this.state.standings === null) {
      const response = await fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}});
      const data = await response.json();
      this.setState({standings: data, loading: false});
    } else {
      return
    }
  }

  async fetchMatches() {
    if (this.state.matches === null) {
      const response = await fetch(`http://api.football-data.org/v2/competitions/2021/matches`, {headers : {'X-Auth-Token': authToken}});
      const data = await response.json();
      this.setState({matches: data});
    } else {
      return
    }
  }

  async fetchTeams() {
    if (this.state.teams === null) {
      const response = await fetch(`http://api.football-data.org/v2/competitions/2021/teams`, {headers : {'X-Auth-Token': authToken}});
      const data = await response.json();
      this.setState({teams: data});
    } else {
      return
    }
  }

  // fetchStandings() {
  //   fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}} )
  //     .then(response => response.json())
  //     .then(data => this.setState({standings: data, loading: false}))
  //     .catch(error => this.setState({ error: false }));
  // }	

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
          />
        }
      </div>
    )
    }

}

