import { Key } from "../Key";
import { fetchRequest } from "../Helpers/apicaller";

export const fetchTechNews = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`
  );
};

export const fetchMemes = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/everything?q=meme&apiKey=${Key}`
  );
};

export const fetchAbramov = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/everything?q=dan+abramov&apiKey=${Key}`
  );
};

export const fetchCulture = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/everything?q=culture&apiKey=${Key}`
  );
};

export const fetchTopNews = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`
  );
};
