import React, { Component } from 'react';
import Table from '../table/Table.js'
import './OpaqueDiv.css'

export default class OpaqueDiv extends Component {

  render() {
    return(
      <div className="opaque-div">
        <Table
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
        />
      </div>
    )
  }

}