

// *** NO LONGER IN USE ***

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/main_page/MainPage.js'
import Header from './components/header/Header.js'
import Table from './components/table/Table.js';
import Matches from './components/matches/Matches.js';

export default class AppRouter extends Component {

  render() {

    return (
      <>
          <Router>
            <>
              <Route path="/" exact render={() => <Table
                                                    
                                                      
                                                        standings={this.props.standings}
                                                        updateCurrentTeam={this.props.updateCurrentTeam}
                                                      
                                                  />
                                            }
              />
              <Route path="/matches/" render={() => <Matches
                                                      currentTeam={this.props.currentTeam} 
                                                      matches={this.props.matches}
                                                    />
                                              }
              />
            </>
          </Router>
      </>        
    )
  }

}