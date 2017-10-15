import React from 'react';
import './../styles/App.css';
import Header from './Header';
import PodcastSearchDisplay from './PodcastSearchDisplay';

function App() {
  return (
    <div className='app'>
      <Header />
      <PodcastSearchDisplay />
    </div>
  );
}

export default App;
