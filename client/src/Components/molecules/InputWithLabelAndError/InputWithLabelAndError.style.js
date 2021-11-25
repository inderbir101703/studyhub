import styled from "styled-components";
const InputStyle = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .general-input {
    width: 100%;
    margin: 5px;

    outline: none;
  }
  .general-label {
    font-weight: 100;

    align-self: flex-start;
  }
  .general-error {
    align-self: center;
    color: red;
    font-size: 10px;
  }
`;
export default InputStyle;
