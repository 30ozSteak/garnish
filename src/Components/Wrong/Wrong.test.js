import React from "react";
import { shallow } from "enzyme";

import Wrong from "./Wrong";

describe("Wrong way", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Wrong />);
    expect(wrapper).toMatchSnapshot();
  });
});
