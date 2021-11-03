import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';

export default function App() {
  return (
  <section className='app'>
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={AnimalCrossingContainer}/>
      </Switch>
    
    </BrowserRouter>

  </section>
  
  );
}

