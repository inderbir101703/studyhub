import styled from "styled-components";
const EditPostStyle = styled.form`
  display: flex;
  flex-direction: column;

  padding: 5px;

  .heading {
    align-self: center;
  }
  .topic {
    margin-bottom: 10px;
  }
  .addPost-label {
    font-weight: 100;
    margin-bottom: 5px;
  }
  #postBody {
    margin-bottom: 15px;

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
export default EditPostStyle;
