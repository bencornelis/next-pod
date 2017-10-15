import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function PodcastPlayer(props) {
  return(
    <div>
      {props.title}
      <ReactAudioPlayer
        src={props.mp3}
        autoplay
        controls />
    </div>
  );
}

export default PodcastPlayer;