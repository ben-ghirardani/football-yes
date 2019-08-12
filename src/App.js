import React, { Component } from 'react';
import authToken from './AuthToken';
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
  }

  // is this complete? errors?
  async componentDidMount() {
    if (this.state.standings === null) {
      const response = await fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {headers : {'X-Auth-Token': authToken}});
      const data = await response.json();
      this.setState({standings: data, loading: false});
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
      <>
        {this.state.loading ? <Loading/> : <AppRouter standings={this.state.standings} matches={this.state.matches}/>}
      </>
    )
  }

}