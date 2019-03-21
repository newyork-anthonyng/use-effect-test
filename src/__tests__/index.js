import React from "react";
import Counter from "../index";
import { mount } from "enzyme";

it("test", () => {
    const wrapper = mount(<Counter />);
    const headerEle = wrapper.find("h1");
    expect(headerEle.text()).toEqual("Count: 0");

    const buttonEle = wrapper.find("button");
    buttonEle.simulate("click");
    expect(headerEle.text()).toEqual("Count: 1");
});