import { css } from 'styled-components';

export const TextStyle = css`
color: ${props => {
  try{
    switch (props.varient.color) {
      case "white":
        return props.theme.colors.whiteColor;
      case "darkGrey":
        return props.theme.colors.darkGreyColor;
      case "blue":
        return props.theme.colors.blueColor;
      case "red":
        return props.theme.colors.redColor;
      case "green":
        return props.theme.colors.greenColor;
      case "yellow":
        return props.theme.colors.yellowColor;
      default:
        return props.theme.colors.blackColor;
    }
  }
  catch{
    return  null
  }
}
  };

background-color: ${props => {
  try{
    switch (props.varient.backgroundColor) {
      case "black":
        return props.theme.colors.blackColor;
      case "lightGrey":
        return props.theme.colors.lightGreyColor;
      case "lightPurple":
        return props.theme.colors.lightPurpleColor;
      case "darkPurple":
        return props.theme.colors.darkPurpleColor;
      default:
        return props.theme.colors.whiteColor;
    }
  }
  catch{
    return null
  }
}
  };

font-size: ${props => {
  try{
    switch (props.varient.fontSize) {
      case "font10":
        return props.theme.fontSizes.size10;
      case "font12":
        return props.theme.fontSizes.size12;
      case "font15":
        return props.theme.fontSizes.size15;
      case "font20":
        return props.theme.fontSizes.size20;
      default:
        return props.theme.fontSizes.sizeDefault;
    }
  }
   catch{
     return null
   }
  }
  };

border: ${props => {
  try{
    switch (props.varient.border) {
      case "border":
        return props.theme.border.border1;
      default:
        return props.theme.fontSizes.sizeNone;
    }
  }
  catch{
    return null
  }
}
  };

border-radius: ${props => {
  try{
    switch (props.varient.borderRadius) {
      case "radius15":
        return props.theme.fontSizes.size15;
      default:
        return props.theme.fontSizes.sizeNone;
    }
  }
  catch{
    return null
  }
}
  };
font-weight: normal;
`;