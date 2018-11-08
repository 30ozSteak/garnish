import { Key } from "../Key";
import { fetchRequest } from "../Helpers/apicaller";

export const fetchNews = async type => {
  let path = "";
  switch (type) {
    case "tech":
      path = "q=tech";
      break;
    case "memes":
      path = "q=memes";
      break;
    case "abramov":
      path = "q=dan+abramov";
      break;
    case "culture":
      path = "q=culture";
      break;
    case "top":
      path = "q=top-news";
      break;
    default:
      path = "q=butts";
  }
  return await fetchRequest(
    `https://newsapi.org/v2/everything?${path}&apiKey=${Key}`
  );
};
