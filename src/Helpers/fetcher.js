import { Key } from "../Key";

export const fetchTechNews = async topic => {
  try {
    const response = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Key}`;
    const techNews = await response.json();
    return techNews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMemes = async topic => {
  try {
    const response = `https://newsapi.org/v2/everything?q=meme&apiKey=${Key}`;
    const memeNews = await response.json();
    return memeNews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchAbramov = async topic => {
  try {
    const response = `https://newsapi.org/v2/everything?q=dan+abramov&apiKey=${Key}`;
    const abramovNews = await response.json();
    return abramovNews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCulture = async topic => {
  try {
    const response = `https://newsapi.org/v2/top-headlines?q=culture&apiKey=${Key}`;
    const cultureNews = await response.json();
    return cultureNews;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchTopNews = async topic => {
  try {
    const response = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Key}`;
    const topNews = await response.json();
    return topNews;
  } catch (error) {
    throw new Error(error.message);
  }
};
