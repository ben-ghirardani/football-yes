import React, { Component } from 'react';
import './tableHeader.css';

// sits inside Table with Body
export default class TableHeader extends Component {

  render() {
    return (
      <tr>
        <th>Pos.</th>
        <th>Team</th>
        <th>MP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Pts</th>
      </tr>
    )
  }

}