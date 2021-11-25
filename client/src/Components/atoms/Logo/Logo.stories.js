import React from "react";
import Logo from "./Logo";

export default {
  title: "Logo",
  component: Logo,
  argTypes: {},
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "logo.png",
  alt: "Header Logo of the Project Audit Tool",
  varient: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: "logo.png",
  alt: "Sign-up Page Logo of the Project Audit Tool",
  varient: "secondary",
};

export const Auto = Template.bind({});
Auto.args = {
  src: "logo.png",
  alt: "Logo of the Project Audit Tool",
  varient: "auto",
  style: {
    height: "50px",
    width: "100px",
  },
};
