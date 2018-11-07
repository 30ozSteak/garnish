import { Key } from "../Key";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
});

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.articles
});

export function fetchPosts(channel) {
  return function(dispatch) {
    dispatch(requestPosts());
    return fetch(
      `https://newsapi.org/v1/articles?source=${channel}&apiKey=${Key}`
    )
      .then(
        response => response.json(),
        error => console.log("an error occured.", error)
      )
      .then(json => {
        dispatch(receivedPosts(json));
      });
  };
}
