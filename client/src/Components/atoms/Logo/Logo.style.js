import { css } from "styled-components";

export const LogoStyle = css`
  ${(props) => {
    switch (props.varient) {
      case "secondary":
        return `
          height: ${props.theme.logoSizes.medium};
          width: ${props.theme.logoSizes.medium};
        `;
      case "primary":
        return `
          height: ${props.theme.logoSizes.small};
          width: ${props.theme.logoSizes.small};
        `;
      case "auto":
        return ``;
      default:
        return null;
    }
  }}
`;
