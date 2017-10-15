import React from 'react';
import Episode from './Episode';

function EpisodeList(props) {
  return (
    <div>
      {props.episodes.map((episode, index) =>
        <Episode
          key={index}
          title={episode.title}
          description={episode.description}
          mp3={episode.mp3}
          length={episode.length}
          pubDate={episode.pubDate}
          imageUrl={episode.imageUrl}
          loadEpisode={props.loadEpisode} />
      )}
    </div>
  )
}

export default EpisodeList;