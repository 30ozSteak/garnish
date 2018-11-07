/* eslint-disable */
import React from "react";
import * as Actions from "../Actions";
import { configure } from "enzyme";
import { shallow, mount } from "enzyme";

describe.skip("Actions", () => {
  it("should have an action of type TOGGLE_DARKMODE", () => {
    let initialState = [
      {
        darkMode: false
      }
    ];

    let expectedAction = {
      type: "TOGGLE_DARKMODE",
      darkMode: true
    };

    let result = Actions.initialState();

    expect(result).toEqual(expectedAction);
  });
});
