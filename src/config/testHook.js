import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });

const TestHook = ({ callback }) => {
  callback();
  return null;
};

export const testHook = async callback => {
  await mount(<TestHook callback={callback} />);
};
