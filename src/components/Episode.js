import React from 'react';
import { Link } from 'react-router-dom';

function Episode(props) {
  return (
    <div>
      <Link to="/player" onClick={() => props.loadEpisode(props)}>
        {props.title}
      </Link>
    </div>
  )
}

export default Episode;