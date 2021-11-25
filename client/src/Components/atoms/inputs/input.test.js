import Input from "./input";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";


test("Username", () => {
  const wrapper = render(
  <Input
    className="username"
    type="text"
    placeholder="Enter User Name"
  />
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});

test("Email", () => {
  const wrapper = render(
    <Input

    className="email"
    type="text"
    placeholder="Enter your email-address"
  /> 
  );

  expect(wrapper).toBeDefined();

  expect(wrapper).toMatchSnapshot();
});
test("Password", () => {
    const wrapper = render(
        <Input

        className="password"
        type="text"
        placeholder="Enter Password"
      />
    );
  
    expect(wrapper).toBeDefined();
  
    expect(wrapper).toMatchSnapshot();
  });
test("Confirmpassword", () => {
    const wrapper = render(
        <Input

        className="cnfpass"
        type="text"
        placeholder="Confirm your password"
      />
    );
  
    expect(wrapper).toBeDefined();
  
    expect(wrapper).toMatchSnapshot();
  });
test("Loginemail", () => {
    const wrapper = render(
        <Input

        className="loginemail"
        type="text"
        placeholder="Enter your email-address *"
      />
    );
  
    expect(wrapper).toBeDefined();
  
    expect(wrapper).toMatchSnapshot();
  });
test("Loginpass", () => {
    const wrapper = render(
        <Input

        className="loginpass"
        type="text"
        placeholder="Enter Password *"
      />
    );
  
    expect(wrapper).toBeDefined();
  
    expect(wrapper).toMatchSnapshot();
  });
test("Textbox", () => {
    const wrapper = render(
        <Input
        className="textbox"
        type="text"
        placeholder="Enter Your text here"
      />
    );
  
    expect(wrapper).toBeDefined();
  
    expect(wrapper).toMatchSnapshot();
  });
