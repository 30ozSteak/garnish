import React from "react";
import LandingLoading from "./LandingLoading";
import { shallow } from "enzyme";

describe("LandingLoading", () => {
  it("should render pretty neat landing animation that matches snapshot", () => {
    const wrapper = shallow(<LandingLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
