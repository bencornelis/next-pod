import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/PodcastPlayer.css';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import ReactHowler from 'react-howler';
import { playPodcast, pausePodcast } from './../actions'

class PodcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.props.dispatch(playPodcast());
  }

  pause() {
    this.props.dispatch(pausePodcast());
  }

  render() {
    let playOrPauseButton;
    if (this.props.playing) {
      playOrPauseButton = <FontAwesome name='pause' size='3x' onClick={this.pause} />
    } else {
      playOrPauseButton = <FontAwesome name='play' size='3x' onClick={this.play} />
    }

    return(
      <div>
        <Link to="/">Back to search</Link>
        <div>
          {this.props.episodeTitle}
        </div>
        <div>
          Progress bar
        </div>
        <div>
          <img className='player-image' src={this.props.podcastImageUrl} />
        </div>
        <ReactHowler
          src={this.props.episodeMP3}
          playing={this.props.playing}
          html5={true}
          ref={(ref) => (this.player = ref)}
        />
        <div>
          {playOrPauseButton}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeTitle: state.player.episode.title,
  episodeMP3: state.player.episode.mp3,
  podcastImageUrl: state.player.episode.imageUrl,
  playing: state.player.playing
});

export default connect(mapStateToProps)(PodcastPlayer);