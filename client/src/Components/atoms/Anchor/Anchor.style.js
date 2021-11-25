import styled from "styled-components";
import { textColor } from "../../../App.style";
export const LinkStyle = styled.a`
  color: ${textColor};

  text-decoration: none;
  &:hover {
    color: inherit;
  }
  &:active {
    color: inherit;
  }
`;
