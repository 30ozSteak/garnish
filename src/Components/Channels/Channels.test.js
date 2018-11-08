import React from "react";
import Channels from "./Channels";
import { shallow } from "enzyme";

describe("Channels", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Channels />);
    expect(wrapper).toMatchSnapshot();
  });
});
