import React from 'react';

import Icon from './icon';

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
      
    },
  };

const Template = (args) => <Icon {...args} />;

export const Home = Template.bind({});
Home.args = {
  iconClassName: "fas faHome",
  reqOnClick:true,
  onClick:()=>console.log("home icon is clicked")
};

export const Document = Template.bind({});
Document.args = {
  iconClassName: "fas faFileAlt",
  size: "sm",
  style:{"backgroundColor":"black","color":"white","padding":"1em"}
};

export const BarGraph = Template.bind({});
BarGraph.args = {
  iconClassName: "fas faSignal",
  size: "sm",
  style:{"backgroundColor":"black","color":"white","padding":"1em"}
};

export const Bell = Template.bind({});
Bell.args = {
  iconClassName: "far faBell",
  size: "sm",
  color:"white",
  style:{"backgroundColor":"rgba(78,57,131,255)","padding":"1em"}
};

export const share = Template.bind({});
share.args = {
  iconClassName: "fas faShareAlt",
  size: "sm",
  style:{"color":"white","backgroundColor":"black","padding":"1em"}
};

export const Delete = Template.bind({});
Delete.args = {
  iconClassName: "fas faTrashAlt",
  size: "sm"

};

export const username = Template.bind({});
username.args = {
  iconClassName: "far faUser",
  size: "sm",
  color:"blue",
  style:{}
};

export const mail = Template.bind({});
mail.args = {
  iconClassName: "far faEnvelopeOpen",
  size: "sm",
  color:"blue",
  style:{}
};

export const password = Template.bind({});
password.args = {
  iconClassName: "fas faCamera",
  size: "sm",
  style:{"color":"white","backgroundColor":"black","padding":"1em"}
};

export const LeftArrow = Template.bind({});
LeftArrow.args = {
  iconClassName: "fas faChevronLeft",
  size: "sm",
  style:{"backgroundColor":"rgba(78,57,131,255)","color":"white","padding":"1em"}
};

export const search = Template.bind({});
search.args = {
  iconClassName: "fas faSearch",
  size: "sm",
  style:{"backgroundColor":"rgba(78,57,131,255)","color":"white","padding":"1em"}
};

export const cancel = Template.bind({});
cancel.args = {
  iconClassName: "fas faTimes",
  size: "sm",
  style:{"backgroundColor":"rgba(78,57,131,255)","color":"white","padding":"1em"}
};

export const plus = Template.bind({});
plus.args = {
  iconClassName: "fas faPlus",
  size: "sm",
  style:{"color":"rgba(78,57,131,255)"}
};

export const Done = Template.bind({});
Done.args = {
  iconClassName: "fas faCheckCircle",
  size: "sm",
  color:"green",
  style:{"backgroundColor":"white"}
};

export const IconUsingClassName = Template.bind({});
IconUsingClassName.args = {
  iconClassName:"far faBell",
  size: "sm",
  color:"blue",
  style:{}
};
