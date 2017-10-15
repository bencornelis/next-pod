import React, { Component } from 'react';
import './../styles/Podcast.css';
import EpisodeList from './EpisodeList';
import { loadEpisode } from './../actions'
import { connect } from 'react-redux';

class Podcast extends Component {
  constructor(props) {
    super(props);
    this.loadEpisodeIntoPlayer = this.loadEpisodeIntoPlayer.bind(this);
  }

  loadEpisodeIntoPlayer(episode) {
    this.props.dispatch(loadEpisode(episode));
  }

  render() {
    return (
      <div className='podcast'>
        <h2>{this.props.title}</h2>
        <div><img className='image' src={this.props.imageUrl} /></div>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <EpisodeList
          episodes={this.props.episodes}
          loadEpisode={this.loadEpisodeIntoPlayer}/>
      </div>
    );
  }
}

export default connect()(Podcast);