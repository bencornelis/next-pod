import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_PODCAST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_PODCAST: {
      const { title, artist, imageUrl, website, description, episodes } = action;
      return Object.assign({}, state, {
        isFetching: false,
        podcastSearchResult: {
          title, artist, imageUrl, website, description, episodes
        }
      });
    }
    case types.LOAD_EPISODE: {
      const { title, description, length, mp3, pubDate, imageUrl } = action;
      return Object.assign({}, state, {
        player: {
          playing: true,
          episode: {
            title, description, length, mp3, pubDate, imageUrl
          }
        }
      });
    }
    case types.PAUSE_PODCAST:
      return Object.assign({}, state, {
        player: {
          episode: state.player.episode,
          playing: false
        }
      });
    case types.PLAY_PODCAST:
      return Object.assign({}, state, {
        player: {
          episode: state.player.episode,
          playing: true
        }
      });
    default:
      return state;
  }
}