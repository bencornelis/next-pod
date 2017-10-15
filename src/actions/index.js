import * as types from './../constants/ActionTypes';
import parser from 'rss-parser';

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

        fetchFeed(title, artist, imageUrl, feedUrl, dispatch);
      } else {
        console.log('Could not find podcast.');
      }
    });
  }
}

export const requestPodcast = () => ({
  type: types.REQUEST_PODCAST
});

export const receivePodcast = (title, artist, imageUrl, website, description, episodes) => ({
  type: types.RECEIVE_PODCAST,
  title,
  artist,
  imageUrl,
  website,
  description,
  episodes
});

export const fetchFeed = (title, artist, imageUrl, feedUrl, dispatch) => {
  return parser.parseURL(feedUrl, (error, parsed) => {
    const feed = parsed.feed;
    const website = feed.link;
    const description = feed.description;
    const episodes = feed.entries.map(entry => ({
      title: entry.title,
      description: entry.content,
      length: entry.enclosure.length,
      mp3: entry.guid,
      pubDate: entry.pubDate,
      imageUrl
    }));
    
    dispatch(
      receivePodcast(title, artist, imageUrl, website, description, episodes)
    );
  });
}

export const loadEpisode = episode => {
  return Object.assign({}, episode, {
    type: types.LOAD_EPISODE
  });
}
