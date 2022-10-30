// import React from "react";

// const Dashboard1 = () => {
//     return (
//         <>
//             <h1>test</h1>
//         </>
//     );
// };

// export default Dashboard1;



import React from 'react';
import './dashboard1.css';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx';
import Dashboard from './Dashboard';
import About from './About';
import Analytics from './Analytics';
import Comment from './Comment';

const Dashboard1 = () => {
  return (
    <>
        <Router>
      <Sidebar>
      <Switch>
          <Route to="/Dashboard" component={Dashboard} />
          <Route to="/About" component={About} />
          <Route to="/Comment" component={Comment} />
          <Route to="/Analytics" component={Analytics} />
        </Switch>
        </Sidebar>
      </Router>
    </>
  );
};

export default Dashboard1;