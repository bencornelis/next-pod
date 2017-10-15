import React from 'react';
import './../styles/Podcast.css';
import EpisodeList from './EpisodeList';

function Podcast(props) {
  return (
    <div className='podcast'>
      <h2>{props.title}</h2>
      <div><img className='image' src={props.imageUrl} /></div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <EpisodeList episodes={props.episodes}/>
    </div>
  );
}

export default Podcast;