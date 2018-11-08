import React from "react";
import HomeHeader from "./HomeHeader";
import { shallow } from "enzyme";

describe("HomeHeader", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<HomeHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
