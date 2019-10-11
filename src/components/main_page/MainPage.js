import React, { Component } from 'react';
import Table from '../table/Table.js';
import './MainPage.css'

export default class MainPage extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className="main-page">
        <Table
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
        />
      </div>
    )
  }

}