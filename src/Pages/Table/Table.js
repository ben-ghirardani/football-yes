import React, { Component } from 'react';
import './table.css'
import Header from '../header/Header.js'
import Body from '../body/Body.js'

// takes in Header and Body
// loops through props and creates a <Body/> for each line of data
export default class Table extends Component {

  render() {
    return(
      <table>
        <tbody>
          <Header/>
          {this.props.standings.standings[0].table.map((item, i) =>
            <Body
              key={i}
              position={item.position}
              team={item.team.name}
              played={item.playedGames}
              won={item.won}
              drawn={item.drawn}
              lost={item.lost}
              gf={item.goalsFor}
              ga={item.goalsAgainst}
              gd={item.goalDifference}
              points={item.points}
              updateCurrentTeam={this.props.updateCurrentTeam}
            />
          )}
        </tbody>
      </table>
    )
  }

}

// puller from Router, can split the links out to other components

// {/* <nav className="nav">
//               <div className="link-div">
//                 <Link className="table-link" to="/">Table</Link>
//               </div>
//               <div className="link-div">
//                 <Link to="/matches/">Matches</Link>
//               </div>
//               <div className="link-div">
//                 <Link to="/analysis/">Analysis</Link>
//               </div>
//             </nav>     */}