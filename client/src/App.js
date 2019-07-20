import React from 'react';
import Header from './components/Header';
import {Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/feature" component={Feature}/>
        <Route exact path="/signout" component={SignOut}/>
        <Route exact path="/signin" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
