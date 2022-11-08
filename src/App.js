import "./App.css";
import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import IniFooter from "./pages/IniFooter";
import IniHeader from "./pages/IniHeader";
import IniBody from "./pages/IniBody";
import IniLogin from "./pages/IniLogin";
import IniSignUp from "./pages/IniSignUp";
import Dashboard1 from "./pages1/Dashboard1";
import IniBody1 from "./pages 2/IniBody1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { KeyOutlined } from "@ant-design/icons";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Dashboard1" component={Dashboard1} />
          <Route path="/IniSignUp" component={IniSignUp} />
          <div className="bg-body">
            <div className="Header">
              <IniHeader />
            </div>
            <div className="Content">
              <div className="SlideBanner">
                <IniBody />
              </div>
              <div className="LogForm">
                <IniLogin />
              </div>
            </div>
            <div className="textDashboard">
              <KeyOutlined rotate={180} style={{marginRight: "5px"}} />
              ONLINE REGISTRATION
            </div>
            <IniBody1 />
            <div>
              <IniFooter />
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;