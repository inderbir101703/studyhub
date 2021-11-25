import styled from "styled-components";
const PostStyle = styled.div`
  border: 2px solid
    ${(props) => {
      if (props.theme.theme === "dark") return "white";
      else return "black";
    }};
  border-radius: 5px;
  padding: 5px;
  display: flex;
  margin: 5px;
  margin-bottom: 15px;
  flex-direction: column;

  h4 {
    margin: 0px;
  }
  img {
    height: 80%;
    padding: 0px 5px 0px 5px;
  }
  p {
    background-color: ${(props) => {
      if (props.theme.theme === "dark") return "#3E3E3E";
      else return "#ededed";
    }};

    text-align: justify;
    padding: 5px;
  }
  button {
    padding: 10px;
    margin: 0px 5px 0px 5px;
  }
  .post-header {
    display: flex;
    padding: 5px;

    align-items: center;
  }
  .post-interaction {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .post-interaction-button {
    }
  }
`;
export default PostStyle;
