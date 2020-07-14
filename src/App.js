import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import './App.css';

const Hats = () => <h1>HATS</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
