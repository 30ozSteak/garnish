import React from "react";
import Faves from "./Faves";
import { shallow } from "enzyme";

describe("Faves", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Faves />);
    expect(wrapper).toMatchSnapshot();
  });
});
