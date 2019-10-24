import React, { Component } from 'react';
import './MainPage.css'
import OpaqueDiv from '../opaque_div/OpaqueDiv.js';
import Header from '../header/Header.js';

export default class MainPage extends Component {

  render() {
    return(
      <div className="main-page">
        <Header/>
        <OpaqueDiv
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
        />
      </div>
    )
  }

}