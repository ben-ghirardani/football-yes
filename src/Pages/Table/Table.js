import React, { Component } from 'react';
import './table.css'
import Header from '../header/Header.js'
import Body from '../body/Body.js'

// takes in Header and Body
// loops through props and creates a <Body/> for each line of data
export default class Table extends Component {

  constructor(props){
    super(props);
  }

  // create a for loop to iterate throuh object, creating a <Body/> for each item.
  createRows(object) {
    
  }

  render() {
    return(
      <table>
        <tbody>
          <Header/>
            
          {/* <Body/> */}
        </tbody>
      </table>
    )
  }

}