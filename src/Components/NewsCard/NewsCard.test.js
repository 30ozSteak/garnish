import NewsCard from "./NewsCard";
import React from "react";
import { shallow } from "enzyme";

describe("NewsCard", () => {
  let wrapper = shallow(
    <NewsCard
      title="article.title"
      urlToImage="article.urlToImage"
      description="article.description"
      url="article.url"
    />
  );

  it("should resemble the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
