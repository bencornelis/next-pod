import React from 'react';
import styles from './../styles/App.css';
import Header from './Header';
import PodcastSearchDisplay from './PodcastSearchDisplay';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <PodcastSearchDisplay />
    </div>
  );
}

export default App;
