// Prior Version

// import React, { Component } from 'react';
// import './MainPage.css'
// import CentreDiv from '../centre_div/CentreDiv.js';
// import Header from '../header/Header.js';

// export default class MainPage extends Component {

//   render() {
//     return(
//       <div className="main-page">
//         <Header/>
//         <CentreDiv
//           standings={this.props.standings}
//           updateCurrentTeam={this.props.updateCurrentTeam}
//         />
//       </div>
//     )
//   }

// }


// updated version 

import React, { Component } from 'react';
import './MainPage.css'
import CentreDiv from '../centre_div/CentreDiv.js';
import Header from '../header/Header.js';

export default class MainPage extends Component {

  render() {
    return(
      <div className="main-page">
        <Header/>
        <CentreDiv
          standings={this.props.standings}
          updateCurrentTeam={this.props.updateCurrentTeam}
          currentTeam={this.props.currentTeam}
          currentTeamID={this.props.currentTeamID}
          matches={this.props.matches}
          pullFixtureList={this.props.pullFixtureList}
          updateTeamMatches={this.props.updateTeamMatches}
          teamMatches={this.props.teamMatches}
        />
      </div>
    )
  }

}