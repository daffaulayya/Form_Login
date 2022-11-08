import React from "react";
import "./dashboard1.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Dashboard from "./Dashboard";
import About from "./About";
import Analytics from "./Analytics";
import Comment from "./Comment";

const Dashboard1 = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/comment" component={Comment} />
            <Route path="/analytics" component={Analytics} />
          </Switch>
        </Sidebar>
      </Router>
    </>
  );
};

export default Dashboard1;
