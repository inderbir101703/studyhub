import styled from "styled-components";
import theme from "styled-theming";
export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});
export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});
export const buttonBackgroundColor = theme("theme", {
  light: "red",
  dark: "blue",
});
export const headerBackgroundColor = theme("theme", {
  light: "06D755",
  dark: "blue",
});
export const AppStyle = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  body {
    display: flex;
    flex-direction: column;
  }

  .post-and-topic-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 800px) {
    .SideNavShow {
      flex-basis: 30%;
    }
    .ContentLarge {
      width: 100%;
    }
    .ContentSmall {
      width: 70%;
    }
    .post-and-topic-container {
      flex-direction: column-reverse;
    align-items:center;}
  }
`;
