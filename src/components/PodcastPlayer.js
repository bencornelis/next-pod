import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/PodcastPlayer.css';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import ReactHowler from 'react-howler';

class PodcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.logPlayer = this.logPlayer.bind(this);
  }

  logPlayer() {
    console.log(this.player);
  }

  render() {
    console.log(this.props.episodeMP3);
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
          playing={true}
          html5={true}
          ref={(ref) => (this.player = ref)}
        />
        <div>
          <FontAwesome name='play' size='3x' onClick={this.logPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeTitle: state.player.episode.title,
  episodeMP3: state.player.episode.mp3,
  podcastImageUrl: state.player.episode.imageUrl,
});

export default connect(mapStateToProps)(PodcastPlayer);