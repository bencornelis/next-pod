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
          position: 0,
          playing: true,
          episode: {
            title, description, length, mp3, pubDate, imageUrl
          }
        }
      });
    }
    case types.PAUSE_PODCAST: {
      const player = Object.assign({}, state.player, {
        playing: false
      });
      return Object.assign({}, state, {
        player: player
      });
    }
    case types.PLAY_PODCAST: {
      const player = Object.assign({}, state.player, {
        playing: true
      });
      return Object.assign({}, state, {
        player: player
      });
    }
    case types.UPDATE_POSITION: {
      const player = Object.assign({}, state.player, {
        position: action.newPosition
      });
      return Object.assign({}, state, {
        player: player
      });
    }
    default:
      return state;
  }
}