import styled from "styled-components";
const addCommentStyle = styled.form`
  display: flex;
  padding: 10px;
  margin: 5px;
  border: 2px black solid;
  align-items: center;
  justify-content: space-between;
  .addComment-input {
    margin: 0px;
    width: 70%;
  }
  .addComment-addButton {
    width: 20%;
    font-size:1vw;
  }
  .addComment-close {
    padding: 8px;
  }
`;
export default addCommentStyle;
