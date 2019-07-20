import React from 'react';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
