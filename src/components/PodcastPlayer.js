import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/PodcastPlayer.css';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import ReactHowler from 'react-howler';
import {
  playPodcast, pausePodcast, updatePosition
} from './../actions';

class PodcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.currentPosition = this.currentPosition.bind(this);
    this.getProgress = this.getProgress.bind(this);
  }

  play() {
    this.props.dispatch(playPodcast());
  }

  pause() {
    this.props.dispatch(pausePodcast());
  }

  moveForward(numSeconds) {
    const position = this.currentPosition();
    const newPosition = position + numSeconds;
    console.log(newPosition);
    this.player.seek(newPosition);
    this.props.dispatch(updatePosition(newPosition));
  }

  moveBackward(numSeconds) {
    const position = this.currentPosition();
    const newPosition = position >= numSeconds ? position - numSeconds : 0;
    this.player.seek(newPosition);
    this.props.dispatch(updatePosition(newPosition));
  }

  handleLoad() {
    setInterval(() => {
      const newPosition = this.currentPosition();
      this.props.dispatch(updatePosition(newPosition));
    }, 500)
  }

  currentPosition() {
    return this.player.seek();
  }

  getProgress() {
    if (!this.player) return 0;
    const position = this.props.position;
    const duration = this.player.duration();
    return position/duration;
  }

  render() {
    let playOrPauseButton;
    if (this.props.playing) {
      playOrPauseButton = <FontAwesome
                            className='control'
                            name='pause'
                            size='3x'
                            onClick={this.pause} />
    } else {
      playOrPauseButton = <FontAwesome
                            className='control'
                            name='play'
                            size='3x'
                            onClick={this.play} />
    }

    return(
      <div>
        <Link to="/">Back to search</Link>
        <div>
          {this.props.episodeTitle}
        </div>
        <div>
          <progress
            className='progress-bar'
            value={this.getProgress()}
            onClick={() => alert('foo')}
            />
        </div>
        <img className='player-image' src={this.props.podcastImageUrl} />
        <ReactHowler
          src={this.props.episodeMP3}
          playing={this.props.playing}
          html5={true}
          ref={(ref) => (this.player = ref)}
          onLoad={this.handleLoad}
        />
        <div className='control-panel'>
          <FontAwesome
            className='control'
            name='backward'
            size='3x'
            onClick={() => this.moveBackward(30) } />

          {playOrPauseButton}

          <FontAwesome
            className='control'
            name='forward'
            size='3x'
            onClick={() => this.moveForward(30) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeTitle: state.player.episode.title,
  episodeMP3: state.player.episode.mp3,
  podcastImageUrl: state.player.episode.imageUrl,
  playing: state.player.playing,
  position: state.player.position
});

export default connect(mapStateToProps)(PodcastPlayer);