import React from "react";
import { shallow } from "enzyme";
import { connect } from "react-redux";
import { darkMode, mapDispatchToProps, mapStateToProps } from "./Header";

import Header from "./Header";

describe("Header", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it.skip("should map state to props", () => {
    let darkMode = { darkMode: false };
    const expected = { darkMode: false };
    const mockState = {
      darkMode
    };
    const mappedItToProps = mapStateToProps(mockState);
    expect(mappedItToProps).toEqual(expected);
  });
});
