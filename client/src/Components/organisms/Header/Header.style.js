import styled from "styled-components";
const HeaderStyle = styled.header`
  background-color: ${(props) => {
    if (props.theme.theme === "dark") return "#3E3E3E";
    else return "#ededed";
  }};
  padding: 5px;
  border-bottom: #fdfdfd;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 5%;
  padding-left: 5%;
  img {
    padding: 5px;
  }

  .react-toggle-track-check,
  .react-toggle-track-x {
    margin-top: 4px;
  }
`;
export default HeaderStyle;
