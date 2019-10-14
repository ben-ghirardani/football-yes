import React, { Component } from 'react';
// import Table from '../table/Table.js';
import './MainPage.css'
import OpaqueDiv from '../opaque_div/OpaqueDiv.js';

export default class MainPage extends Component {

  render() {
    return(
      <div className="main-page">
        <OpaqueDiv
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
        />
      </div>
    )
  }

}