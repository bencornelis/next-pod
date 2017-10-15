import React from 'react';
import { connect } from 'react-redux';
import Podcast from './Podcast';

function PodcastSearchDisplay(props) {
  return (
    <div>
      <Podcast
        title={props.podcast.title}
        artist={props.podcast.artist}
        imageUrl={props.podcast.imageUrl} />
    </div>
  );
}

const mapStateToProps = state => {
  let podcastInfo;
  const podcast = state.podcastSearchResult;
  if (podcast.isFetching || !podcast) {
    podcastInfo = {
      title: '',
      artist: '',
      imageUrl: ''
    };
  } else {
    podcastInfo = {
      title: podcast.title,
      artist: podcast.artist,
      imageUrl: podcast.imageUrl
    };
  }
  return {
    podcast: podcastInfo
  }
}

export default connect(mapStateToProps)(PodcastSearchDisplay);