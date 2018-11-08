import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App.js";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Should render like snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("map state to props should return dark mode state", () => {
    const expected = false;
    const initialState = {
      darkMode: false
    };
    const results = mapStateToProps(initialState);

    expect(results.darkMode).toEqual(expected);
  });
});
