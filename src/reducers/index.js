import constants from "./../constants";
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_PODCAST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_PODCAST:
      return Object.assign({}, state, {
        isFetching: false,
        podcastSearchResult: {
          title: action.title,
          artist: action.artist,
          imageUrl: action.imageUrl,
          website: action.website,
          description: action.description,
          episodes: action.episodes
        }
      });
    default:
      return state;
  }
}