import React from 'react';
import EpisodeBlurb from './EpisodeBlurb';

function EpisodeList(props) {
  return (
    <div>
      {props.episodes.map((episode, index) =>
        <EpisodeBlurb
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