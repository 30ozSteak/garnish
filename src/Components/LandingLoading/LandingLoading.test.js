import React from "react";
import { shallow } from "enzyme";

import LandingLoading from "./LandingLoading";

describe("LandingLoading", () => {
  it("should render pretty neat landing animation that matches snapshot", () => {
    const wrapper = shallow(<LandingLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
