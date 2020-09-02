import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArgMainPage from './components/arcPage'
import Earth from './components/planetEarth/earth';
import PrivateRoute from './components/privateRoute';
import FileShow from './fileShow'
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
          <PrivateRoute exact path='/show/:file_names' component={FileShow}/>
          <Route exact path='/login' component={Earth} />
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
