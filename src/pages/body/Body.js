import React, { Component } from 'react';
import './body.css'

// sits inside Table with Header
// accepts a single row of table data. 
export default class Body extends Component {

  render() {
        return(
            <tr>
                <td>{this.props.position}</td>
                <td>{this.props.team}</td>
                <td>{this.props.played}</td>
                <td>{this.props.won}</td>
                <td>{this.props.drawn}</td>
                <td>{this.props.lost}</td>
                <td>{this.props.gf}</td>
                <td>{this.props.ga}</td>
                <td>{this.props.gd}</td>
                <td>{this.props.points}</td>
            </tr>
        )
    }

}