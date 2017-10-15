import * as types from './../constants/ActionTypes';

export const fetchPodcast = (searchTerm) => {
  return function (dispatch) {
    dispatch(requestPodcast());
    const term = searchTerm.replace(' ', '+');
    const url = `https://itunes.apple.com/search?term=${term}&media=podcast&limit=1`;

    return fetch(url).then(
      response => response.json(),
      error    => console.log('An error occurred.', error)
    ).then(json => {
      if (json.results.length > 0) {
        const podcast  = json.results[0];
        const artist   = podcast.artistName;
        const title    = podcast.trackName;
        const imageUrl = podcast.artworkUrl600;
        const feedUrl  = podcast.feedUrl;

        dispatch(receivePodcast(title, artist, imageUrl));
      } else {
        console.log('Could not find podcast.');
      }
    });
  }
}

export const requestPodcast = () => ({
  type: types.REQUEST_PODCAST
});

export const receivePodcast = (title, artist, imageUrl) => ({
  type: types.RECEIVE_PODCAST,
  title: title,
  artist: artist,
  imageUrl: imageUrl
});
