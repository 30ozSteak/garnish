import React from "react";
import { shallow } from "enzyme";

import HomeHeader from "./HomeHeader";

describe("HomeHeader", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<HomeHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
