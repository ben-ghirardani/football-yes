import React, { Component } from 'react';
import './table.css'
import Header from '../header/Header.js'
import Body from '../body/Body.js'

// takes in Header and Body
// loops through props and creates a <Body/> for each line of data
export default class Table extends Component {

  constructor(props){
    super(props);
    this.createRows = this.createRows.bind(this);
  }

  // create a for loop to iterate throuh object, creating a <Body/> for each item.
  createRows(tableData) {
    for (let i = 0; i < tableData.length; i++) {
      return <Body/>
    }
  }

  render() {
    return(
      <table>
        <tbody>
          <Header/>

            {/* create a function that loops through standings and creates a table row for each */}

            {/* {this.createRows(this.props.standings.standings[0].table)} */}
        </tbody>
      </table>
    )
  }

}