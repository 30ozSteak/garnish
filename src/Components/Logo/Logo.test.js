import React from "react";
import { shallow } from "enzyme";

import Logo from "./Logo";

describe("Logo", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
