import React, { Component } from 'react';
import Table from '../table/Table.js'
import './CentreDiv.css'

export default class OpaqueDiv extends Component {

  render() {
    return(
      <div className="centre-div">
        <Table
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
        />
      </div>
    )
  }

}