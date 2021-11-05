import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from './components/Landingpage';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './components/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
