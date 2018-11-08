import React from "react";
import Featured from "./Featured";
import { shallow } from "enzyme";

describe("Featured", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Featured />);
    expect(wrapper).toMatchSnapshot();
  });
});
