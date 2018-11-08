import React from "react";
import Fab from "./Fab";
import { shallow } from "enzyme";

describe("Fab", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Fab />);
    expect(wrapper).toMatchSnapshot();
  });
});
