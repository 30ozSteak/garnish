import { Key } from "../Key";
import { fetchRequest } from "../Helpers/apicaller";

export const fetchTechNews = async () => {
  return await fetchRequest(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`
  );
};

export const fetchMemes = async => {
  try {
    const response = fetchRequest(
      `https://newsapi.org/v2/everything?q=meme&apiKey=${Key}`
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchAbramov = async => {
  try {
    const response = fetchRequest(
      `https://newsapi.org/v2/everything?q=dan+abramov&apiKey=${Key}`
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCulture = async => {
  try {
    const response = fetchRequest(
      `https://newsapi.org/v2/top-headlines?q=culture&apiKey=${Key}`
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTopNews = async topic => {
  try {
    const response = fetchRequest(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
