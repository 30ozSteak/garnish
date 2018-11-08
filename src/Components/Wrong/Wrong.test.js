import React from "react";
import Wrong from "./Wrong";
import { shallow } from "enzyme";

describe("Wrong way", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Wrong />);
    expect(wrapper).toMatchSnapshot();
  });
});
