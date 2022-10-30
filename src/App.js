// import './App.css';
// import React from "react";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import IniFooter from './pages/IniFooter';
// import IniHeader from './pages/IniHeader';
// import IniBody from './pages/IniBody';
// import IniLogin from './pages/IniLogin';

// const App= () => {
//   return (
//     <>
//     <IniHeader />
//     <div className='bg-body'>
//     <div className='Content'>
//       <div className='SlideBanner'>
//       <IniBody />
//       </div>
//     <div className='LogForm'>
//     <IniLogin />
//     </div>
//     </div>
//     </div>
//     <IniFooter />
//     </>
//   );
// };

// export default App;

import "./App.css";
import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import IniFooter from "./pages/IniFooter";
import IniHeader from "./pages/IniHeader";
import IniBody from "./pages/IniBody";
import IniLogin from "./pages/IniLogin";
import IniSignUp from "./pages/IniSignUp";
import Dashboard1 from "./pages1/Dashboard1";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
