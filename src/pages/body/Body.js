import React, { Component } from 'react';
import './body.css'

// sits inside Table with Header
// accepts a single row of table data. 
export default class Body extends Component {

  render() {
        return(
            <tr>
                <td className="table-row"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }

}