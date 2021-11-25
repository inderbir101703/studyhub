import React from 'react';
import TextElement from './Text';

export default {
  title: "TextElement",
  component: TextElement,
  argTypes: {},
};

const Template = (args) => <TextElement {...args} />;

export const Text1 = Template.bind({});
Text1.args = {
  content: "Lorem Ipsum",
  varient: {
    color: "red",
    backgroundColor: "",
    fontSize: "",
    border:"border",
    borderRadius:"radius15"
  }
};

export const Text2 = Template.bind({});
Text2.args = {
  content: "Hello",
  varient: {
    color: "",
    backgroundColor: "lightGrey",
    fontSize: "font20",
    border:"",
    borderRadius:""
  }
};

export const Default = Template.bind({});
Default.args = {
  content: "Hi",
  varient: {
    color: "",
    backgroundColor: "",
    fontSize: "",
    border:"",
    borderRadius:""
  }
};

console.log(TextElement);
