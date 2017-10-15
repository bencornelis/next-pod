import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPodcast } from './../actions'

class PodcastSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { _searchTerm } = this.refs;
    let term = _searchTerm.value.trim();
    if (!term) return;

    this.props.dispatch(fetchPodcast(term));
    _searchTerm.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='podcast title' ref='_searchTerm'></input>
          <button>search</button>
        </form>
      </div>
    )
  }
}

export default connect()(PodcastSearch);