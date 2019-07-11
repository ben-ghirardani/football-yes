import React, { Component } from 'react';
import './table.css'
import Header from '../header/Header.js'
// import Body from '../body/Body.js'

// takes in Header and Body
export default class Table extends Component {

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