import styled from "styled-components";
const SignUpFormStyle = styled.form`
  display: flex;
  flex-direction: column;

  padding: 5px;
  .signUp-label {
    font-weight: 100;

    align-self: flex-start;
  }
  .heading {
    align-self: center;
  }
  #signUp-hobbies {
    margin: 5px;

    outline: none;
    border: 1px solid rgb(118, 118, 118);
  }
  .general-error {
    align-self: center;
    color: red;
    margin-bottom: 5px;
    font-size: 10px;
  }
`;
export default SignUpFormStyle;
