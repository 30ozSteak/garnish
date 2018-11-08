import React from "react";
import Logo from "./Logo";
import { shallow } from "enzyme";

describe("Logo", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
