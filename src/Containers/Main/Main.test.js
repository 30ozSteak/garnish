import React from "react";
import { shallow } from "enzyme";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./Main";

import { Main } from "./Main";

describe("Main", () => {
  it("should resemble the snapshot", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
