import NewsCard from "./NewsCard";
import React from "react";
import { shallow } from "enzyme";

describe("NewsCard", () => {
  it("should resemble the snaspshot", () => {
    const wrapper = shallow(<NewsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
