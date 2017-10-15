import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Podcast from './Podcast';

function PodcastSearchDisplay(props) {
  return (
    <div>
      <Header />
      <Podcast
        title={props.podcast.title}
        artist={props.podcast.artist}
        imageUrl={props.podcast.imageUrl}
        episodes={props.podcast.episodes} />
    </div>
  );
}

const mapStateToProps = state => {
  const podcastResult = state.podcastSearchResult;
  const podcast = {
    title: podcastResult.title || '',
    artist: podcastResult.artist || '',
    imageUrl: podcastResult.imageUrl || '',
    episodes: podcastResult.episodes || []
  };
  return {
    podcast: podcast
  }
}

export default connect(mapStateToProps)(PodcastSearchDisplay);