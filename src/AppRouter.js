import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Analysis from './Pages/Analysis';
import Matches from './Pages/Matches';
import Table from './Pages/Table';

export default function AppRouter () {
	return (
  	<Router>
    	<React.Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/">Table</Link>
            </li>
            <li>
              <Link to="/matches/">Matches</Link>
            </li>  
            <li>
              <Link to="/analysis/">Analysis</Link>
            </li>
          </ul>
        </nav>    

        {/* Routes here */}

      </React.Fragment>
    </Router>
  )
}