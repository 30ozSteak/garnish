import React from "react";
import { shallow } from "enzyme";

import Featured from "./Featured";

describe("Featured", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Featured />);
    expect(wrapper).toMatchSnapshot();
  });
});
