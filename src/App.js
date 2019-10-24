import React, { Component } from 'react';
import authToken from './AuthToken';
import Loading from './components/loading/Loading';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/main_page/MainPage.js'
import Matches from './components/matches/Matches.js'
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        currentTeam: null,
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
  }

  componentDidMount() {
    this.fetchStandings();
    this.fetchMatches();
    this.fetchTeams();
  }

    // is this complete? error handling?
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

  updateCurrentTeam(team) {
    this.setState({currentTeam: team});
  }

  render() {
    return (
      <div className="app">
        {
          this.state.loading ? <Loading/> : 
            <>
          <Router>
            <>
              <Route path="/" exact render=
                {() => 
                  <MainPage
                    standings={this.state.standings}
                    updateCurrentTeam={this.updateCurrentTeam} 
                  />
                }
              />
              <Route path="/fixtures/" render=
                {() => 
                  <Matches
                    currentTeam={this.state.currentTeam} 
                    matches={this.state.matches}
                  />
                }
              />
            </>
          </Router>
          
      </> 
        }
      </div>
    )
  }

}