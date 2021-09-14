import React from "react";
import { render, shallow } from "enzyme";
import Alert from "..";

describe("Alert", () => {
  const title = "Testing Title";

  it('should support type of "info" | "warning" | "error" | "success"', () => {
    const info = shallow(<Alert title={title} type="info" />);
    expect(() => info.unmount()).not.toThrow();
    const warning = shallow(<Alert title={title} type="warning" />);
    expect(() => warning.unmount()).not.toThrow();
    const error = shallow(<Alert title={title} type="error" />);
    expect(() => error.unmount()).not.toThrow();
    const success = shallow(<Alert title={title} type="success" />);
    expect(() => success.unmount()).not.toThrow();
  });

  it("should render element", () => {
    const element = render(<Alert title={title} />);
    expect(element).toMatchSnapshot();
  });
});
