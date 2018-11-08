import React from "react";
import { shallow } from "enzyme";

import NewsCard from "./NewsCard";

describe("NewsCard", () => {
  it("should resemble the snaspshot", () => {
    const wrapper = shallow(<NewsCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
