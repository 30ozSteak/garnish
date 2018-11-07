import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App.js";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should resemble the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should start with an empty array as the state of news", () => {
    const startingState = {
      news: []
    };
    expect(startingState.news).toEqual([]);
  });

  it.skip("should set data in redux state", () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setData();

    expect(dispatch.mock.calls).toEqual({ type: "TOGGLE_DARKMODE" });
  });
});
