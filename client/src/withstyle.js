import styled from "styled-components";

export default (Wrapper, stylesPassedToComp) => {
  return styled(Wrapper)`
    ${stylesPassedToComp};
  `;
};
