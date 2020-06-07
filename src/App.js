import React from 'react';
import './App.css';
import ArgMainPage from './components/arcPage'
import Earth from './planetEarth/earth';
import PrivateRoute from './components/privateRoute';
import {
    HashRouter as Router,
    Route,
    // Link,
    Switch,
    // Redirect,
} from 'react-router-dom';
function App() {
  return (
      <Router>
        <div>
        <Switch>
          <PrivateRoute exact path='/' component={ArgMainPage}/>
          <Route exact path='/login' component={Earth} />
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
