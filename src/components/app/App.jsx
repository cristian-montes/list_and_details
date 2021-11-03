import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AnimalCrossingContainer from '../../containers/AnimalCrossingContainer';
import VillagerContainer from '../../containers/VillagerContainer';


export default function App() {
  return (
  <section className='app'>
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={AnimalCrossingContainer}/>
        <Route exact path="/villager/:id" component={VillagerContainer}/>
      </Switch>
    
    </BrowserRouter>

  </section>
  
  );
}

