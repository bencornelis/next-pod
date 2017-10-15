import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PodcastPlayer from './PodcastPlayer';
import { connect } from 'react-redux';

class PodcastPlayerControl extends Component {
  render() {
    return(
      <div>
        <Link to="/">Back to search</Link>
        <PodcastPlayer
          title={this.props.episode.title}
          mp3={this.props.episode.mp3} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  episode: state.player.episode
});

export default connect(mapStateToProps)(PodcastPlayerControl);