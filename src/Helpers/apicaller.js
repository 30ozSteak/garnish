export const fetchRequest = async url => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const cleanedUp = async data => {
  let cleanObj = data.articles.map(article => {
    let articleObj = {
      title: article.title,
      author: article.arthur,
      description: article.description,
      url: article.url,
      coverImg: article.urlToImage,
      published: article.publishedAt
    };
    return articleObj;
  });
  return cleanObj;
};
