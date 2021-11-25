import styled from "styled-components";

//  small-radius - Profile picture of the User
//  medium - Project logo in Search landing page
//  large  - Login & Sign-up Carousel images

export const ImageStyle = styled.img`
  border-radius: ${(props) => {
    try {
      switch (props.varient) {
        case "user":
          return "50%";
        case "medium":
          return "0%";
        case "large":
          return "0%";
        case "auto":
          return "0%";
        default:
          return "inherit";
      }
    } catch {
      return null;
    }
  }};

  width: ${(props) => {
    try {
      switch (props.varient) {
        case "user":
          return "30px";
        default:
          return "inherit";
      }
    } catch {
      return null;
    }
  }};
`;
