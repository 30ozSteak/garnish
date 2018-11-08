import React from "react";
import Fab from "./Fab";
import { shallow } from "enzyme";

describe("Fab", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Fab />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should change state on click", async () => {
    const expected = "active";
    const wrapper = shallow(<Fab />);
    wrapper.setState({ buttonState: "" });
    await wrapper.instance().toggleActive();
    expect(wrapper.state("buttonState")).toEqual(expected);
  });
});
