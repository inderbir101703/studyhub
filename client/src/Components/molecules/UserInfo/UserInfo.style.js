import styled from "styled-components";
const UserInfoStyle = styled.div`
  border: 2px solid
    ${(props) => {
      if (props.theme.theme === "dark") return "white";
      else return "black";
    }};
  display: flex;
  padding: 5px;
  margin: 5px;
  width: 90%;
  align-self: center;
  justify-content: center;
  .user-details {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 5px;
    margin-left: 5%;
    span {
      margin: 5px;

      background-color: ${(props) => {
        if (props.theme.theme === "dark") return "#3E3E3E";
        else return "#ededed";
      }};
      border-radius: 5px;
      padding: 5px;
    }

    border: 2px solid
      ${(props) => {
        if (props.theme.theme === "dark") return "white";
        else return "black";
      }};
    border-radius: 5px;
  }
  align-items: center;
  img {
    width: 200px;
  }
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;
export default UserInfoStyle;
