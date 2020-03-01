import React, { Component } from 'react';
import './Loading.css'
import Header from '../header/Header.js';

export default class Loading extends Component {

  render() {
    return (
      <div className="loading">
        <Header/>
        <div className="central-column">
          <div className="message">Loading</div>
        </div>
      </div>
    )
  }

}