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
          length={episode.length}
          pubDate={episode.pubDate} />
      )}
    </div>
  )
}

export default EpisodeList;