import React from 'react';
import './../styles/App.css';
import PodcastSearchDisplay from './PodcastSearchDisplay';
import PodcastPlayerControl from './PodcastPlayerControl';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={PodcastSearchDisplay} />
        <Route path="/player" component={PodcastPlayerControl} />
      </Switch>
    </div>
  );
}

export default App;
