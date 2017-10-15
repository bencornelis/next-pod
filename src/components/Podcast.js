import React from 'react';

function Podcast(props) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.artist}</div>
      <div><img src={props.imageUrl} /></div>
    </div>
  );
}

export default Podcast;